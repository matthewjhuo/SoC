import { useState } from 'react';
import { Cpu, FileText, Layers, Video, Play, Activity, Check, Copy, TerminalSquare, Settings, ShieldCheck, Network, Send, HardDrive } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import Mx25l1605FlashPanel from '../components/Mx25l1605FlashPanel';

// Code snippets
const APB_SPI_RTL = `// apb_spi.sv - APB-to-SPI Bridge Module (Motorola S12SPIV3 Compliant)
\`timescale 1ns/1ps

module apb_spi (
    input  logic        pclk,
    input  logic        presetn,
    input  logic [3:0]  paddr,
    input  logic        psel,
    input  logic        penable,
    input  logic        pwrite,
    input  logic [31:0] pwdata,
    output logic [31:0] prdata,
    output logic        pready,
    output logic        pslverr,

    // SPI Interface Ports
    output logic        sck,
    output logic        mosi,
    input  logic        miso,
    output logic        ss_n,

    // Host Interrupt Line
    output logic        irq
);
    // S12SPIV3 Registers Mapping
    logic [7:0] spicr1;     // Offset 4'h0: Control Register 1
    logic [7:0] spicr2;     // Offset 4'h1: Control Register 2
    logic [7:0] spibr;      // Offset 4'h2: Baud Rate Register
    logic [7:0] spidr_rx;   // Offset 4'h5: Data Register Read (Rx Buffer)
    logic [7:0] spidr_tx;   // Offset 4'h5: Data Register Write (Tx Buffer)

    // Control bits aliases
    logic spie, spe, sptie, mstr, cpol, cpha, ssoe, lsbfe;
    assign {spie, spe, sptie, mstr, cpol, cpha, ssoe, lsbfe} = spicr1;

    logic modfen, bidiroe, spiswai, spc0;
    assign modfen  = spicr2[4];
    assign bidiroe = spicr2[3];
    assign spiswai = spicr2[1];
    assign spc0    = spicr2[0];

    // Status bits aliases (SPIF, SPTEF, MODF)
    logic spisr_read;       // Read flag for SPIF clear handshake
    logic spif, sptef, modf;
    logic [7:0] spisr;
    assign spisr = {spif, 1'b0, sptef, modf, 4'b0000};

    // Baud Rate Division Generator
    logic [15:0] baud_div;
    logic [15:0] clk_cnt;
    logic [2:0] sppr;
    logic [2:0] spr;
    assign sppr = spibr[6:4];
    assign spr  = spibr[2:0];

    always_comb begin
        // Divisor = (SPPR + 1) * 2^(SPR + 1)
        baud_div = (sppr + 1) * (1 << (spr + 1));
    end

    // FSM States
    typedef enum logic [1:0] {
        IDLE     = 2'b00,
        TRANSFER = 2'b01,
        DONE     = 2'b10
    } state_t;
    state_t state;

    logic [2:0] bit_cnt;
    logic [7:0] shift_reg_tx;
    logic [7:0] shift_reg_rx;
    logic       sck_reg;
    logic       spi_active;
    logic       first_edge;

    // Clock assignment
    assign sck = (state == TRANSFER) ? sck_reg : cpol;

    // Master Slave-Select Output driver
    assign ss_n = (mstr && modfen && ssoe) ? ~spi_active : 1'b1;

    // Register Write Channel
    always_ff @(posedge pclk or negedge presetn) begin
        if (!presetn) begin
            spicr1   <= 8'h04; // Reset: CPHA = 1
            spicr2   <= 8'h00;
            spibr    <= 8'h00;
            spidr_tx <= 8'h00;
            sptef    <= 1'b1;  // empty on reset
        end else if (psel && penable && pwrite) begin
            case (paddr[3:0])
                4'h0: spicr1 <= pwdata[7:0];
                4'h1: spicr2 <= pwdata[7:0];
                4'h2: spibr  <= pwdata[7:0];
                4'h5: begin
                    if (sptef) begin
                        spidr_tx <= pwdata[7:0];
                        sptef    <= 1'b0; // load TX shifts flag empty
                    end
                end
                default: ;
            endcase
        end else if (state == DONE) begin
            sptef <= 1'b1; // transaction finished
        end
    end

    // Register Read Channel
    always_comb begin
        pready  = 1'b1;
        pslverr = 1'b0;
        case (paddr[3:0])
            4'h0: prdata = {24'b0, spicr1};
            4'h1: prdata = {24'b0, spicr2};
            4'h2: prdata = {24'b0, spibr};
            4'h3: prdata = {24'b0, spisr};
            4'h5: prdata = {24'b0, spidr_rx};
            default: prdata = 32'h0;
        endcase
    end

    // SPIF status read-clear mechanism
    always_ff @(posedge pclk or negedge presetn) begin
        if (!presetn) begin
            spisr_read <= 1'b0;
            spif       <= 1'b0;
            spidr_rx   <= 8'h00;
        end else begin
            if (psel && !pwrite && (paddr[3:0] == 4'h3)) begin
                spisr_read <= 1'b1;
            end
            if (psel && !pwrite && (paddr[3:0] == 4'h5)) begin
                if (spisr_read) begin
                    spif       <= 1'b0;
                    spisr_read <= 1'b0;
                end
            end
            if (state == DONE) begin
                spif     <= 1'b1;
                spidr_rx <= shift_reg_rx;
            end
        end
    end

    // Interrupt signal logic
    assign irq = spie && (spif || modf);

    // SPI Master Engine FSM
    always_ff @(posedge pclk or negedge presetn) begin
        if (!presetn) begin
            state        <= IDLE;
            clk_cnt      <= 0;
            bit_cnt      <= 0;
            sck_reg      <= 1'b0;
            mosi         <= 1'b0;
            shift_reg_tx <= 8'h00;
            shift_reg_rx <= 8'h00;
            spi_active   <= 1'b0;
            first_edge   <= 1'b0;
            modf         <= 1'b0;
        end else if (spe && mstr) begin
            case (state)
                IDLE: begin
                    clk_cnt    <= 0;
                    bit_cnt    <= 0;
                    sck_reg    <= cpol;
                    spi_active <= 1'b0;
                    if (!sptef) begin
                        shift_reg_tx <= spidr_tx;
                        state        <= TRANSFER;
                        spi_active   <= 1'b1;
                        first_edge   <= 1'b1;
                        mosi         <= lsbfe ? spidr_tx[0] : spidr_tx[7];
                    end
                end

                TRANSFER: begin
                    if (clk_cnt >= (baud_div / 2) - 1) begin
                        clk_cnt <= 0;
                        sck_reg <= ~sck_reg;
                        first_edge <= ~first_edge;

                        if (cpha == 0) begin
                            if (first_edge) begin // latch input
                                if (lsbfe)
                                    shift_reg_rx[bit_cnt] <= miso;
                                else
                                    shift_reg_rx[7 - bit_cnt] <= miso;
                            end else begin // shift output
                                if (bit_cnt == 7) begin
                                    state <= DONE;
                                end else begin
                                    bit_cnt <= bit_cnt + 1;
                                    mosi <= lsbfe ? shift_reg_tx[bit_cnt + 1] : shift_reg_tx[7 - (bit_cnt + 1)];
                                end
                            end
                        end else begin // CPHA == 1
                            if (first_edge) begin // shift output
                                mosi <= lsbfe ? shift_reg_tx[bit_cnt + 1] : shift_reg_tx[7 - (bit_cnt + 1)];
                            end else begin // latch input
                                if (lsbfe)
                                    shift_reg_rx[bit_cnt] <= miso;
                                else
                                    shift_reg_rx[7 - bit_cnt] <= miso;

                                if (bit_cnt == 7) begin
                                    state <= DONE;
                                end else begin
                                    bit_cnt <= bit_cnt + 1;
                                end
                            end
                        end
                    end else begin
                        clk_cnt <= clk_cnt + 1;
                    end
                end

                DONE: begin
                    mosi       <= 1'b0;
                    spi_active <= 1'b0;
                    state      <= IDLE;
                end
            endcase
        end else begin
            state <= IDLE;
        end
    end
endmodule
`;

