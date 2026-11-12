// Simple Basic Test for MX25L1605 SPI Flash
// Uses standard Verilog syntax compatible with iverilog
//
// Fixes vs. original version:
//  1. Wait for the model's power-up time (tPUW = 10 ms, `PUW_TIME in mx25L1605.v)
//     before issuing commands. The model ignores SI until $time > `PUW_TIME,
//     so the original test (finished at 3.35 us) never reached the flash.
//  2. SCLK is now driven by the tasks (SPI mode 0, idle low) instead of
//     free-running, so CS# rises right after the 8th bit. With a free-running
//     clock an extra SCLK edge arrived before CS# rose, and WREN was decoded
//     as a bad command.
//  3. Test 2 now checks the status register value instead of always passing.
//  4. Fixed `"\n" + "===="` (Verilog has no string `+`; it printed a number).

`timescale 1ns/1ps

module simple_basic_test;

    // Timing
    localparam real    T_HALF   = 25.0;          // 20 MHz SCLK
    localparam integer T_PUW_NS = 10_000_000;    // tPUW from mx25L1605.v (10 ms)

    // SPI signals
    reg  sclk;
    reg  cs_n;
    reg  si;
    wire so;
    reg  wp_n;
    reg  hold_n;

    // Parallel output signals (unused in serial mode)
    wire po0, po1, po2, po3, po4, po5, po6;

    // Test control
    reg     test_done;
    integer test_count;
    integer pass_count;

    // Expected device ID values
    localparam [7:0] EXPECTED_MFG_ID   = 8'hC2;   // MXIC
    localparam [7:0] EXPECTED_MEM_TYPE = 8'h20;   // Memory Type
    localparam [7:0] EXPECTED_DENSITY  = 8'h15;   // 16Mb

    // DUT instantiation
    flash_16m dut (
        .SCLK(sclk),
        .CS(cs_n),
        .SI(si),
        .SO(so),
        .PO0(po0),
        .PO1(po1),
        .PO2(po2),
        .PO3(po3),
        .PO4(po4),
        .PO5(po5),
        .PO6(po6),
        .WP(wp_n),
        .HOLD(hold_n)
    );

    // Main test
    initial begin
        $display("=== MX25L1605 Simple Basic Test ===");

        test_done  = 0;
        test_count = 0;
        pass_count = 0;

        sclk   = 0;
        cs_n   = 1;
        si     = 0;
        wp_n   = 1;
        hold_n = 1;

        // Power-up: the flash model ignores all commands before tPUW
        $display("Waiting tPUW (%0d ns) for flash power-up...", T_PUW_NS);
        #(T_PUW_NS + 1000);

        // Run tests
        test_read_id();
        test_read_status();
        test_write_enable();

        // Report results
        #1000;
        report_results();

        test_done = 1;
        #100;
        $finish;
    end

    // ------------------------------------------------------------
    // SPI mode 0 primitives (SCLK idle low, SI sampled on rising
    // edge by the flash, SO updated after falling edge)
    // ------------------------------------------------------------
    task spi_begin;
        begin
            sclk = 0;
            cs_n = 0;
            #(T_HALF);
        end
    endtask

    task spi_end;
        begin
            #(T_HALF);
            cs_n = 1;
            #(4 * T_HALF);   // CS# deselect time
        end
    endtask

    // Shift out one byte on SI while sampling SO
    task spi_xfer;
        input  [7:0] tx;
        output [7:0] rx;
        integer i;
        begin
            for (i = 7; i >= 0; i = i - 1) begin
                si = tx[i];
                #(T_HALF);
                sclk = 1;
                rx[i] = so;
                #(T_HALF);
                sclk = 0;
            end
        end
    endtask

    // Test 1: Read ID Command (9Fh)
    task test_read_id;
        reg [7:0] dummy, mfg_id, mem_type, density;
        begin
            $display("\n--- Test 1: Read ID Command (9Fh) ---");
            test_count = test_count + 1;

            spi_begin();
            spi_xfer(8'h9F, dummy);
            spi_xfer(8'h00, mfg_id);
            spi_xfer(8'h00, mem_type);
            spi_xfer(8'h00, density);
            spi_end();

            $display("Received ID: MFG=0x%02X, Type=0x%02X, Density=0x%02X",
                     mfg_id, mem_type, density);

            if (mfg_id   === EXPECTED_MFG_ID &&
                mem_type === EXPECTED_MEM_TYPE &&
                density  === EXPECTED_DENSITY) begin
                $display("PASS: Read ID");
                pass_count = pass_count + 1;
            end else begin
                $display("FAIL: Read ID");
                $display("  Expected: MFG=0x%02X, Type=0x%02X, Density=0x%02X",
                         EXPECTED_MFG_ID, EXPECTED_MEM_TYPE, EXPECTED_DENSITY);
            end
        end
    endtask

    task read_status;
        output [7:0] status;
        reg [7:0] dummy;
        begin
            spi_begin();
            spi_xfer(8'h05, dummy);
            spi_xfer(8'h00, status);
            spi_end();
        end
    endtask

    // Test 2: Read Status Register (05h)
    // After power-up the device must be idle (WIP=0) with writes disabled (WEL=0)
    task test_read_status;
        reg [7:0] status;
        begin
            $display("\n--- Test 2: Read Status Register (05h) ---");
            test_count = test_count + 1;

            read_status(status);

            $display("Status Register: 0x%02X", status);
            $display("  WIP (bit 0): %b", status[0]);
            $display("  WEL (bit 1): %b", status[1]);

            if (^status !== 1'bx && status[0] === 1'b0 && status[1] === 1'b0) begin
                $display("PASS: Read Status (WIP=0, WEL=0 after power-up)");
                pass_count = pass_count + 1;
            end else begin
                $display("FAIL: Read Status (expected known value with WIP=0, WEL=0)");
            end
        end
    endtask

    // Test 3: Write Enable (06h)
    task test_write_enable;
        reg [7:0] status_before, status_after, dummy;
        begin
            $display("\n--- Test 3: Write Enable (06h) ---");
            test_count = test_count + 1;

            read_status(status_before);

            // WREN must be exactly 8 clocks followed by CS# high
            spi_begin();
            spi_xfer(8'h06, dummy);
            spi_end();

            read_status(status_after);

            $display("Status before: 0x%02X, after: 0x%02X", status_before, status_after);

            if (status_before[1] === 1'b0 && status_after[1] === 1'b1) begin
                $display("PASS: Write Enable (WEL 0 -> 1)");
                pass_count = pass_count + 1;
            end else begin
                $display("FAIL: Write Enable (WEL did not go 0 -> 1)");
            end
        end
    endtask

    // Report final results
    task report_results;
        real pass_rate;
        begin
            pass_rate = (test_count > 0) ? (pass_count * 100.0) / test_count : 0.0;

            $display("");
            $display("==================================================");
            $display("SIMPLE BASIC TEST RESULTS");
            $display("==================================================");
            $display("Total Tests: %0d", test_count);
            $display("Passed:      %0d", pass_count);
            $display("Failed:      %0d", test_count - pass_count);
            $display("Pass Rate:   %0.1f%%", pass_rate);
            $display("==================================================");

            if (pass_count == test_count) begin
                $display("*** ALL TESTS PASSED! ***");
            end else begin
                $display("*** %0d TESTS FAILED ***", test_count - pass_count);
            end
        end
    endtask

    // Timeout watchdog (must exceed tPUW)
    initial begin
        #(T_PUW_NS + 1_000_000);
        if (!test_done) begin
            $display("ERROR: Test timeout!");
            $finish;
        end
    end

    // Waveform dumping
    initial begin
        $dumpfile("simple_basic_test.vcd");
        $dumpvars(0, simple_basic_test);
    end

endmodule
