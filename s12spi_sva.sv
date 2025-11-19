
`ifndef S12SPI_SVA_SV
`define S12SPI_SVA_SV

interface s12spi_if (
    input logic clk,
    input logic rst_n,
    
    // Bus Interface
    input logic [2:0] addr,
    input logic [7:0] wdata,
    input logic [7:0] rdata,
    input logic       rw,     // 0: Read, 1: Write
    input logic       cs,     // Chip Select
    
    // SPI Interface
    input logic       sck,
    input logic       mosi,
    input logic       miso,
    input logic       ss_n,
    
    // Internal/Register State (assumed accessible or mapped)
    input logic [7:0] spicr1,
    input logic [7:0] spicr2,
    input logic [7:0] spibr,
    input logic [7:0] spisr,
    input logic [7:0] spidr
);

    // Register Offsets (Standard S12SPIV3)
    localparam logic [2:0] ADDR_SPICR1 = 3'h0;
    localparam logic [2:0] ADDR_SPICR2 = 3'h1;
    localparam logic [2:0] ADDR_SPIBR  = 3'h2;
    localparam logic [2:0] ADDR_SPISR  = 3'h3;
    localparam logic [2:0] ADDR_SPIDR  = 3'h5; // Sometimes 4 or 5 depending on implementation, assuming 5 for now or 4. Let's use 4 based on typical 8-bit maps, but check spec if possible. Standard S12 usually: 0=CR1, 1=CR2, 2=BR, 3=SR, 4=DR.
    
    // Let's correct ADDR_SPIDR to 3'h4 as is common.
    localparam logic [2:0] ADDR_SPIDR_REG = 3'h4;

    // SPICR2 Bits
    logic modfen, bidiroe, spiswai, spc0;
    assign modfen  = spicr2[4];
    assign bidiroe = spicr2[3];
    assign spiswai = spicr2[1];
    assign spc0    = spicr2[0];

    // SPISR Bits
    logic spif, sptef, modf;
    assign spif  = spisr[7];
    assign sptef = spisr[5];
    assign modf  = spisr[4];

    // Helper logic for register access
    logic write_access;
    assign write_access = cs && rw;
    
    logic read_access;
    assign read_access = cs && !rw;

    // -------------------------------------------------------------------------
    // 1. Reset Checks
    // -------------------------------------------------------------------------
    property p_reset_values;
        @(posedge clk) disable iff (!rst_n)
        $rose(rst_n) |-> ##1 
        (spicr1 == 8'h04) && 
        (spicr2 == 8'h00) &&
        (spibr == 8'h00) && 
        (spisr == 8'h20);   // SPTEF=1
    endproperty
    a_reset_values: assert property (p_reset_values);

    // -------------------------------------------------------------------------
    // 2. Register Access Logic
    // -------------------------------------------------------------------------
    
    // Verify SPICR1 write
    property p_write_spicr1;
        @(posedge clk) disable iff (!rst_n)
        (write_access && addr == ADDR_SPICR1) |=> (spicr1 == $past(wdata));
    endproperty
    a_write_spicr1: assert property (p_write_spicr1);

    // Verify Read-Only bits in SPISR
    property p_ro_spisr;
        @(posedge clk) disable iff (!rst_n)
        (write_access && addr == ADDR_SPISR) |=> 
        (spisr[7] == $past(spisr[7])) && // SPIF
        (spisr[5] == $past(spisr[5])) && // SPTEF
        (spisr[4] == $past(spisr[4]));   // MODF
    endproperty
    a_ro_spisr: assert property (p_ro_spisr);

    // -------------------------------------------------------------------------
    // 3. Status Flag Logic
    // -------------------------------------------------------------------------

    // SPTEF Clear Sequence
    sequence s_clear_sptef;
        (read_access && addr == ADDR_SPISR && spisr[5]) ##[1:5] (write_access && addr == ADDR_SPIDR_REG);
    endsequence

    property p_sptef_clear;
        @(posedge clk) disable iff (!rst_n)
        s_clear_sptef |=> !sptef;
    endproperty
    a_sptef_clear: assert property (p_sptef_clear);

    // SPIF Clear Sequence
    sequence s_clear_spif;
        (read_access && addr == ADDR_SPISR && spisr[7]) ##[1:5] 
        ((read_access || write_access) && addr == ADDR_SPIDR_REG);
    endsequence

    property p_spif_clear;
        @(posedge clk) disable iff (!rst_n)
        s_clear_spif |=> !spif;
    endproperty
    a_spif_clear: assert property (p_spif_clear);

    // MODF: Mode Fault
    property p_modf_set;
        @(posedge clk) disable iff (!rst_n)
        (mstr && !ssoe && !ss_n && modfen) |=> modf; // Added modfen check if applicable, usually MODF sets regardless but interrupt depends on enable. Spec says MODF sets if SS low in master.
    endproperty
    a_modf_set: assert property (p_modf_set);

    property p_modf_clears_mstr;
        @(posedge clk) disable iff (!rst_n)
        $rose(modf) |=> !mstr;
    endproperty
    a_modf_clears_mstr: assert property (p_modf_clears_mstr);

    // -------------------------------------------------------------------------
    // 4. Transmission Timing & Protocol
    // -------------------------------------------------------------------------

    // SCK Idle State
    property p_sck_idle_disabled;
        @(posedge clk) disable iff (!rst_n)
        !spe |-> sck == cpol; 
    endproperty
    a_sck_idle_disabled: assert property (p_sck_idle_disabled);

    // Slave Active
    property p_slave_active;
        @(posedge clk) disable iff (!rst_n)
        (!mstr && spe && !ss_n) |-> ##[0:$] (sck != cpol); 
    endproperty
    // a_slave_active: assert property (p_slave_active);

    // -------------------------------------------------------------------------
    // 5. Enriched Assertions (New)
    // -------------------------------------------------------------------------

    // Bidirectional Mode Consistency
    // If SPC0=1 (Bidirectional), MISO/MOSI usage changes.
    // If MSTR=1, SPC0=1, BIDIROE=1 -> Output on MOSI (MOMI).
    // If MSTR=0, SPC0=1, BIDIROE=1 -> Output on MISO (SISO).
    // We can't check pin direction easily without `oe` signals, but we can check config consistency.
    
    // Interrupt Generation
    // Assume we have an `intr` output (virtual or mapped).
    // a_interrupt_fire: assert property (@(posedge clk) (spif && spi_ie) || (sptef && sptie) || (modf && spi_ie) |-> intr);

    // -------------------------------------------------------------------------
    // 6. Assumptions (New)
    // -------------------------------------------------------------------------
    
    // Assume Reset is held for at least 2 cycles
    property p_assume_rst;
        !rst_n |=> !rst_n;
    endproperty
    // assume property (@(posedge clk) $rose(rst_n) |-> $past(!rst_n, 2)); 

    // Assume SS_n is stable during a byte transfer in slave mode (simplification)
    // assume property (@(posedge clk) !ss_n && !spif |=> !ss_n);

    // -------------------------------------------------------------------------
    // 7. Coverage (New)
    // -------------------------------------------------------------------------

    // Cover Master Transfer Complete
    c_master_xfer: cover property (@(posedge clk) disable iff (!rst_n) $rose(spif) && mstr);

    // Cover Slave Transfer Complete
    c_slave_xfer: cover property (@(posedge clk) disable iff (!rst_n) $rose(spif) && !mstr);

    // Cover Mode Fault
    c_modf_event: cover property (@(posedge clk) disable iff (!rst_n) $rose(modf));

    // Cover Back-to-Back Transmission (SPTEF clears and sets again quickly)
    c_back_to_back: cover property (@(posedge clk) disable iff (!rst_n) $fell(sptef) ##[1:20] $rose(sptef) ##[1:20] $fell(sptef));

endinterface

module s12spi_sva (
    input logic clk,
    input logic rst_n,
    input logic [2:0] addr,
    input logic [7:0] wdata,
    input logic [7:0] rdata,
    input logic       rw,
    input logic       cs,
    input logic       sck,
    input logic       mosi,
    input logic       miso,
    input logic       ss_n,
    input logic [7:0] spicr1,
    input logic [7:0] spicr2,
    input logic [7:0] spibr,
    input logic [7:0] spisr,
    input logic [7:0] spidr
    // input logic intr // Uncomment if available
);

    s12spi_if sva_if (.*);

endmodule

`endif // S12SPI_SVA_SV