const UVM_ENV_CODE = `// uvm_spi_tb.sv - Complete Industrial-Grade UVM Verification Environment
\`timescale 1ns/1ps

import uvm_pkg::*;
\`include "uvm_macros.svh"

// ----------------------------------------------------
// 1. SPI Transaction (Sequence Item)
// ----------------------------------------------------
class spi_item extends uvm_sequence_item;
    rand bit [3:0]  addr;
    rand bit        write;
    rand bit [31:0] data;
    bit      [31:0] resp_data;

    \`uvm_object_utils_begin(spi_item)
        \`uvm_field_int(addr, UVM_DEFAULT)
        \`uvm_field_int(write, UVM_DEFAULT)
        \`uvm_field_int(data, UVM_DEFAULT)
        \`uvm_field_int(resp_data, UVM_DEFAULT)
    \`uvm_object_utils_end

    function new(string name = "spi_item");
        super.new(name);
    endfunction
endclass

// ----------------------------------------------------
// 2. APB Interface
// ----------------------------------------------------
interface apb_if(input logic pclk, input logic presetn);
    logic [3:0]  paddr;
    logic        psel;
    logic        penable;
    logic        pwrite;
    logic [31:0] pwdata;
    logic [31:0] prdata;
    logic        pready;
    logic        pslverr;
endinterface

// ----------------------------------------------------
// 3. APB Master Driver (UVM Driver)
// ----------------------------------------------------
class apb_driver extends uvm_driver #(spi_item);
    \`uvm_component_utils(apb_driver)
    virtual apb_if vif;

    function new(string name, uvm_component parent);
        super.new(name, parent);
    endfunction

    virtual function void build_phase(uvm_phase phase);
        super.build_phase(phase);
        if (!uvm_config_db#(virtual apb_if)::get(this, "", "vif", vif))
            \`uvm_fatal("NO_VIF", "Could not get virtual APB interface from config_db")
    endfunction

    virtual task run_phase(uvm_phase phase);
        vif.psel    <= 0;
        vif.penable <= 0;
        vif.pwrite  <= 0;
        
        forever begin
            seq_item_port.get_next_item(req);
            \`uvm_info("DRV", $sformatf("Driving APB %s to Addr: %0h, Data: %0h", 
                       req.write ? "WRITE" : "READ", req.addr, req.data), UVM_HIGH)
            drive_transfer(req);
            seq_item_port.item_done();
        end
    endtask

    local task drive_transfer(spi_item item);
        @(posedge vif.pclk);
        vif.paddr   <= item.addr;
        vif.psel    <= 1;
        vif.pwrite  <= item.write;
        vif.pwdata  <= item.data;
        
        @(posedge vif.pclk);
        vif.penable <= 1;
        
        @(posedge vif.pclk);
        while (!vif.pready) @(posedge vif.pclk);
        
        if (!vif.pwrite) begin
            item.resp_data = vif.prdata;
        end
        vif.psel    <= 0;
        vif.penable <= 0;
    endtask
endclass

// ----------------------------------------------------
// 4. APB Monitor (UVM Monitor)
// ----------------------------------------------------
class apb_monitor extends uvm_monitor;
    \`uvm_component_utils(apb_monitor)
    virtual apb_if vif;
    uvm_analysis_port #(spi_item) ap;

    function new(string name, uvm_component parent);
        super.new(name, parent);
        ap = new("ap", this);
    endfunction

    virtual function void build_phase(uvm_phase phase);
        super.build_phase(phase);
        if (!uvm_config_db#(virtual apb_if)::get(this, "", "vif", vif))
            \`uvm_fatal("NO_VIF", "Could not get virtual APB interface")
    endfunction

    virtual task run_phase(uvm_phase phase);
        forever begin
            @(posedge vif.pclk);
            if (vif.psel && vif.penable && vif.pready) begin
                spi_item item = spi_item::type_id::create("item");
                item.addr      = vif.paddr;
                item.write     = vif.pwrite;
                item.data      = vif.pwrite ? vif.pwdata : vif.prdata;
                ap.write(item);
            end
        end
    endtask
endclass

// ----------------------------------------------------
// 5. UVM Scoreboard & Environment
// ----------------------------------------------------
class spi_scoreboard extends uvm_scoreboard;
    \`uvm_component_utils(spi_scoreboard)
    uvm_analysis_imp #(spi_item, spi_scoreboard) apb_imp;
    bit [7:0] tx_history[$];

    function new(string name, uvm_component parent);
        super.new(name, parent);
        apb_imp = new("apb_imp", this);
    endfunction

    virtual function void write(spi_item item);
        // If write to SPIDR (register offset 5), queue the data
        if (item.write && item.addr == 4'h5) begin
            tx_history.push_back(item.data[7:0]);
            \`uvm_info("SCB", $sformatf("Queued expected TX data: 8'h%0h", item.data[7:0]), UVM_MEDIUM)
        end
        // If read from SPIDR, check the rx loopback consistency
        if (!item.write && item.addr == 4'h5) begin
            if (tx_history.size() > 0) begin
                bit [7:0] expected = tx_history.pop_front();
                if (item.data[7:0] == expected) begin
                    \`uvm_info("SCB_PASS", $sformatf("MATCHED loopback write-read: 8'h%0h == 8'h%0h", 
                               expected, item.data[7:0]), UVM_LOW)
                end else begin
                    \`uvm_error("SCB_FAIL", $sformatf("MISMATCH! Expected: 8'h%0h, Got: 8'h%0h", 
                               expected, item.data[7:0]))
                end
            end
        end
    endfunction
endclass

class apb_agent extends uvm_agent;
    \`uvm_component_utils(apb_agent)
    apb_driver    driver;
    apb_monitor   monitor;
    uvm_sequencer #(spi_item) sequencer;

    function new(string name, uvm_component parent);
        super.new(name, parent);
    endfunction

    virtual function void build_phase(uvm_phase phase);
        super.build_phase(phase);
        monitor   = apb_monitor::type_id::create("monitor", this);
        driver    = apb_driver::type_id::create("driver", this);
        sequencer = uvm_sequencer#(spi_item)::type_id::create("sequencer", this);
    endfunction

    virtual function void connect_phase(uvm_phase phase);
        driver.seq_item_port.connect(sequencer.seq_item_export);
    endfunction
endclass

class spi_env extends uvm_env;
    \`uvm_component_utils(spi_env)
    apb_agent      agent;
    spi_scoreboard scoreboard;

    function new(string name, uvm_component parent);
        super.new(name, parent);
    endfunction

    virtual function void build_phase(uvm_phase phase);
        super.build_phase(phase);
        agent      = apb_agent::type_id::create("agent", this);
        scoreboard = spi_scoreboard::type_id::create("scoreboard", this);
    endfunction

    virtual function void connect_phase(uvm_phase phase);
        agent.monitor.ap.connect(scoreboard.apb_imp);
    endfunction
endclass
`;

const RUNNABLE_SV_TB = `// tb_class_spi.sv - Runnable SystemVerilog Class-Based verification harness
\`timescale 1ns/1ps

module tb_class_spi;
    logic        pclk;
    logic        presetn;
    logic [3:0]  paddr;
    logic        psel;
    logic        penable;
    logic        pwrite;
    logic [31:0] pwdata;
    logic [31:0] prdata;
    logic        pready;
    logic        pslverr;

    logic        sck;
    logic        mosi;
    logic        miso;
    logic        ss_n;
    logic        irq;

    // Master-Slave Serial Digital Loopback connection
    assign miso = mosi;

    // Instantiate APB-SPI design under test
    apb_spi dut (.*);

    // Clock gen: 100MHz (10ns period)
    initial pclk = 0;
    always #5 pclk = ~pclk;

    // Generator-Driver-Monitor-Scoreboard Object Orientation
    class APB_Driver;
        task apb_write(logic [3:0] addr, logic [7:0] val);
            @(posedge tb_class_spi.pclk);
            tb_class_spi.paddr   <= addr;
            tb_class_spi.psel    <= 1'b1;
            tb_class_spi.pwrite  <= 1'b1;
            tb_class_spi.pwdata  <= val;
            @(posedge tb_class_spi.pclk);
            tb_class_spi.penable <= 1'b1;
            @(posedge tb_class_spi.pclk);
            while (!tb_class_spi.pready) @(posedge tb_class_spi.pclk);
            tb_class_spi.psel    <= 1'b0;
            tb_class_spi.penable <= 1'b0;
        endtask

        task apb_read(logic [3:0] addr, output logic [7:0] val);
            @(posedge tb_class_spi.pclk);
            tb_class_spi.paddr   <= addr;
            tb_class_spi.psel    <= 1'b1;
            tb_class_spi.pwrite  <= 1'b0;
            @(posedge tb_class_spi.pclk);
            tb_class_spi.penable <= 1'b1;
            @(posedge tb_class_spi.pclk);
            while (!tb_class_spi.pready) @(posedge tb_class_spi.pclk);
            val = tb_class_spi.prdata[7:0];
            tb_class_spi.psel    <= 1'b0;
            tb_class_spi.penable <= 1'b0;
        endtask
    endclass

    class SPI_Scoreboard;
        logic [7:0] tx_history[50];
        int write_ptr = 0;
        int read_ptr = 0;
        
        function void push_tx(logic [7:0] data);
            tx_history[write_ptr] = data;
            write_ptr = write_ptr + 1;
            $display("[Scoreboard] Expected Data queued: 8'h%0h", data);
        endfunction

        function void check_rx(logic [7:0] data);
            logic [7:0] expected;
            if (read_ptr >= write_ptr) begin
                $display("[FAIL] Scoreboard Error: Unexpected RX packet logic: 8'h%0h", data);
            end else begin
                expected = tx_history[read_ptr];
                read_ptr = read_ptr + 1;
                if (expected == data) begin
                    $display("[SUCCESS] Scoreboard Verified. Loopback match: 8'h%0h", data);
                end else begin
                    $display("[FAIL] Scoreboard Error: Mismatch! Expecting: 8'h%0h, Received: 8'h%0h", expected, data);
                end
            end
        endfunction
    endclass

    // Instantiation
    APB_Driver driver;
    SPI_Scoreboard scoreboard;

    initial begin
        $dumpfile("dump.vcd");
        $dumpvars(0, tb_class_spi);

        driver     = new();
        scoreboard = new();
        
        presetn    = 0;
        paddr      = 0;
        psel       = 0;
        penable    = 0;
        pwrite     = 0;
        pwdata     = 0;

        #20;
        presetn    = 1;
        #20;

        $display("-------------------------------------------------------------------");
        $display("[UVM-Mock SV Simulation] Running APB to S12SPIV3 Registers Handshake");
        $display("-------------------------------------------------------------------");

        // 1. SPI Control Register 1: SPE=1 (Enable), MSTR=1 (Master), CPHA=1 (0x54)
        $display("[TB Driver] Configuring SPICR1 with 8'h54...");
        driver.apb_write(4'h0, 8'h54);

        // 2. SPI Control Register 2: MODFEN=1, SSOE=1 (0x11)
        $display("[TB Driver] Configuring SPICR2 with 8'h11...");
        driver.apb_write(4'h1, 8'h11);

        // 3. SPI Baud Rate Select: Divisor = 4 (sppr=0, spr=1) (0x01)
        $display("[TB Driver] Configuring SPIBR with 8'h01 (Divisor = 4)...");
        driver.apb_write(4'h2, 8'h01);

        // 4. Testcase 1: Write data 8'hC3 to SPIDR (Tx register)
        $display("\\n[TB TestCase 1] Loading SPI Tx Register with: 8'hC3");
        scoreboard.push_tx(8'hC3);
        driver.apb_write(4'h5, 8'hC3);

        // 5. Poll SPISR till SPIF (Bit 7) is asserted
        begin
            logic [7:0] status;
            status = 0;
            while ((status & 8'h80) == 0) begin
                #10;
                driver.apb_read(4'h3, status);
            end
            $display("[TB Monitor] Transmit Finished. SPIF flag high. Reading RX Data Register...");
            driver.apb_read(4'h5, status);
            scoreboard.check_rx(status);
        end

        #40;
        // 6. Testcase 2: Write data 8'h5A to SPIDR
        $display("\\n[TB TestCase 2] Loading SPI Tx Register with: 8'h5A");
        scoreboard.push_tx(8'h5A);
        driver.apb_write(4'h5, 8'h5A);

        begin
            logic [7:0] status;
            status = 0;
            while ((status & 8'h80) == 0) begin
                #10;
                driver.apb_read(4'h3, status);
            end
            $display("[TB Monitor] Transmit Finished. SPIF flag high. Reading RX Data Register...");
            driver.apb_read(4'h5, status);
            scoreboard.check_rx(status);
        end

        #100;
        $display("\\n-------------------------------------------------------------------");
        $display("[UVM-Mock SV Simulation] Completed successfully. Exited.");
        $display("-------------------------------------------------------------------");
        $finish;
    end
endmodule
`;

export default function SocSpiProjectPage() {
    const [activeTab, setActiveTab] = useState('plan');
    const [isRunning, setIsRunning] = useState(false);
    const [simLog, setSimLog] = useState('');
    const [svCode, setSvCode] = useState(APB_SPI_RTL + '\n' + RUNNABLE_SV_TB);

    const handleRunSim = async () => {
        setIsRunning(true);
        setSimLog('編譯並執行 SystemVerilog 拓撲模擬中 (Icarus Verilog)...');
        try {
            const res = await fetch('/api/compile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: svCode })
            });
            const data = await res.json();
            setSimLog(data.log);
        } catch (e) {
            setSimLog('模擬失敗: ' + e.message);
        }
        setIsRunning(false);
    };

    const handleWaveform = async () => {
        await fetch('/api/gtkwave', { method: 'POST' });
    };

    const testcases = [
        { id: 'TC_01', type: '暫存器驗證', desc: '透過 APB 介面驗證與配置所有 S12SPIV3 的暫存器讀寫正確性。', coverage: 'SPICR1, SPICR2, SPIBR' },
        { id: 'TC_02', type: 'Master 傳輸模組', desc: '配置 Master 模式並分別用 CPOL=0/1、CPHA=0/1 進行 8-bit 的資料傳輸，比對 mosi/miso 波形。', coverage: 'CPOL, CPHA, Bit Counter' },
        { id: 'TC_03', type: '除頻配置驗證', desc: '修改 SPIBR (除頻因子) 暫存器，量測 sck 通訊脈衝的週期，確保除頻值符合 Motorola 規範。', coverage: 'SPI Baud Rate Divisor' },
        { id: 'TC_04', type: 'Loopback 驗證', desc: '短路 MISO 與 MOSI，發送位元包後於 Scoreboard 確認接收暫存器的資料與原發送封包 100% 相同。', coverage: 'Data Loopback Match' },
        { id: 'TC_05', type: '中斷與旗標驗證', desc: '在資料傳輸完成後，檢查中斷訊號 irq 及 SPISR.SPIF 是否瞬時拉高，且在讀取 Status 再讀取 Data 後清空。', coverage: 'SPIF Clear Mechanism' }
    ];

    return (
        <div className="chapter-page animate-in">
            <div className="chapter-tag" style={{ background: 'rgba(162,210,255,0.15)', color: 'var(--color-accent-cyan)', borderColor: 'rgba(162,210,255,0.3)' }}>
                🏗️ 實戰專案
            </div>
            <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                SoC & SPI Block <span className="gradient-text-accent">UVM 驗證工作區</span>
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', marginBottom: '32px', maxWidth: '800px' }}>
                本模組以 Motorola <b>S12SPIV3</b> (APB-to-SPI Master Bridge) 與 Macronix <b>MX25L1605</b> (16Mbit SPI NOR Flash) 為核心，完整串聯主控端與記憶體驗證環境、UVM 架構與 Icarus Verilog 即時模擬。
            </p>

            {/* Tab select headers */}
            <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--color-border)', marginBottom: '24px', overflowX: 'auto', paddingBottom: '8px' }}>
                <button className={`btn ${activeTab === 'plan' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('plan')} style={{ padding: '8px 16px', display: 'flex', name: 'plan', gap: '6px', alignItems: 'center' }}>
                    <ShieldCheck size={16} /> 1. 驗證計畫 (Testplan)
                </button>
                <button className={`btn ${activeTab === 'design' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('design')} style={{ padding: '8px 16px', display: 'flex', name: 'design', gap: '6px', alignItems: 'center' }}>
                    <Cpu size={16} /> 2. SoC SPI 設計 (RTL)
                </button>
                <button className={`btn ${activeTab === 'uvm' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('uvm')} style={{ padding: '8px 16px', display: 'flex', name: 'uvm', gap: '6px', alignItems: 'center' }}>
                    <Layers size={16} /> 3. UVM 驗證環境
                </button>
                <button className={`btn ${activeTab === 'sim' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('sim')} style={{ padding: '8px 16px', display: 'flex', name: 'sim', gap: '6px', alignItems: 'center' }}>
                    <Activity size={16} /> 4. 交互式模擬演練
                </button>
                <button className={`btn ${activeTab === 'flash' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('flash')} style={{ padding: '8px 16px', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <HardDrive size={16} /> 5. SPI Flash 驗證 (MX25L1605)
                </button>
            </div>

            {/* Tab Content 1: Verification Plan */}
            {activeTab === 'plan' && (
                <div className="tab-pane animate-in">
                    <h3 style={{ marginBottom: '16px', color: 'var(--color-accent-cyan)' }}>S12SPIV3 / APB-SPI block-level 驗證計畫書</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '24px' }}>
                        此計畫書依據晶片規範制定，詳細定義了需要驗證的特徵 (Features)、檢查點 (Checkers)、覆蓋率目標 (Coverage Goals) 以及對應的測試案例設計：
                    </p>

                    <table className="info-table" style={{ width: '100%', marginBottom: '32px' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '80px' }}>編號</th>
                                <th style={{ width: '120px' }}>類型</th>
                                <th>特徵與內容描述</th>
                                <th style={{ width: '180px' }}>覆蓋率/檢查目標</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testcases.map(tc => (
                                <tr key={tc.id}>
                                    <td style={{ fontWeight: 700, color: 'var(--color-accent-cyan)' }}>{tc.id}</td>
                                    <td style={{ fontSize: '0.85rem' }}>
                                        <span className="skill-badge" style={{ margin: 0, padding: '2px 8px' }}>{tc.type}</span>
                                    </td>
                                    <td style={{ color: 'var(--color-text-secondary)' }}>{tc.desc}</td>
                                    <td style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-accent-purple)' }}>{tc.coverage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="card card-glow-cyan" style={{ marginBottom: '24px' }}>
                        <h4 style={{ marginBottom: '12px' }}>🔍 核心斷言 (SVA) 與功能覆蓋率目標</h4>
                        <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', paddingLeft: '20px', lineHeight: '1.6' }}>
                            <li><b>SCK 同步斷言</b>: <code>assert property (@(posedge clk) (state == TRANSFER) |-&gt; (sck == $past(sck_reg)));</code> 檢查 SCK 各相移在運作時與分頻完全對齊。</li>
                            <li><b>SS_n 主動選通斷言</b>: <code>assert property (@(posedge clk) (spi_active) |-&gt; !ss_n);</code> 確保傳輸中晶片選取訊號全程處於低電位。</li>
                            <li><b>SPIF 清除旗標斷言</b>: 確保在讀取狀態暫存器 SPISR 後，必須有對 SPIDR 的讀取動作才能將 SPIF 中斷旗標拉回到 0。</li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Tab Content 2: RTL Design */}
            {activeTab === 'design' && (
                <div className="tab-pane animate-in">
                    <h3 style={{ marginBottom: '8px', color: 'var(--color-accent-cyan)' }}>APB-to-SPI Bridge (SystemVerilog)</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                        此 RTL 程式為一個包含完整 APB 暫存器配置（SPICR1 / SPICR2 / SPIBR / SPISR / SPIDR）的正同步主端 SPI 傳輸電路：
                    </p>
                    <CodeBlock code={APB_SPI_RTL} lang="verilog" title="apb_spi.sv" />
                </div>
            )}

            {/* Tab Content 3: UVM TB */}
            {activeTab === 'uvm' && (
                <div className="tab-pane animate-in">
                    <h3 style={{ marginBottom: '8px', color: 'var(--color-accent-cyan)' }}>業界級 UVM Verification Component 模板</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                        此處展示符合 IEEE 1800.2 標準的模組層級 UVM 元件設計，包含交易物件 (Object)、驅動器 (Driver)、監測器 (Monitor) 與計分板 (Scoreboard) 的相依定義：
                    </p>
                    <CodeBlock code={UVM_ENV_CODE} lang="verilog" title="uvm_spi_tb.sv" />
                </div>
            )}

            {/* Tab Content 4: Interactive Simulation */}
            {activeTab === 'sim' && (
                <div className="tab-pane animate-in">
                    <h3 style={{ marginBottom: '8px', color: 'var(--color-accent-cyan)' }}>SystemVerilog 類別驗證環境模擬示範</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                        透過物件導向架構 (OTP/SV Class) 來模擬 UVM 模組化的驗證元件。您可以直接點選下方的模擬，在瀏覽器伺服器中呼叫 Icarus Verilog 進行電路時分脈波的實時行為模擬：
                    </p>

                    <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                        <button className="btn btn-primary" onClick={handleRunSim} disabled={isRunning} style={{ padding: '10px 20px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <Play size={16} /> {isRunning ? '模擬中...' : '執行 APB-SPI 模擬'}
                        </button>
                        <button className="btn btn-secondary" onClick={handleWaveform} style={{ padding: '10px 20px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <Activity size={16} /> 開啟 GTKWave 波形視窗
                        </button>
                    </div>

                    {simLog && (
                        <div className="code-block-console" style={{ marginTop: '16px' }}>
                            <div className="console-header"><TerminalSquare size={14} /> Icarus Verilog 模擬終端</div>
                            <pre className="console-body" style={{ maxHeight: '250px', overflowY: 'auto' }}>{simLog}</pre>
                        </div>
                    )}

                    <div style={{ marginTop: '24px' }}>
                        <h4 style={{ marginBottom: '12px', color: 'var(--color-text-primary)' }}>實體模擬源碼 (包含 DUT 與 OOP 驗證機制)</h4>
                        <CodeBlock code={RUNNABLE_SV_TB} lang="verilog" title="tb_class_spi.sv" />
                    </div>
                </div>
            )}

            {/* Tab Content 5: MX25L1605 SPI Flash verification (merged from cursor-test) */}
            {activeTab === 'flash' && <Mx25l1605FlashPanel />}
        </div>
    );
}
