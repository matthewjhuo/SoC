/**
 * SoC System Design Course Chapters
 * procedurally generated from Arm Cortex-M Reference Book
 */

export const socChapters = [
  {
    id: "soc-ch1",
    num: 1,
    group: "SoC 系統設計 (SoC System Design)",
    title: "第一章：Arm Cortex-M 處理器架構與特性",
    desc: "介紹 Arm Cortex-M 處理器家族、執行模式與暫存器結構，以及多樣化的 IP 授權模式與交付物。",
    sections: [
      {
            "title": "1.1 Arm Cortex-M 處理器架構與特性",
            "content": "在現代數位系統中，CPU 比單純的 FSM (有限狀態機) 具有更高的靈活性。Arm Cortex-M 系列（包括 Cortex-M0/M0+/M1/M3/M4/M7/M23/M33）是 32 位元 RISC 處理器，為深度嵌入式和低功耗、成本敏感型微控制器設計。主要優點包括：優異的效能功耗比、高代碼密度（Thumb-2 指令集）、中斷延遲低（Nested Vectored Interrupt Controller, NVIC）以及廣大健全的軟硬體生態系。"
      },
      {
            "title": "1.2 軟體執行模式與暫存器結構",
            "content": "Cortex-M 處理器支援兩種執行模式：Thread Mode（執行應用程式碼，可使用特權或非特權權限）與 Handler Mode（執行異常與中斷服務程式，始終為特權權限）。\n暫存器設定包含 R0-R12 通用暫存器、R13 堆疊指標（SP，分為實體隔離的 MSP 主堆疊指標與 PSP 進程堆疊指標）、R14 連結暫存器（LR）、R15 程式計數器（PC），以及特殊的程式狀態暫存器 (xPSR) 與中斷屏蔽暫存器（PRIMASK, FAULTMASK, BASEPRI）。"
      },
      {
            "title": "1.3 授權模式 (Licensing) 與交付物",
            "content": "Arm 提供了多種靈活的 IP 授權模式以降低開發門檻。DesignStart Eval 提供免費下載的混淆版 Verilog 模擬模型，適合研究與評估；DesignStart Pro 提供低成本、免前期授權金的 RTL 供晶片量產；而 Arm Flexible Access 則允許設計者在支付授權費前，自由探索並設計多種 Arm IP 組合。交付物中通常包含處理器 RTL、硬體整合手冊、基礎軟體驅動 (CMSIS) 以及模擬測試平台。"
      },
      {
            "title": "1.4 時脈控制與重置產生器 (Verilog)",
            "code": "`timescale 1ns/1ps\n\nmodule tb_cortex_m3_clock();\n  // 標準 SoC 時脈控制與重置產生器\n  logic clk;\n  logic rst_n;\n  \n  initial begin\n    clk = 0;\n    forever #5 clk = ~clk; // 100MHz 系統主時脈\n  end\n  \n  initial begin\n    rst_n = 0;\n    #22 rst_n = 1; // 異步復位，延遲釋放\n  end\n\n  initial begin\n    $timeformat(-9, 2, \" ns\", 10);\n    $display(\"[%0t] SoC Testbench Harness Initialized.\", $time);\n    #100;\n    $finish;\n  end\nendmodule",
            "lang": "verilog"
      },
      {
            "title": "1.5 實作演練：時序模擬與驗證 (Hands-on Lab)",
            "content": "1. 在模擬器（如 Icarus Verilog）中載入時脈與重置產生模組。\n2. 觀察時脈輸出與 rst_n 的釋放邊緣是否符合異步重置、同步釋放的防抖動時序。\n3. 修改模擬參數，加入 $timeformat 並輸出日誌文件，確保時序精度。"
      }
],
    quiz: [
      {
            "question": "Cortex-M 處理器架構中，哪種執行模式只能在「特權級 (Privileged Level)」下運行？",
            "options": [
                  "Thread Mode",
                  "Handler Mode",
                  "User Mode",
                  "Debug Mode"
            ],
            "answer": 1,
            "explanation": "Handler Mode 用於處理異常與中斷，只能運行在特權級。而 Thread Mode 可以是特權級或非特權級。"
      },
      {
            "question": "Cortex-M 處理器中有兩個物理獨立的堆疊指標 (SP)，分別為？",
            "options": [
                  "ASP 與 BSP",
                  "MSP 與 PSP",
                  "USP 與 KSP",
                  "ISP 與 ESP"
            ],
            "answer": 1,
            "explanation": "MSP (Main Stack Pointer) 主要用於處理異常和作業系統核心，PSP (Process Stack Pointer) 用於使用者執行緒代碼。"
      },
      {
            "question": "關於特殊的程式狀態暫存器 (xPSR)，下列何者非其組成子暫存器？",
            "options": [
                  "Application PSR (APSR)",
                  "Interrupt PSR (IPSR)",
                  "Execution PSR (EPSR)",
                  "Privileged PSR (PPSR)"
            ],
            "answer": 3,
            "explanation": "xPSR 由 APSR (應用)、IPSR (中斷) 和 EPSR (執行) 三個暫存器組合而成，沒有 PPSR。"
      },
      {
            "question": "在 Armv7-M 架構中，若要完全屏蔽除了 NMI 和 HardFault 以外的所有異常中斷，軟體應設定哪個暫存器？",
            "options": [
                  "PRIMASK",
                  "FAULTMASK",
                  "BASEPRI",
                  "CONTROL"
            ],
            "answer": 1,
            "explanation": "FAULTMASK 可將當前異常優先級提升值 -1，即可屏蔽所有的中斷和除 HardFault/NMI 以外的 Exception。"
      },
      {
            "question": "在週邊暫存器定義中，中斷控制器 NVIC 的暫存器通常位於哪個實體定址區間？",
            "options": [
                  "0x0000_0000 區間",
                  "0x2000_0000 區間",
                  "0xE000_E000 區間 (PPB)",
                  "0x4000_0000 區間"
            ],
            "answer": 2,
            "explanation": "NVIC 屬於系統私有周邊匯流排 (PPB) 控制範疇，其暫存器映射在以 0xE000_E000 為起始的位址區間內。"
      },
      {
            "question": "Arm 提供的 DesignStart Eval 授權協議，其交付的處理器主要是何種格式？",
            "options": [
                  "完全開源的 SystemVerilog RTL",
                  "混淆後的 Verilog (Obfuscated Verilog) 模擬模型",
                  "預先編譯好的 FPGA Bitstream",
                  "不可模擬的 C/C++ 虛擬指令模擬器"
            ],
            "answer": 1,
            "explanation": "DesignStart Eval 提供混淆後且不可綜合的 Verilog (Obfuscated Verilog) 代碼，主要用於模擬、原型評估與教學。"
      },
      {
            "question": "Cortex-M3 與 Cortex-M4 處理器屬於下列何種 Arm 指令集架構 (ISA)？",
            "options": [
                  "ARMv6-M",
                  "ARMv7-M",
                  "ARMv8-M",
                  "ARMv9-M"
            ],
            "answer": 1,
            "explanation": "Cortex-M3/M4 核心採用的是 ARMv7-M 架構架構，而 Cortex-M0/M0+ 則採用 ARMv6-M 架構。"
      },
      {
            "question": "Arm 提供的 'Flexible Access' 授權方案其核心優勢為何？",
            "options": [
                  "完全免費的量產商業授權金",
                  "可在量產前免前期授權金使用並設計多個 Arm IP 組合，按實際量產製造數量付費",
                  "只提供混淆代碼，不提供完整商業級 RTL",
                  "只支持 Cortex-A 系列高階處理器"
            ],
            "answer": 1,
            "explanation": "Arm Flexible Access 允許設計者在支付高昂前期授權費前，自由選用大量 Arm IP 進行設計設計與驗證，等到實際晶片量產製造時才收費。"
      },
      {
            "question": "Cortex-M 處理器暫存器組中，R14 和 R15 分別代表何種特殊用途暫存器？",
            "options": [
                  "R14 為 PC (程式計數器)，R15 為 LR (連結暫存器)",
                  "R14 為 LR (連結暫存器)，R15 為 PC (程式計數器)",
                  "R14 為 SP (堆疊指標)，R15 為 LR (連結暫存器)",
                  "R14 為 LR (連結暫存器)，R15 為 SP (堆疊指標)"
            ],
            "answer": 1,
            "explanation": "R14 為 Link Register (LR)，用於記錄函數調用返回位址；R15 為 Program Counter (PC)，指向當前執行的指令。"
      },
      {
            "question": "在處理器啟動階段，硬件加載的第一個 32-bit 字物理意義為何？",
            "options": [
                  "編譯出的 Reset_Handler 本體位址",
                  "初始主堆疊指標 (MSP) 的位址",
                  "初始進程堆疊指標 (PSP) 的位址",
                  "中斷向量表 VTOR 的偏移地址"
            ],
            "answer": 1,
            "explanation": "Cortex-M 在復位後，硬體首先自 0x0000_0000 讀取初始 MSP (Main Stack Pointer) 值，接著自 0x0000_0004 讀取 Reset Vector 跳入執行。"
      }
]
  },
  {
    id: "soc-ch2",
    num: 2,
    group: "SoC 系統設計 (SoC System Design)",
    title: "第二章：Cortex-M 處理器系統設計基礎",
    desc: "分析 SoC 記憶體系統分區（SRAM, ROM, Flash, TCM）、位元帶存取（Bit-Banding），與位元組排列（Endianness）時序設計。",
    sections: [
      {
            "title": "2.1 記憶體系統與層次結構",
            "content": "Cortex-M 微控制器通常需要非揮發性記憶體（ROM 或 Flash）存取唯讀程式碼與常量，以及揮發性記憶體（SRAM）供堆疊、堆置與全局暫存使用。為了達到零等待狀態（Zero-Wait State）的極速存取，高性能 SoC 會配置緊耦合記憶體（Tightly-Coupled Memory, TCM），如 ITCM（指令）和 DTCM（資料）。此外，較高階的核心（如 Cortex-M7）更導入了指令與資料快取（Cache）。"
      },
      {
            "title": "2.2 記憶體映射與位元帶存取 (Bit-Banding)",
            "content": "Cortex-M 採用 4GB 統一的扁平記憶體映射（Memory Map），位址空間被劃分為代碼區（Code）、SRAM區、周邊區（Peripheral）、外部RAM區與私有周邊匯流排區（Private Peripheral Bus, PPB，用於配置 NVIC、SysTick 與除錯單元）。\n部分 Cortex-M3/M4 處理器支援 Bit-Banding，將 SRAM 及周邊區的 1 個字（32位元）映射到獨立的 Alias 位址區，藉由存取該位址來實現單一 bit 的原子性（Atomic）讀寫操作，避免了傳統讀-改-寫（Read-Modify-Write）帶來的競態條件問題。"
      },
      {
            "title": "2.3 位元組排列順序 (Endianness)",
            "content": "Cortex-M 處理器主要使用小端序（Little-Endian）編碼配置，亦即低位元組儲存在記憶體的低位址處。但也支援大端序（Big-Endian）配置。設計 SoC 匯流排介面時，必須嚴格注意數據線的位元排列對應（如 32-bit APB 匯流排的 bit[7:0], bit[15:8], bit[23:16], bit[31:24] 必須準確對應各 Byte Lane 的選取訊號），否則會導致軟體讀取暫存器出錯。"
      },
      {
            "title": "2.4 雙埠靜態隨機記憶體模型 (Verilog)",
            "code": "module sram_model (\n  input  logic        clk,\n  input  logic        cs_n,    // 片選訊號 (低電平有效)\n  input  logic        we_n,    // 寫啟用訊號 (低電平有效)\n  input  logic [9:0]  addr,    // 1024 字位址 (32-bit 字)\n  input  logic [31:0] din,     // 寫入數據\n  output logic [31:0] dout     // 讀取輸出\n);\n  // 定義 1024 x 32-bit 記憶體陣列\n  logic [31:0] mem [0:1023];\n\n  always_ff @(posedge clk) begin\n    if (!cs_n) begin\n      if (!we_n)\n        mem[addr] <= din;\n      dout <= mem[addr];\n    end\n  end\nendmodule",
            "lang": "verilog"
      },
      {
            "title": "2.5 實作演練：記憶體讀寫時序驗證 (Hands-on Lab)",
            "content": "1. 使用 SRAM 仿真模型建立測試平台，依序對位址 0x00 到 0x0F 進行寫入與重複讀取操作。\n2. 觀察 cs_n 與 we_n 拉低時，寫入資料 dout 與 mem 狀態的變化時序。\n3. 分析軟體存取單個位元組（Byte）與半字（Half-word）在 32-bit SRAM 匯流排上的位元對齊行為。"
      }
],
    quiz: [
      {
            "question": "在 Cortex-M 微控制器中，常將頻繁執行的關鍵中斷代碼和變量存放在何處以避免匯流排衝突，達到零等待延遲？",
            "options": [
                  "External QSPI Flash",
                  "緊耦合記憶體（Tightly-Coupled Memory, TCM）",
                  "系統 DMA 緩衝區",
                  "二級快取 (L2 Cache)"
            ],
            "answer": 1,
            "explanation": "緊耦合記憶體 (TCM, 包括 ITCM/DTCM) 直接連接至處理器的專用高速埠，無須通過系統匯流排衝突仲裁，可實現單週期零等待存取。"
      },
      {
            "question": "Cortex-M3 支援的 Bit-Banding 區間，主要是將 1 位的存取映射到 32 位的別名區（Alias）。下列哪個是 SRAM 的 Bit-Band 別名區基底位址？",
            "options": [
                  "0x2000_0000",
                  "0x2200_0000",
                  "0x4000_0000",
                  "0x4200_0000"
            ],
            "answer": 1,
            "explanation": "SRAM 的 bit-band 基本區為 0x2000_0000 ~ 0x200F_FFFF，其對應的 Alias 別名區基底位址為 0x2200_0000。"
      },
      {
            "question": "若在小端序（Little-Endian）SoC 中將 32-bit 整數 0x12345678 寫入以 0x2000_0000 起始的記憶體，則 0x2000_0000 位址儲存的 Byte 數值為何？",
            "options": [
                  "0x12",
                  "0x34",
                  "0x56",
                  "0x78"
            ],
            "answer": 3,
            "explanation": "小端序 (Little-Endian) 會將低位位元組 (0x78) 存放在低地址處 (0x2000_0000)，因此該處數值為 0x78。"
      },
      {
            "question": "在進行 FPGA 開發時，晶片內建的高容量雙埠 ROM 或 RAM 通常使用何種底層物理結構硬核來配置？",
            "options": [
                  "Look-Up Table (LUT)",
                  "Block RAM (BRAM)",
                  "PLL 鎖相環",
                  "DSP Slice"
            ],
            "answer": 1,
            "explanation": "FPGA 當中的 Block RAM 是硬體專用記憶體塊，比使用 LUT (分佈式 RAM) 具有更高的密度、性能與更少的邏輯開銷。"
      },
      {
            "question": "在 Cortex-M 的扁平化 4GB 記憶體映射中，下列何者不屬於 Cortex-M 的標準架構儲存器封裝分區？",
            "options": [
                  "代碼區 (Code Region - 0.5GB)",
                  "系統周邊區 (System Region - 0.5GB)",
                  "動態編譯區 (JIT Cache Region - 1GB)",
                  "SRAM 區 (SRAM Region - 0.5GB)"
            ],
            "answer": 2,
            "explanation": "Cortex-M 定義的存取空間劃分為 Code, SRAM, Peripheral, External RAM, External Device, System (PPB) 等，沒有定義 JIT Cache 區區。"
      },
      {
            "question": "在支援 Bit-Banding 的系統中，寫入 Alias 區的哪個 Bit 值，即可將底層映射實體暫存器的特定位元清零？",
            "options": [
                  "寫入計數值 0x0000_0000 (或最低位 Bit 0 為 0 的任何值)",
                  "寫入 0xFFFF_FFFF",
                  "寫入 0x5555_AAAA",
                  "任何非零值都可以清零"
            ],
            "answer": 0,
            "explanation": "寫入 Alias 暫存器時，系統硬體會將寫入資料的 LSB (最低位) 直接寫入映射的主位元。若寫入值之 LSB 為 0，則該位清零；LSB 為 1 則置位。"
      },
      {
            "question": "微控制器中 Flash 記憶體主要缺點為何，導致它不能完全取代 SRAM 作為變數存取媒介？",
            "options": [
                  "讀取延遲高、寫入次數有限（Wear Out）且無法直接對單個 Word 隨機覆寫",
                  "功耗接近為零",
                  "容量太小無法儲存程式碼",
                  "斷電後資料容易遺失"
            ],
            "answer": 0,
            "explanation": "Flash 屬於非揮發性記憶體，但寫入與擦除慢、壽命受限，且在覆寫前通常需要以 Sector 為單位進行擦除，無法像 SRAM 做單字隨機修改。"
      },
      {
            "question": "在 32-bit 位址匯流排中，若不採取特殊對齊（Alignment）控制電路，CPU 讀取一個非字對齊（Non-aligned, 如位址 0x2000_0003）的 32 位元字時，會產生何種負面影響？",
            "options": [
                  "處理器會立即自動重置進入 HardFault",
                  "需要消耗額外的匯流排存取週期（拆分為多次讀取），或觸發 UsageFault 異常",
                  "直接崩潰損毀晶片",
                  "自動轉化為 Bit-Band 原子讀取"
            ],
            "answer": 1,
            "explanation": "非對齊存取在不支援的硬體上會觸發 UsageFault (對齊對齊異常)，在支援的核心（如 Cortex-M3/M4）上也需要拆分兩次匯流排交易，折損效能。"
      },
      {
            "question": "下列關於 TCM (Tightly-Coupled Memory) 功能的敘述，何者正確？",
            "options": [
                  "TCM 只能透過 DMA 被存取，處理器無法直接定址",
                  "TCM 保證了中斷服務程式 (ISR) 與關鍵控制迴圈的確定性時序 (Deterministic)",
                  "TCM 容量通常維持在數百 MB",
                  "TCM 的內部存取速度比 Cache 還慢"
            ],
            "answer": 1,
            "explanation": "TCM 避免了 Cache 缺失 (Cache Miss) 帶來的不確定抖動，為實時核心提供了最高確定性的零抖動極速執行環境。"
      },
      {
            "question": "Cortex-M 處理器中使用哪種優先級控制機制來實現嵌套中斷？",
            "options": [
                  "狀態機 FSM",
                  "中斷屏蔽暫存器 BASEPRI",
                  "中斷優先權暫存器及其 NVIC 仲裁邏輯",
                  "中斷向量表重映射"
            ],
            "answer": 2,
            "explanation": "中斷嵌套與優先級的控制由 NVIC 內的中斷優先級暫存器和仲裁器決定，高搶佔級別可嵌套中斷。"
      }
]
  },
  {
    id: "soc-ch3",
    num: 3,
    group: "SoC 系統設計 (SoC System Design)",
    title: "第三章：AMBA 匯流排架構與 AHB/APB 協議",
    desc: "深入探討 AMBA 家族，分析 APB 與 AHB-Lite 協議時序、管線化傳輸與 SystemVerilog SVA 斷言檢查。",
    sections: [
      {
            "title": "3.1 AMBA 匯流排家族與 AHB/APB 概覽",
            "content": "ARM 推出的 AMBA (Advanced Microcontroller Bus Architecture) 是片上系統 (SoC) 開發的工業標準匯流排。其中，AHB (Advanced High-performance Bus) 是高性能皮線化（Pipelined）系統主幹匯流排，連接 CPU、SRAM、Flash 和 DMA。它支援管線化傳輸、突發傳輸，多Master仲裁。而 APB (Advanced Peripheral Bus) 是為低功耗、低頻寬周邊控制暫存器設計的無管線協議，控制開銷極低，不含複雜管線與仲裁訊號。"
      },
      {
            "title": "3.2 APB 協議訊號與傳輸狀態機",
            "content": "APB 匯流排包含以下核心訊號：PCLK（時脈）、PRESETn（重置）、PADDR（位址）、PSEL（片選）、PENABLE（選通）、PWRITE（讀寫狀態，1=寫，0=讀）、PWDATA（寫資料）、PRDATA（讀資料）、PREADY（準備就緒）、PSLVERR（傳輸錯誤）。\nAPB 的傳輸狀態機只有三個：\n1. IDLE：默認狀態，PSEL=0, PENABLE=0。\n2. SETUP：當發起傳輸時進入，PSEL=1, PENABLE=0。在此週期位址與控制訊號必須穩定。\n3. ACCESS：下一個時脈沿進入，PENABLE=1。若周邊的 PREADY 為 1，則傳輸在下一個時脈沿完成並返回 IDLE，否則保持在 ACCESS 狀態直到 PREADY=1。"
      },
      {
            "title": "3.3 AHB 協議特性與管線化傳輸",
            "content": "AHB-Lite 是針對單一 Master (如 Cortex-M 內核) 設計的簡化版 AHB 匯流排。AHB 最重要的特性是位址階段（Address Phase）與數據階段（Data Phase）的管線化（Pipelined）。\n在時脈沿上升時，Master 輸出 HADDR 與控制訊號（位址階段）；在下一個時脈週期中，Slave 進行讀寫並通過 HWDATA/HRDATA 傳輸（數據階段）。\nHREADY 訊號由 Slave 控制，當其為 0 時代表 Slave 需插入等待週期（Wait States），Master 的位址階段與前次傳輸的數據階段都會被鎖定，直至 HREADYOUT 為 1。\nHTRANS 訊號決定當前週期傳輸類型：00 (IDLE), 01 (BUSY), 10 (NONSEQ, 非連續), 11 (SEQ, 連續)。"
      },
      {
            "title": "3.4 APB 傳輸協議斷言 Checker (SystemVerilog SVA)",
            "code": "module apb_protocol_checker (\n  input logic PCLK,\n  input logic PRESETn,\n  input logic PSEL,\n  input logic PENABLE,\n  input logic PWRITE,\n  input logic [31:0] PADDR\n);\n  // 斷言 1: PENABLE 必須在 PSEL 拉高的下一個週期被拉高 (Setup Phase -> Access Phase)\n  property p_sel_then_enable;\n    @(posedge PCLK) disable iff (!PRESETn)\n    PSEL && !PENABLE => ##1 PENABLE;\n  endproperty\n\n  apb_sel_enable_assert: assert property (p_sel_then_enable)\n    else $error(\"[APB Protocol Violation] PENABLE did not rise on the cycle after PSEL!\");\n\n  // 斷言 2: 在傳輸期間，PADDR 不能隨意變更\n  property p_addr_stable_during_trans;\n    @(posedge PCLK) disable iff (!PRESETn)\n    (PSEL && !PENABLE) => ##1 (PADDR == $past(PADDR) && PSEL);\n  endproperty\n\n  apb_addr_stable_assert: assert property (p_addr_stable_during_trans)\n    else $error(\"[APB Protocol Violation] PADDR changed during setup-to-access phase!\");\nendmodule",
            "lang": "verilog"
      },
      {
            "title": "3.5 實作演練：SVA 協定檢查 (Hands-on Lab)",
            "content": "1. 將 APB Protocol Checker 整合至 APB 周邊的 Testbench 中。\n2. 刻意撰寫一個錯誤的 APB 驅動程式（如 PSEL 拉高後，延遲兩個週期才拉高 PENABLE），執行模擬並觀察 SVA 報告。\n3. 進一步編寫 AHB 的 HREADYOUT 和 HRESP 錯誤檢查機制。"
      }
],
    quiz: [
      {
            "question": "在 AMBA AXI / AHB / APB 匯流排中，關於複雜度與效能的排序，下列何者正確？",
            "options": [
                  "APB > AHB > AXI",
                  "AXI > AHB > APB",
                  "AHB > AXI > APB",
                  "AXI > APB > AHB"
            ],
            "answer": 1,
            "explanation": "AXI 最為複雜，支援多通道多 Master 並行與亂序傳輸；AHB 是管線化单 Master 系統匯流排；APB 最簡單，開銷最小，適合低速外設暫存器。"
      },
      {
            "question": "在 APB 讀寫週期中，PSEL 與 PENABLE 的拉高關係為何？",
            "options": [
                  "PSEL 與 PENABLE 在 Setup Phase 同時拉高",
                  "PSEL 在 Setup Phase 先拉高，PENABLE 在一個時脈後的 Access Phase 才拉高",
                  "PENABLE 在 Setup Phase 先拉高，PSEL 其後拉高",
                  "兩個週期內都只允許其中一個為高電平"
            ],
            "answer": 1,
            "explanation": "APB 協定規範在一個傳輸初始週期（Setup Phase）先將 PSEL 置位，下一個週期（Access Phase）才拉高 PENABLE 啟用选通訊號。"
      },
      {
            "question": "AHB-Lite 協定中，表示非連續傳輸（Non-sequential Transfer）的 HTRANS 信號代碼為何？",
            "options": [
                  "00 (IDLE)",
                  "01 (BUSY)",
                  "10 (NONSEQ)",
                  "11 (SEQ)"
            ],
            "answer": 2,
            "explanation": "HTRANS 的編碼分別為：00=IDLE, 01=BUSY, 10=NONSEQ, 11=SEQ。NONSEQ 代表一次全新或獨立的匯流排傳輸。"
      },
      {
            "question": "當 AHB Slave 無法立刻完成 Master 要求的讀寫操作時，應如何延長數據階段週期？",
            "options": [
                  "將 HRESP 拉低",
                  "將 HREADYOUT 拉低 (為 0)",
                  "拉高 HSEL",
                  "關閉系統 PCLK"
            ],
            "answer": 1,
            "explanation": "Slave 可以將 HREADYOUT 拉低，這代表 Slave 還未準備就緒，主控端 Master 會掛起並維持當前數據，直至 HREADYOUT 回升為 1。"
      },
      {
            "question": "在 AHB-Lite 中，如果 Slave 要求 Master 立刻終止非法傳輸（如非法存取），它必須輸出何種信號回應組合？",
            "options": [
                  "HREADYOUT = 1, HRESP = 0 (OKAY)",
                  "HREADYOUT = 0, HRESP = 1，接著在下一個週期 HREADYOUT = 1, HRESP = 1 (ERROR)",
                  "HREADYOUT = 1, HRESP = 1 (ERROR-Wait)",
                  "HREADYOUT = 0, HRESP = 0 (IDLE)"
            ],
            "answer": 1,
            "explanation": "AHB 協議規定 ERROR 響應必須是雙週期的：第一個週期 Slave 拉低 HREADYOUT 並拉高 HRESP = 1；第二個週期拉高 HREADYOUT = 1 釋放 Master 並宣告傳輸以錯誤終止。"
      },
      {
            "question": "APB 系統中，如何向一個 APB 週邊指配唯一的定址？",
            "options": [
                  "由 APB Bridge 的地址譯碼器根據 PADDR 譯出並驅動該週邊專用的 PSELx 腳位",
                  "透過 APB 仲裁器請求得到主控權",
                  "直接由 CPU 腳位直接解碼",
                  "藉由 AHB 解碼器直接讀寫"
            ],
            "answer": 0,
            "explanation": "APB Bridge 作為 AHB 端的 Slave 接收到傳輸，其內部解碼器會根據 PADDR 解析出對應的 Peripheral，鎖定並拉高該 Peripheral 的 PSELx。"
      },
      {
            "question": "在 APB3 / APB4 協定中引入了 PREADY 與 PSLVERR 訊號，其功能分別是？",
            "options": [
                  "PREADY 引入等待週期 (Wait States)，PSLVERR 回傳周邊傳輸錯誤狀態",
                  "PREADY 表示中斷優先級，PSLVERR 為重置錯誤暫存器",
                  "PREADY 用於多路選通，PSLVERR 用於奇偶校驗錯誤",
                  "PREADY 僅用於寫傳輸，PSLVERR 僅用於讀傳輸"
            ],
            "answer": 0,
            "explanation": "PREADY 使得 APB 週邊也能插入等待週期；PSLVERR 提供錯誤回饋機制，是較早 APB2 版本所沒有的引腳擴充。"
      },
      {
            "question": "下列關於 AHB-Lite 與標準 AHB 差異的描述，何者正確？",
            "options": [
                  "AHB-Lite 支援分割 (Split) 或重試 (Retry) 的複雜主控端釋放回應",
                  "AHB-Lite 調度多個主控 Master 進行匯流排仲裁 (Arbitration) 通訊",
                  "AHB-Lite 是標準 AHB 的精簡子集，專為單一的主 Master 架構設計，移除了 Arbitration 與 Split/Retry 機制",
                  "AHB-Lite 移除了 HREADY 訊號"
            ],
            "answer": 2,
            "explanation": "AHB-Lite 移除了 Arbitration、Split 和 Retry，適合單主控核心系统，大幅減少內部電路面積和連線複雜度。"
      },
      {
            "question": "SystemVerilog Assertion (SVA) 多用於協議分析。若要判斷 APB 時脈觸發時「PSEL 為高電平的下一拍，PENABLE 一定要拉高」，應該如何編寫？",
            "options": [
                  "PSEL |=> PENABLE",
                  "PSEL && !PENABLE => ##1 PENABLE",
                  "PSEL ##1 PENABLE",
                  "PSEL ##2 PENABLE"
            ],
            "answer": 1,
            "explanation": "PSEL && !PENABLE => ##1 PENABLE 表示在發現 PSEL=1 且 PENABLE=0 的 Setup 狀態下，非重疊蘊含（=>）下一個週期 (##1) PENABLE 必須為 1。"
      },
      {
            "question": "AHB-Lite 協議中，Master 決定讀或寫操作的關鍵訊號是？",
            "options": [
                  "HTRANS",
                  "HWRITE",
                  "HREADY",
                  "HSEL"
            ],
            "answer": 1,
            "explanation": "HWRITE 代表讀寫屬性：1 為寫入傳輸 (Write Transfer)，0 為讀取傳輸 (Read Transfer)。"
      }
]
  },
  {
    id: "soc-ch4",
    num: 4,
    group: "SoC 系統設計 (SoC System Design)",
    title: "第四章：構建 Cortex-M 簡單匯流排系統",
    desc: "學習 ICODE/DCODE 總線合併、中央地址解碼分配，與地址重映射（Remap Mux）硬體電路設計。",
    sections: [
      {
            "title": "4.1 Cortex-M 匯流排介面與拓撲",
            "content": "Cortex-M 處理器通常暴露一個或多個 AHB-Lite 主控埠。例如，Cortex-M3/M4 將內部匯流排分拆為 I-CODE（用於提指令）、D-CODE（用於提取向量表和除錯資料）以及 System Bus（存取 SRAM、外設和系統記憶體）。在典型的 SoC 整合中，為了減少多個匯流排對系統的布線壓力，會使用 Code Bus Mux 把 I-CODE 與 D-CODE 合併為單一的 Code Bus，再配合 System Bus 共同連接到匯流排解碼矩陣。"
      },
      {
            "title": "4.2 位址解碼 (Address Decoding) 設計原理",
            "content": "SoC 當中包含多個 Master 和多個 Slave。為了讓 Master 能夠正確存取不同的 Slave，必須實作中央位址解碼器。解碼器根據 Master 輸出的 HADDR，判斷當前位址落在哪個 Slave 的定址區間內，從而輸出對應的 HSELx 選擇訊號給各自的 Slave。如果 HADDR 指向的位址沒有對應任何合法的 Slave，則解碼器必須選通一個預設從屬器（Default Slave），並返回 AHB 錯誤回應（ERROR Response），防止匯流排鎖死。"
      },
      {
            "title": "4.3 地址重映射 (Address Remap) 控制",
            "content": "Cortex-M 處理器復位後，固定從 0x0000_0000 位址讀取 MSP 指標（位址 0x0）與 Reset Handler 的進入點指標（位址 0x4）。在實際晶片中，0x0000_0000 預設對應實體 ROM 或 Flash。但是，當軟體進入執行階段後，為了提高中斷向量表存取速度或進行線上韌體更新，需要將該低位址映射至 SRAM。此時，SoC 會設計一個暫存器控制的 Remap Mux，硬體上根據 remap 開關，將送往 0x0 地址區間的 AHB 存取重新導向 Flash 或 SRAM 的實體基底位址。"
      },
      {
            "title": "4.4 地址重映射 Multiplexer (Verilog)",
            "code": "module address_remap_mux (\n  input  logic        remap_en,     // 0=映射到 Flash, 1=映射到 SRAM\n  input  logic [31:0] haddr_in,     // Master 輸入位址端口\n  output logic [31:0] haddr_out    // 輸出至解碼器的實體位址\n);\n  always_comb begin\n    haddr_out = haddr_in;\n    // 判斷是否存取最低 1MB (0x0000_0000 到 0x000F_FFFF) 的向量表區間\n    if (haddr_in[31:20] == 12'h000) begin\n      if (remap_en) begin\n        // 重映射到 SRAM 的開頭位址 (假設實體 SRAM 基底為 0x2000_0000)\n        haddr_out = {12'h200, haddr_in[19:0]};\n      end else begin\n        // 映射到實體 Boot Flash (假設實體 Flash 基底為 0x0800_0000)\n        haddr_out = {12'h080, haddr_in[19:0]};\n      end\n    end\n  end\nendmodule",
            "lang": "verilog"
      },
      {
            "title": "4.5 實作演練：Remap 功能驗證 (Hands-on Lab)",
            "content": "1. 將 Address Remap Mux 實例化，並給定隨機位址 haddr_in。\n2. 切換 remap_en 訊號，驗證當 haddr_in = 0x0000_0004 時，輸出 haddr_out 是否在 0x0800_0004 和 0x2000_0004 之間正確切換。\n3. 在模擬器中編寫 TB，驗證如果 remap_en 改變時，對位址 0x0000_0000 讀寫的資料是否正確對應到 SRAM 背後的實體存取儲存單元。"
      }
],
    quiz: [
      {
            "question": "在典型的 Cortex-M0/M3 設計中，將 I-CODE 匯流排與 D-CODE 匯流排進行合併（Merging）的原因為何？",
            "options": [
                  "為了支持 64-bit 傳輸頻寬",
                  "簡化晶片層的佈線結構，將它們合併為 Code Bus 以便和系統匯流排解碼陣列連接",
                  "加快 CPU 除錯的頻率",
                  "消弭 Memory Map 中的 Code 區域"
            ],
            "answer": 1,
            "explanation": "合併可以減少解碼電路和仲裁線路的複雜度，使系統內部可以用一個統一的 Code Bus 來存取指令與常量區。"
      },
      {
            "question": "中央位址解碼器 (Central Address Decoder) 的核心工作為何？",
            "options": [
                  "仲裁多 Master 搶佔匯流排之權限",
                  "根據 Master 輸出的 HADDR，決定選通哪個 Slave 的 HSEL 訊號",
                  "控制系統的睡眠模式開關",
                  "對暫存器變量進行 Bit-Band 原子變更"
            ],
            "answer": 1,
            "explanation": "解碼器通過對主位址線（HADDR）進行多範圍比對，輸出相對應 Slave 的 HSEL 選擇信號完成定址操作。"
      },
      {
            "question": "如果在時控狀態下，CPU 存取了一個完全沒有被任何 AHB Slave 映射的位址區，系統會發生什麼事？",
            "options": [
                  "系統會因為無人回應而一直等待，造成解碼死鎖 (Deadlock)",
                  "解碼矩陣選通 Default Slave，返回 ERROR 波形，防止匯流排無限掛起",
                  "處理器自動進行斷電保護",
                  "DMA 自動接替存取代碼"
            ],
            "answer": 1,
            "explanation": "系統會自動選通 Default Slave。Default Slave 做出雙週期的 ERROR 回應並答覆 HREADYOUT=1，通告內核此次存取無效，重而解鎖匯流排。"
      },
      {
            "question": "SoC 啟動時的 Address Remap 機制，主要是為了解決什麼軟體啟動點硬性約束？",
            "options": [
                  "ROM / Flash 空間不夠用",
                  "Cortex-M 在復位後固定從 0x0000_0000 讀取最初向量表指標，重映射可將該區位址切換至高速 SRAM",
                  "防止除錯器抓取代碼",
                  "實現動態保護快取功能"
            ],
            "answer": 1,
            "explanation": "Cortex-M 重置後固定存取 0x0 位置。重映射可以讓系統復位時從 Flash/ROM 啟動，之後動態將向量表映射到 SRAM 以進行熱更新與高速中斷存取。"
      },
      {
            "question": "若位址 Hadread_in[31:20] 等於 12'h000 時且 remap_en = 1'b1，在 Remap 模組中，它應該把 hasdr_in[19:0] 與什麼前綴拼接，以便把位址重新定向到 SRAM 的實體基底 (假設為 0x2000_0000)？",
            "options": [
                  "12'h080",
                  "12'h200",
                  "12'h000",
                  "12'hE00"
            ],
            "answer": 1,
            "explanation": "重映射到實體位址 0x2000_0000，其高 12 位為 12'h200，故 haddr_out = {12'h200, haddr_in[19:0]}。"
      },
      {
            "question": "在 32-bit 位址線的多 Master 系統中，如果多個 Master（如 CPU 和 DMA）同時想存取同一個 SRAM 區間，解碼機制通常如何處理？",
            "options": [
                  "直接物理短路兩個 Master 訊號線",
                  "加入中央匯流排仲裁器 (Arbiter)，根據優先級排程並切換 Slave 多合一選通線路",
                  "兩個 Master 交換時脈頻率",
                  "直接引發系統 HardFault 重置"
            ],
            "answer": 1,
            "explanation": "多 Master 並行時，需要導入 Arbiter 進行分時仲裁或使用 Multi-layer AHB Matrix 矩陣，避免資料通道碰撞衝突。"
      },
      {
            "question": "設計地址解碼時，若要求支援 16KB 大小的 Slave 存取區間，則該 Slave 的 HSEL 判斷需要對高幾位的 HADDR 定址線進行解碼？",
            "options": [
                  "HADDR[31:12]",
                  "HADDR[31:14]",
                  "HADDR[31:16]",
                  "HADDR[31:10]"
            ],
            "answer": 1,
            "explanation": "16KB 需要 14 根定址線（2^14 = 16384 bytes），因此低 14 位（HADDR[13:0]）分配給 Slave 內部定址，解碼只需比對高位的 HADDR[31:14]。"
      },
      {
            "question": "匯流排解碼陣列的 IP 單元通常屬於下列何種 SoC 組件？",
            "options": [
                  "軟體引導 Bootloader",
                  "匯流排基礎設施 (Interconnect / Bus Matrix)",
                  "私有周邊 PPB",
                  "TCM 記憶體控制器"
            ],
            "answer": 1,
            "explanation": "地址解碼、多路選通、主從控仲裁器均屬於 Interconnect (片上網絡或匯流排矩陣) 基礎設施件。"
      },
      {
            "question": "在進行 RTL 設計時，解碼器輸出的 HSELx 信號必須以何種電平有效？",
            "options": [
                  "高電平有效 (1=選中)",
                  "低電平有效 (0=選中)",
                  "上升沿觸發",
                  "三態高阻抗"
            ],
            "answer": 0,
            "explanation": "AMBA AHB 協議中，Slave 選擇信號 HSEL 均為高電平有效。"
      },
      {
            "question": "地址重映射多路選擇器 (Address Remap Mux) 通常放置於 SoC 架構的哪個節點？",
            "options": [
                  "CPU 與 AHB 譯碼器之間",
                  "SRAM 控制器內部",
                  "DMA 控制器內部",
                  "私有周邊 PPB 匯流排上"
            ],
            "answer": 0,
            "explanation": "Remap Mux 主要在 CPU 輸出的位址 haddr_in 進入譯碼器解碼前完成位址變更，故放置在 CPU 與解碼器之間。"
      }
]
  },
  {
    id: "soc-ch5",
    num: 5,
    group: "SoC 系統設計 (SoC System Design)",
    title: "第五章：CoreSight 除錯系統整合",
    desc: "剖析 DP/AP 偵錯存取埠、ROM Table 自動發現機制，與 ETM/ITM 系統追蹤匯流排配置。",
    sections: [
      {
            "title": "5.1 CoreSight 標准除錯架構與 DAP",
            "content": "ARM CoreSight 技術提供了完整的晶片上偵錯與追蹤解決方案。DAP (Debug Access Port) 是核心對外通訊的窗口，分為 DP (Debug Port) 和 AP (Access Port)。\nDP 支援外部實體連接腳位，如 JTAG 或兩線式的 SWD (Serial Wire Debug) 介面。\nAP 則是把 DP 傳來的命令轉化為晶片內部的匯流排存取操作，最常見的是連接系統記憶體映射空間的 AHB-AP，以及連接除錯暫存器匯流排的 APB-AP。"
      },
      {
            "title": "5.2 ROM Table 組件自動識別機制",
            "content": "為了使除錯主機（如 J-Link、Ulink）能自動探測 SoC 中有哪些處理器核心與除錯組件，CoreSight 定義了 ROM Table 規範。各 AP 內部放置了一個唯讀的 ROM Table 暫存器，記錄了連接至該 AP 的所有除錯組件（如 Core, NVIC, ETM, TPIU）相對於該 ROM Table 的偏移位址。\n除錯軟體連線後，會循著 ROM Table 的指標層層讀取，並藉由讀取各組件後段的 Peripheral ID (PID0-PID4) 與 Component ID (CID0-CID3) 暫存器來識別其為 Cortex-M 內建單元還是自定義的硬體加速器。"
      },
      {
            "title": "5.3 系統追蹤 (Trace) 與數據匯流排整合",
            "content": "追蹤（Trace）是晶片執行時免停機進行資料採集的重要模組。常見 Trace 單元包括：\n1. ETM (Embedded Trace Macrocell)：即時硬體追蹤，提供 CPU 指令流與資料流的高頻寬輸出。\n2. ITM (Instrumentation Trace Macrocell)：軟體檢測追蹤，允許應用程式碼寫入特定暫存器，類似快讀 printf 輸出。\n3. TPIU (Trace Port Interface Unit)：將追蹤資料打包輸出給晶片外部除錯器。\n4. MTB (Micro Trace Buffer)：針對超低功耗核心，將指令流寫入晶片本機的一小塊 SRAM 迴圈緩衝區供隨時提取。"
      },
      {
            "title": "5.4 除錯協議切換暫存器邏輯 (Verilog)",
            "code": "module debug_swd_jtag_mux (\n  input  logic        sys_rst_n,\n  input  logic        protocol_switch_rstd, // 協定切換序列偵測指示\n  input  logic [1:0]  pin_mux_sel,          // 00=SWD, 01=JTAG\n  // 實體除錯引腳\n  input  logic        TCK_SWCLK,\n  input  logic        TMS_SWDIO_i,\n  output logic        TMS_SWDIO_o,\n  output logic        TMS_SWDIO_oe,\n  input  logic        TDI,\n  output logic        TDO_swo,\n  // 內部分流除錯訊號\n  output logic        swd_clk,\n  inout  wire         swd_data,\n  output logic        jtag_tck,\n  output logic        jtag_tms,\n  output logic        jtag_tdi,\n  input  logic        jtag_tdo\n);\n  // 根據 pin_mux_sel 或是 protocol_switch_rstd 切換 SWD 或是 JTAG\n  always_comb begin\n    swd_clk  = 1'b0;\n    jtag_tck = 1'b0;\n    jtag_tms = 1'b0;\n    jtag_tdi = 1'b0;\n    if (pin_mux_sel == 2'b00 || protocol_switch_rstd) begin\n      swd_clk  = TCK_SWCLK;\n      // SWD 雙向資料腳位分流控制邏輯\n    end else begin\n      jtag_tck = TCK_SWCLK;\n      jtag_tms = TMS_SWDIO_i;\n      jtag_tdi = TDI;\n    end\n  end\nendmodule",
            "lang": "verilog"
      },
      {
            "title": "5.5 實作演練：除錯控制暫存器仿真 (Hands-on Lab)",
            "content": "1. 模擬除錯引腳多路選擇器的切換行為，驗證切換為 JTAG 模式時 TDI 與 jtag_tdi 是否相連。\n2. 在測試平台中發送 SWJ-DP 的二位元組切換命令序列，檢驗 protocol_switch_rstd 控制狀態暫存器的變化。\n3. 分析 ROM Table 的地址偏移量計算公式，動態構建一組 32 位元 ROM 表位址數據。"
      }
],
    quiz: [
      {
            "question": "CoreSight 架構中的 DAP (Debug Access Port) 其核心組成部分包括？",
            "options": [
                  "SW-DP (偵錯埠) 和各類 AP (存取埠)",
                  "ETM 和 ITM",
                  "ROM Table 和 TPIU",
                  "JTAG 埠和 NVIC"
            ],
            "answer": 0,
            "explanation": "DAP 包含外部通信介面 DP (JTAG-DP, SW-DP, SWJ-DP) 與轉接內部匯流排的 AP (AHB-AP, APB-AP)。"
      },
      {
            "question": "兩線式 SWD (Serial Wire Debug) 偵錯 protocol 指配的實體引腳分別為？",
            "options": [
                  "TDI 與 TDO",
                  "SWCLK (時脈) 與 SWDIO (雙向資料線)",
                  "TCK 與 TMS",
                  "TRST 與 RESET"
            ],
            "answer": 1,
            "explanation": "SWD 是 ARM 專門為極少管腳封裝設計的偵錯介面，僅需 SWCLK 和 SWDIO 兩根引腳。"
      },
      {
            "question": "在 CoreSight 自動發現組件機制中，除錯主機需要循著哪個暫存器指標來獲取所有可用組件的網格位址？",
            "options": [
                  "MTB 暫存器",
                  "xPSR 狀態暫存器",
                  "ROM Table 偏移指標暫存器",
                  "SysTick 重載值暫存器"
            ],
            "answer": 2,
            "explanation": "偵錯主機透過讀取 AP 連接的中央 ROM Table 所記載的組件偏移量 (Offset)，即可循鏈搜索出整個 CPU 除錯拓撲。"
      },
      {
            "question": "CoreSight 除錯組件底部的 PID 和 CID 暫存器，主要作用為何？",
            "options": [
                  "用於加密偵錯通道",
                  "指示各除錯單元的晶片 ID、設計商代碼與組件類別",
                  "儲存中斷優先權數值",
                  "計數 CPU 執行的 clock 數"
            ],
            "answer": 1,
            "explanation": "PID (Peripheral ID, PID0-PID4) 和 CID (Component ID, CID0-CID3) 暫存器儲存特定的魔術字代碼，用於向除錯主機識別此 IP 單元具體為何 (如 Cortex-M3 NVIC)。"
      },
      {
            "question": "下列哪一個 CoreSight 追蹤單元，可將指令追蹤資訊以迴圈緩衝區的形式儲存在微控制器自有的 SRAM 當中？",
            "options": [
                  "ETM (Embedded Trace Macrocell)",
                  "TPIU (Trace Port Interface Unit)",
                  "MTB (Micro Trace Buffer)",
                  "ITM (Instrumentation Trace Macrocell)"
            ],
            "answer": 2,
            "explanation": "MTB (Micro Trace Buffer) 佔用片上極小面積，它把指令跳轉歷史直接寫入本地 SRAM 中，適合低成本微控制器進行不佔用管腳的追蹤。"
      },
      {
            "question": "DP (Debug Port) 支持兩種通信協議選用，如何在一組物理引腳上進行 SWD 和 JTAG 協議切換？",
            "options": [
                  "實體切換重設引腳",
                  "透過 SWJ-DP 在 SWDIOTMS 線路上發送一組特定格式的 16-bit 模式切換序列 (Switch Sequence)",
                  "只能在出廠製造時固定",
                  "使用軟體指令修改 xPSR 狀態"
            ],
            "answer": 1,
            "explanation": "SWJ-DP 整合了兩種引腳。除錯器會送出特定 16 位元魔術序列，即可驅動內部硬體偵測邏輯，切換引腳多路選擇器 (Mux) 的协议通道。"
      },
      {
            "question": "在 AHB-AP 連接的總線上，如果 CPU 的除錯狀態被設定為安全鎖定 (Secured Lock)，除錯暫存器會如何反應？",
            "options": [
                  "允許讀寫 CPU 暫存器，但無法讀取外圍",
                  "AHB-AP 返回錯誤或全零，封鎖除錯主機對敏感數據及 SRAM 的讀寫",
                  "立即使晶片電源引腳燒毀",
                  "自動進入休眠模式"
            ],
            "answer": 1,
            "explanation": "SoC 為了防止代碼剽竊與物理破壞，會配備加密鎖機制，鎖定後 AHB-AP 會回傳全零，阻斷外接存取核心代碼。"
      },
      {
            "question": "關於 ITM (Instrumentation Trace Macrocell) 的描述，下列何者正確？",
            "options": [
                  "ITM 是高性能硬體指令流追蹤單元，需要十幾根引腳",
                  "ITM 支援軟體檢測（Software Instrumentation），允許軟體寫入暫存器將字符打包，以極低延時通過除錯引腳（SWO）輸出 printf 結果",
                  "ITM 只能記錄中斷嵌套狀態",
                  "ITM 需要透過 CPU 的 DMA 搬移資料"
            ],
            "answer": 1,
            "explanation": "ITM 為非侵入性輸出Printf工具，軟體寫入 ITM->PORT[0] 後，硬體會直接通過一根 SWO (Serial Wire Output) 引腳串行發射數據，避免拉慢 CPU。"
      },
      {
            "question": "AHB-AP 和 APB-AP 的根本區別為何？",
            "options": [
                  "AHB-AP 串接 Flash，APB-AP 負責重置",
                  "AHB-AP 作為 master 連接片上系統匯流排（存取 RAM/ROM/外設），APB-AP 用以控制 CoreSight 原生除錯暫存器網絡",
                  "AHB-AP 存取速度慢",
                  "AHB-AP 支持 Bit-band"
            ],
            "answer": 1,
            "explanation": "AHB-AP 轉換偵錯命令為 AHB 系統交易；APB-AP 則是透過專用的 APB 偵錯匯流排去讀寫內置 core 暫存器、ETM、ROM Table 等。"
      },
      {
            "question": "在 CoreSight 的標準中，如果除錯軟體讀取到某組件的 CID 暫存器為 0xB105_F00D，這代表該組件是什麼？",
            "options": [
                  "Cortex-M0 核心",
                  "符合 CoreSight 架構規範的有效偵錯/除錯組件",
                  "系統 Default Slave",
                  "晶片 PLL 鎖相環"
            ],
            "answer": 1,
            "explanation": "0xB105_F00D 是 CoreSight 標準組件 Class ID (CID) 暫存器的固定魔術代碼（ARM CoreSight Component ID），代表該組件符合 CoreSight 標準偵錯外設架構。"
      }
]
  },
  {
    id: "soc-ch6",
    num: 6,
    group: "SoC 系統設計 (SoC System Design)",
    title: "第六章：SoC 低功耗設計支援",
    desc: "探討動態 Clock Gating、Power Gating 阻斷，與喚醒中斷控制器（WIC）硬體握手管理時序。",
    sections: [
      {
            "title": "6.1 SoC 低功耗設計狀態與策略",
            "content": "低功耗對於手持與 IoT 晶片至關重要。Cortex-M 提供三種主要功耗狀態：\n1. Active Mode：CPU 全速運轉。\n2. Sleep Mode：時脈停止（Clock Gating），CPU 暫停執行但邏輯與內部 registers 保持狀態，中斷可瞬間喚醒。\n3. Deep Sleep Mode：關閉主 PLL，減少漏電流，但喚醒常需要較長等待。\n4. Standby Mode (部分 SoC 支援)：電源域斷電（Power Gating），暫存器內容遺失，只能透過 Power-On Reset 喚醒。"
      },
      {
            "title": "6.2 時脈閘控與電源閘控 (Clock & Power Gating)",
            "content": "SoC 層面的省電技術：\n1. 時脈閘控（Clock Gating）：利用 CG Cell (Clock Gate Integrated Cell) 在不使用周邊時切斷其時脈翻轉，大幅降低動態功耗。\n2. 電源閘控（Power Gating）：利用路徑開關 (MTCMOS) 將不使用的電源網格斷路，徹底阻斷靜態漏電流。此時需要用到動態電源控制器（PMC）和信號隔離單元（Isolation Cell）來隔離不同電壓域。"
      },
      {
            "title": "6.3 喚醒中斷控制器 (WIC) 運作原理",
            "content": "WIC (Wakeup Interrupt Controller) 是實現極低功耗深度休眠的關鍵。在 Deep Sleep 期，CPU 及 NVIC 所在的電源域可能會完全斷電以消彌靜態電流，此時 NVIC 無法工作。\nWIC 為一個獨立於核心的超袖珍狀態監聽硬體，僅由常開的電源域（Always-On Power Domain）供電。\n當 CPU 準備休眠時，會將中斷狀態同步給 WIC。當外設喚醒訊號觸發時，WIC 會優先拉高主電壓域的 Enable 訊號，待 PLL 穩定與核心重新上電後，將中斷傳回給 NVIC 完成中斷服務。"
      },
      {
            "title": "6.4 節電狀態控制器握手線路 (Verilog)",
            "code": "module power_handshake_controller (\n  input  logic        clk,\n  input  logic        rst_n,\n  // 處理器輸出訊號\n  input  logic        sleep_req,      // CPU 休眠請求\n  output logic        sleep_ack,      // 休眠控制器響應確認\n  // 控制外圍線路之電源關閉與時脈閘控\n  output logic        isolate_en,     // 隔離單元使能\n  output logic        power_gate_en,  // 電源網格切斷\n  output logic        clock_gate_en   // 時脈切斷\n);\n  typedef enum logic [1:0] {\n    ST_ACTIVE,\n    ST_CLOCK_OFF,\n    ST_POWER_OFF\n  } state_t;\n  \n  state_t state, next_state;\n\n  always_ff @(posedge clk or negedge rst_n) begin\n    if (!rst_n) state <= ST_ACTIVE;\n    else        state <= next_state;\n  end\n\n  always_comb begin\n    next_state    = state;\n    sleep_ack     = 1'b0;\n    isolate_en    = 1'b0;\n    power_gate_en = 1'b0;\n    clock_gate_en = 1'b0;\n\n    case (state)\n      ST_ACTIVE: begin\n        if (sleep_req) next_state = ST_CLOCK_OFF;\n      end\n      ST_CLOCK_OFF: begin\n        clock_gate_en = 1'b1;\n        isolate_en    = 1'b1;\n        if (sleep_req) next_state = ST_POWER_OFF;\n        else           next_state = ST_ACTIVE;\n      end\n      ST_POWER_OFF: begin\n        clock_gate_en = 1'b1;\n        isolate_en    = 1'b1;\n        power_gate_en = 1'b1;\n        sleep_ack     = 1'b1;\n        if (!sleep_req) next_state = ST_CLOCK_OFF;\n      end\n    endcase\n  end\nendmodule",
            "lang": "verilog"
      },
      {
            "title": "6.5 實作演練：休眠喚醒時序仿真 (Hands-on Lab)",
            "content": "1. 仿真 Power Handshake 狀態機，模擬 sleep_req 電平變化與各控制引腳 (clock_gate_en, isolate_en, power_gate_en) 的輸出延遲關係。\n2. 驗證在休眠釋放後，電源必須先開啟、信號先解除隔離、最後才能恢復時脈之安全時序規避。\n3. 分析休眠時晶片漏電流估計與 WFI (Wait For Interrupt) 指令在軟體上的實作。"
      }
],
    quiz: [
      {
            "question": "在 Cortex-M 的節電模式中，Sleep 模式和 Deep Sleep 模式最本質的區別是？",
            "options": [
                  "Sleep 模式會將暫存器內容清空",
                  "Deep Sleep 模式通常會關閉 PLL、切斷主時脈源，甚至降低內部 LDO 電壓輸出以大幅降低靜態功耗",
                  "Sleep 模式不能中斷喚醒",
                  "Deep Sleep 只有 DMA 能工作"
            ],
            "answer": 1,
            "explanation": "Sleep 僅做 CPU 級的 Clock Gating。Deep Sleep 會把整個晶片層的 PLL 停止，甚至搭配電源島關閉，省電效果更顯著但喚醒需要更多穩定時間。"
      },
      {
            "question": "當微控制器執行 'WFI' (Wait For Interrupt) 指令後，CPU 會立刻發生什麼行為？",
            "options": [
                  "處理器立刻發起硬體重置",
                  "處理器暫停指令執行，關閉與內核相關的時脈，進入休眠狀態以便有中斷輸入時喚醒",
                  "清除所有 SRAM 數據",
                  "自動開啟 DMA 傳輸"
            ],
            "answer": 1,
            "explanation": "WFI (Wait For Interrupt) 使處理器掛起進入 Sleep/Deep Sleep，並等待 NVIC 檢測到有 pending 的中斷訊號來重新拉高時脈執行。"
      },
      {
            "question": "SoC 當中常使用 'Clock Gating Control' 細胞元件，其主要省電原理為何？",
            "options": [
                  "降低晶片的供電電壓",
                  "封鎖傳入該電域 Flip-Flop 的 clock 翻轉，使動態功耗降至零",
                  "關閉 Flash 的擦寫功能",
                  "將時脈頻率加倍"
            ],
            "answer": 1,
            "explanation": "CMOS 電路功耗多由信號翻轉引起。Clock Gating 在模組閒置時切斷 clock，使其正反器停止翻轉，即可去除動態切換功耗。"
      },
      {
            "question": "在使用電源閘控 (Power Gating) 斷電的電源域與常開電源域 (Always-On Domain) 的邊界處，硬體設計必須加入何種保護元件？",
            "options": [
                  "Bit-Band 轉接暫存器",
                  "斷電信號隔離單元 (Isolation Cell)",
                  "三態電阻",
                  "解碼多路選通器"
            ],
            "answer": 1,
            "explanation": "在斷電電網中，邏輯門輸出會變成不定態（X）。隔離單元（Isolation Cell）能在斷電時將輸出鎖定在安全電平（如0或1），防止不確定電平導致常開區發生大電流短路。"
      },
      {
            "question": "Wakeup Interrupt Controller (WIC) 對於 SoC 實現極低漏電深度休眠的作用為何？",
            "options": [
                  "WIC 接替 DMA 接管系統匯流排",
                  "在 CPU 和 NVIC 連帶的內核電源域斷電時，WIC 以極小功耗監聽中斷喚醒源，並及時發出電源開啟請求",
                  "WIC 負責調節 PLL 輸出頻率",
                  "WIC 用於除錯 SWD 訊號之同步"
            ],
            "answer": 1,
            "explanation": "WIC 位於常開電源域。當 CPU/NVIC 電源域全斷電以消除漏電漏電流時，WIC 能默默監控喚醒事件，然後指引電源管理器（PMC）上電以重建內核狀態。"
      },
      {
            "question": "Cortex-M 處理器內部，控制是否進入 Deep Sleep 模式的關鍵暫存器控制位元是？",
            "options": [
                  "xPSR.I 位元",
                  "SCB->SCR.SLEEPDEEP 位元",
                  "NVIC_ISER 暫存器第 0 位",
                  "CONTROL 暫存器特權位元"
            ],
            "answer": 1,
            "explanation": "系統控制暫存器（SCB）的 SCR（System Control Register）中的 SLEEPDEEP 位決定執行 WFI/WFE 時，是進入普通 Sleep 還是 Deep Sleep。"
      },
      {
            "question": "在實現動態電壓頻率縮放（DVFS）技術中，其根本公式依據中，晶片功耗（P）與電壓（V）及頻率（f）的物理關係為何？",
            "options": [
                  "P 正比於 V 與 f 的乘積",
                  "P 正比於 V 平方與 f 的乘積 (P ∝ f * V^2)",
                  "P 與 V^3 成反比",
                  "P 與 2^f 成正比"
            ],
            "answer": 1,
            "explanation": "動態功耗 P_dynamic = C * V^2 * f。頻率降低功耗線性下降，降低電壓 (V) 則能實現平方级的功耗縮減。"
      },
      {
            "question": "當 CPU 的 sleep_req 訊號拉高後，SoC 電源管理器（PMC）在進行 Power Gating 時的正確時序關係為何？",
            "options": [
                  "立刻拉斷電源網格，隨後拉高信號隔離單元",
                  "先開啟信號隔離（Isolate），隨後切斷時脈，最後才切斷電源閘（Power Switch）",
                  "先切斷電源閘，隨後隔離，最後關閉時脈",
                  "直接將系統 PLL 頻率拉高以加速進入休眠"
            ],
            "answer": 1,
            "explanation": "安全时序要求：在切斷電源（Power off）前，必須先完成信號隔離（Isolate）與時脈關斷（Clock gate），以防止斷電電壓瞬變產生漏電與不定態漏電流擴散。"
      },
      {
            "question": "除了 WFI (Wait for Interrupt)，Cortex-M 還提供了另一種喚醒事件機制是？",
            "options": [
                  "WFE (Wait for Event) 指令，可以配合事件暫存器與 RXEV 引腳進行事件喚醒",
                  "SYSRESETREQ 重置喚醒",
                  "DMA 直接觸發唤醒",
                  "SWO 直接跳轉喚醒"
            ],
            "answer": 0,
            "explanation": "WFE (Wait For Event) 可以讓 CPU 在檢測到特定事件暫存器（Event Register）或 RXEV (Receive Event) 外部硬體信號置位時被喚醒，常用於自旋鎖（Spinlock）節能。"
      },
      {
            "question": "在低功耗設計中，什麽是 SRPG (State Retention Power Gating)？",
            "options": [
                  "一種完全清除所有資料的休眠機制",
                  "使用專用狀態保留正反器 (Retention Flip-Flop)，在斷電時將寄存器狀態存儲在辅助弱電流單元中，以便重新上電後快速恢復核心狀態",
                  "將資料傳送到 ROM",
                  "將 CPU 的時脈翻轉率降低一半"
            ],
            "answer": 1,
            "explanation": "SRPG 利用 Retention FF，在斷電期間保留暫存器狀態，省去了寫入外部 RAM 和重啟引導初始化的耗時，能實現毫秒級快速熱啟動。"
      }
]
  },
  {
    id: "soc-ch7",
    num: 7,
    group: "SoC 系統設計 (SoC System Design)",
    title: "第七章：AMBA 匯流排基礎設施元件設計",
    desc: "研討實作 AHB 多路選擇器（Slave Mux）、預設從屬器（Default Slave）錯誤回報，與 AHB-to-APB Bridge 轉換電路。",
    sections: [
      {
            "title": "7.1 AHB 位址編譯與預設從屬器 (Default Slave)",
            "content": "在一個 AHB 匯流排架構中，如果 Master 對一個未映射的非法位址進行讀寫，必須有一個組件扮演響應者的角色，這就是 Default Slave。\n當解碼器判斷位址落在空白區間時，會拉高 HSEL_DefSlave。\nDefault Slave 的唯一功能是負責為任何非法傳輸返回符合 AMBA 標準的雙週期錯誤響應（2-cycle ERROR Response）。"
      },
      {
            "title": "7.2 AHB 從屬多路選通器 (Slave Mux) 職責",
            "content": "在匯流排中，多個 Slave 共用同一條資料讀取匯流排（HRDATA）和狀態響應匯流排（HREADY, HRESP）。因此，SoC 需要一個多路選擇選通器（Slave Multiplexer）。\n它根據中央解碼器解出的選擇結果，選擇對應 Slave 的 HREADYOUT、HRESP 以及 HRDATA 送回給 Master。由於資料讀寫存在一個時脈的管線延遲，Mux 在進行數據多路復用時，必須使用寄存器（Sampled Read Select Register）將位址階段所選擇的 Slave 代號保存一拍，如此才能在下一個數據階段選中正確的 Slave 回傳值。"
      },
      {
            "title": "7.3 AHB 到 APB 匯流排橋接器 (AHB-to-APB Bridge)",
            "content": "APB 週邊通常運轉在較低時脈。AHB-to-APB Bridge 負責轉換匯流排協定：它在 AHB 端充當 Slave 接收 Master 請求（地址與寫資料），並在 APB 端充當 Master 去驅動 PSEL, PADDR, PWRITE, PENABLE, PWDATA 等信號。\n橋接器內部還必須處理時脈分頻對齊，並在 APB 外設未就緒時，透過拉低 AHB 端的 HREADYOUT 來延長主控端等待時間。"
      },
      {
            "title": "7.4 AHB Default Slave 與 Slave Mux (Verilog)",
            "code": "// AHB-Lite 預設從屬器模型 - 當訪問非法地址時返回 2-Cycle ERROR\nmodule ahb_defslave (\n  input  wire       HCLK,\n  input  wire       HRESETn,\n  input  wire       HSEL,\n  input  wire [1:0] HTRANS,\n  input  wire       HREADY,\n  output logic      HREADYOUT,\n  output logic      HRESP\n);\n  reg [1:0] RespState;\n  wire      TransReq;\n\n  assign TransReq = HSEL & HTRANS[1] & HREADY;\n\n  // RespState: 01=IDLE/READY, 10=ERROR_CYCLE1, 11=ERROR_CYCLE2\n  always @(posedge HCLK or negedge HRESETn) begin\n    if (~HRESETn) begin\n      RespState <= 2'b01;\n    end else begin\n      case (RespState)\n        2'b01: begin\n          if (TransReq) RespState <= 2'b10; // 發起非法存取的下個週期進入第一拍錯誤\n        end\n        2'b10: begin\n          RespState <= 2'b11; // 進入第二拍錯誤，同時輸出 HREADYOUT=0/HRESP=1\n        end\n        2'b11: begin\n          RespState <= 2'b01; // 返回 IDLE，輸出 HREADYOUT=1/HRESP=1 完成出錯傳輸\n        end\n        default: RespState <= 2'b01;\n      endcase\n    end\n  end\n\n  assign HREADYOUT = (RespState == 2'b10) ? 1'b0 : 1'b1;\n  assign HRESP     = (RespState == 2'b01) ? 1'b0 : 1'b1;\nendmodule",
            "lang": "verilog"
      },
      {
            "title": "7.5 實作演練：Default Slave 錯誤發射時序 (Hands-on Lab)",
            "content": "1. 將 ahb_defslave 實例化，模擬在 HSEL 觸發後，如何輸出的雙週期錯誤波形（第一週期：HREADYOUT=0, HRESP=1；第二週期：HREADYOUT=1, HRESP=1）。\n2. 編寫 SVA 驗證 Default Slave 確實在 HTRANS 開始後觸發 ERROR 時序拉高。\n3. 分析多 Master 時，仲裁器與 Slave Mux 共同配合時所應採取的 Pipeline 保留和切換策略。"
      }
],
    quiz: [
      {
            "question": "在 AHB 匯流排基礎架構設計中，如果解碼器檢測到非法位址，它會拉高哪一個 Slaves 的選擇訊號？",
            "options": [
                  "SRAM Slave Selector",
                  "ROM Slave Selector",
                  "Default Slave Selector",
                  "APB Bridge Selector"
            ],
            "answer": 2,
            "explanation": "解碼器檢測到未映射的位址區間時，會拉高 HSEL_DefSlave，將請求轉發至 Default Slave 進行錯誤處理。"
      },
      {
            "question": "在 AHB Slave Mux (從屬選擇多路器) 設計中，為甚麼在多路復用 HRDATA 時需要使用暫存器將 HSEL 信號延遲一拍？",
            "options": [
                  "為了降低系統 clock 頻率",
                  "因為 AHB 具有管線化特徵，位址階段與數據階段相差一個時脈週期",
                  "為了防止亞穩態",
                  "預設的 APB 協定必須要求延遲"
            ],
            "answer": 1,
            "explanation": "AHB 的位址階段（HSEL 定址）和資料讀取階段（HRDATA 返回）存在一拍的 Pipeline 差。Mux 必須記錄上一拍選中的 Slave ID，才能在當前資料拍正對應讀取管道。"
      },
      {
            "question": "當 AHB Default Slave 響應主控端非法存取時，會發射 2-cycle ERROR。這兩個週期的 HREADYOUT 與 HRESP 信號順序分別為何？",
            "options": [
                  "第一週期：HREADYOUT=0, HRESP=0；第二週期：HREADYOUT=1, HRESP=1",
                  "第一週期：HREADYOUT=0, HRESP=1；第二週期：HREADYOUT=1, HRESP=1",
                  "第一週期：HREADYOUT=1, HRESP=1；第二週期：HREADYOUT=1, HRESP=0",
                  "第一週期：HREADYOUT=1, HRESP=0；第二週期：HREADYOUT=0, HRESP=1"
            ],
            "answer": 1,
            "explanation": "2-cycle ERROR：第一拍拉低 HREADYOUT=0 使 Master 延長等待，並表明有 ERROR (HRESP=1)；第二拍拉高 HREADYOUT=1 完成釋放，同時維持 HRESP=1。"
      },
      {
            "question": "在 AHB-to-APB Bridge 中，如果 APB 外圍暫存器需要 3 個 APB 時脈週期才能返回資料，Bridge 該如何通知 AHB Master？",
            "options": [
                  "立刻返回 ERROR 響應",
                  "在 APB 傳輸未完成期間，將 AHB 端的 HREADYOUT 信號拉低 (0)，強迫 CPU 等待",
                  "直接拉高 HRESP",
                  "暫停系統 PCLK 控制"
            ],
            "answer": 1,
            "explanation": "當 APB 端的 PREADY 為 0（代表外設未就緒）時，Bridge 在 AHB 端會保持 HREADYOUT 為低，以將 CPU 發起的匯流排交易掛起，直到 APB 讀取完成。"
      },
      {
            "question": "如下 AHB Default Slave 的控制邏輯中，RespState 暫存器復位後的初始編碼是？",
            "options": [
                  "2'b00 (ERROR)",
                  "2'b01 (IDLE/READY)",
                  "2'b10 (CYCLE1)",
                  "2'b11 (CYCLE2)"
            ],
            "answer": 1,
            "explanation": "復位後預設處於空閒就緒狀態（2'b01），此時 HREADYOUT=1，允許 Master 發起新的傳輸。"
      },
      {
            "question": "在 AHB 系統中，解碼器輸出的複數個 HSELx 信號，是由哪一個單元進行邏輯產生？",
            "options": [
                  "Processor Core",
                  "中央位址譯碼器 (Central Address Decoder)",
                  "DMA 主控器",
                  "APB 橋接器"
            ],
            "answer": 1,
            "explanation": "中央解碼器根據 Master 輸出的 HADDR 進行解碼，並輸出給各 Slave 對應的 HSELx。"
      },
      {
            "question": "若設計中需要 1 個 Master 與 3 個 Slave，則 AHB 系統中總共需要多少個 Slave Mux 通道？",
            "options": [
                  "1個與 3 組輸入的 Mux 通道 (複用這 3 個 Slave 的回應信號)",
                  "3個 Mux 通道",
                  "9個 Mux 通道",
                  "不需要 Mux，可用 OR 閘直接相加"
            ],
            "answer": 0,
            "explanation": "只需要一組多路選擇器選通器（Slave Mux），輸入端接三個 Slaves，根據 decode 保留位選出對應的 HRDATA, HREADYOUT, HRESP 返回給唯一 Master。"
      },
      {
            "question": "在 AHB 協議中，HRESP 信號為 0 (OKAY) 和 1 (ERROR) 分別代表什麼意思？",
            "options": [
                  "0 代表傳輸失敗，1 代表傳輸成功",
                  "0 代表傳輸成功/正常，1 代表傳輸錯誤",
                  "0 代表寫入，1 代表讀取",
                  "0 代表連續傳輸，1 代表非連續傳輸"
            ],
            "answer": 1,
            "explanation": "HRESP = 1'b0 (OKAY) 表示傳輸正常完成；HRESP = 1'b1 (ERROR) 表示傳輸失敗或發生位址越界等異常。"
      },
      {
            "question": "AHB-to-APB 匯流排橋接器在進行寫傳輸時，如果 HCLK 與 PCLK 的頻率不同（例如 HCLK=100MHz, PCLK=50MHz），橋接器內部通常需要處理什麼？",
            "options": [
                  "非同步時脈域跨越與狀態握手控制",
                  "直接忽略時脈差異",
                  "使 CPU 頻率降到 50MHz",
                  "將 APB 數據直接丟棄"
            ],
            "answer": 0,
            "explanation": "如果兩總線為同步分頻關係，可以利用時脈邊沿使能訊號；如果是不同源異步時脈，則橋接器內部需實作動態 FIFO 或異步握手電路以確保安全跨時脈傳輸。"
      },
      {
            "question": "在 APB 匯流排中，所有的傳輸至少需要花費多少個時脈週期？",
            "options": [
                  "1 個時脈週期",
                  "2 個時脈週期 (Setup 拍與 Access 拍)",
                  "3 個時脈週期",
                  "不固定，取決於地址大小"
            ],
            "answer": 1,
            "explanation": "APB 匯流排傳輸無管線，每次讀寫操作均需至少經歷 Setup Phase (1 拍) 和 Access Phase (1 拍)，合計至少 2 個 PCLK 週期。"
      }
]
  },
  {
    id: "soc-ch8",
    num: 8,
    group: "SoC 系統設計 (SoC System Design)",
    title: "第八章：常用簡單外設元件設計",
    desc: "實行 APB 控制暫存器 Programmer's Model 生態，包含 GPIO、定時二進制計數器（Timer）與 UART 收發模組。",
    sections: [
      {
            "title": "8.1 程式設計模型與周邊暫存器的基底位址",
            "content": "微控制器周邊是透過軟體讀寫暫存器來操作的，這組暫存器的位址區間和功能被稱為 Programmer's Model。\n每個暫存器會被指配特定偏移量（Register Offset），例如 GPIO_IN 在 0x0、GPIO_OUT 在 0x4。\n設計外設硬體時，必須對解出的 PSEL 與 PADDR 進行解碼，根據 PWRITE 來執行暫存器在相對寫使能觸發下的資料更新。"
      },
      {
            "title": "8.2 APB GPIO 暫存器控制元件",
            "content": "通用輸入輸出埠 (GPIO) 是最基本的週邊。最簡單的 GPIO 包含三個寄存器：\n1. DATAIN：唯讀暫存器，直接取樣實體引腳上的狀態。\n2. DATAOUT：可讀寫暫存器，保存軟體想要輸出的電平資料。\n3. OUTENABLE：可讀寫暫存器，控制各實體引腳的三態緩衝區（Tri-state Buffer）方向開關。\n此外還能更進一步加入中斷觸發（如上升/下降沿中斷暫存器）。"
      },
      {
            "title": "8.3 APB 定時器 (Timer) 控制核心",
            "content": "定時器通常用來實現精準的定時中斷。典型 APB Timer 包含：\n1. CTRL：控制暫存器，決定定時器啟用（EN）、中斷使能（INTEN）以及時脈來源選擇。\n2. VALUE：目前計數值暫存器，每個 active clk 下減 1（或是加 1）。\n3. RELOAD：重載值暫存器，當 VALUE 計數減到 0 時，會自動複製 RELOAD 暫存器數值，同時觸發中斷旗標（Interrupt Status）。"
      },
      {
            "title": "8.4 APB Timer 積體電路模組 (Verilog)",
            "code": "module apb_timer (\n  input  logic        PCLK,\n  input  logic        PRESETn,\n  input  logic        PSEL,\n  input  logic [7:2]  PADDR,\n  input  logic        PENABLE,\n  input  logic        PWRITE,\n  input  logic [31:0] PWDATA,\n  output logic [31:0] PRDATA,\n  output logic        PREADY,\n  output logic        PSLVERR,\n  output logic        TIMERINT  // 定時器中斷輸出\n);\n  // 定義暫存器偏移量\n  // 0x00: CTRL [3]TimerIntEn [0]Enable\n  // 0x04: VALUE [31:0] Current Value\n  // 0x08: RELOAD [31:0] Reload Value\n  // 0x0C: INTSTATUS [0] Write 1 to Clear\n  \n  logic [31:0] r_ctrl;\n  logic [31:0] r_value;\n  logic [31:0] r_reload;\n  logic        r_intstatus;\n\n  assign PREADY  = 1'b1; // 無等待狀態週邊\n  assign PSLVERR = 1'b0; // 始終返回正常\n\n  wire write_en = PSEL && PENABLE && PWRITE;\n  \n  // 寫入暫存器控制\n  always_ff @(posedge PCLK or negedge PRESETn) begin\n    if (!PRESETn) begin\n      r_ctrl      <= 32'h0;\n      r_value     <= 32'h0;\n      r_reload    <= 32'h0;\n      r_intstatus <= 1'b0;\n    end else begin\n      // 計數下減行為\n      if (r_ctrl[0]) begin\n        if (r_value == 32'h0) begin\n          r_value <= r_reload;\n          if (r_ctrl[3]) r_intstatus <= 1'b1; // 中斷使能狀況下觸發計數溢出中斷\n        end else begin\n          r_value <= r_value - 1;\n        end\n      end\n      \n      // APB 寫入更新暫存器的值\n      if (write_en) begin\n        case (PADDR[3:2])\n          2'b00: r_ctrl   <= PWDATA;\n          2'b01: r_value  <= PWDATA;\n          2'b10: r_reload <= PWDATA;\n          2'b11: if (PWDATA[0]) r_intstatus <= 1'b0; // 清除中斷旗標(Write 1 to Clear)\n        endcase\n      end\n    end\n  end\n\n  // 讀取暫存器多路資料復用\n  always_comb begin\n    PRDATA = 32'h0;\n    if (PSEL && !PWRITE) begin\n      case (PADDR[3:2])\n        2'b00: PRDATA = r_ctrl;\n        2'b01: PRDATA = r_value;\n        2'b10: PRDATA = r_reload;\n        2'b11: PRDATA = {31'h0, r_intstatus};\n      endcase\n    end\n  end\n\n  assign TIMERINT = r_intstatus;\nendmodule",
            "lang": "verilog"
      },
      {
            "title": "8.5 實作演練：定時中斷與暫存器讀寫 (Hands-on Lab)",
            "content": "1. 模擬 apb_timer，先寫入重載值 100，接著寫入 0x09 (啟用並開啟中斷) 至主控制暫存器。\n2. 觀察當前計數器減到 0 時，位址 0x0C 的 INTSTATUS 暫存器及外部中斷 TIMERINT 引腳是否同拉高。\n3. 編寫 Testbench 向 0x0C 寫入 0x01，驗證定時器中斷狀態的 W1C (寫一清零) 電路功能運作。"
      }
],
    quiz: [
      {
            "question": "周邊開發中的 'Programmer's Model' (程式設計模型) 具體指什麼？",
            "options": [
                  "軟體代碼的封裝格式",
                  "外設向軟體工程師暴露的暫存器控制接口、偏移地址與二進位定義",
                  "FPGA 燒錄的 Bitstream 內容",
                  "除錯主機 J-Link 的說明手冊"
            ],
            "answer": 1,
            "explanation": "Programmer's Model 定義了硬體如何映射至軟體視角（定址基底、暫存器位元組偏移、讀寫讀寫寫標誌等），方便驅動開發。"
      },
      {
            "question": "自製 APB GPIO 週邊中，若要寫入實體輸出引腳的訊號，軟體通常寫入哪個暫存器？",
            "options": [
                  "DATAIN",
                  "DATAOUT",
                  "OUTENABLE",
                  "INTSTATUS"
            ],
            "answer": 1,
            "explanation": "DATAOUT 用於儲存要輸出的邏輯資料；OUTENABLE 則用來配置引腳是輸入還是輸出輸出輸出；DATAIN 則反映輸入引腳的外部狀態。"
      },
      {
            "question": "在定時器 APB Timer 設計中，若 VALUE 計數下減到 0，且 CTRL[3] = 1 (中斷使能)，系統會發起什麼動作？",
            "options": [
                  "自動將系統重設",
                  "自 RELOAD 暫存器加載計加載值，同時拉高中斷輸出信號 TIMERINT",
                  "將 VALUE 計數向上累加",
                  "自動關閉 Timer 的 Enable 位"
            ],
            "answer": 1,
            "explanation": "Timer 減到 0 後自動重載（Reload），並在計數溢出且中斷被使能時，觸發中斷標誌。該標誌輸出到 SoC 中斷線即為 TIMERINT。"
      },
      {
            "question": "在週邊暫存器的設計中，什麽是 W1C (Write 1 to Clear)？",
            "options": [
                  "寫入 1 代表設定為最高搶占中斷優先編譯級",
                  "向該 Flag 暫存器位寫入 1 即可將其硬體清除為 0，寫入 0 則不影響",
                  "只能寫入 1 次資料",
                  "寫入 1 代表清除所有 SRAM 記憶體"
            ],
            "answer": 1,
            "explanation": "W1C 常用於中斷狀態/旗標暫存器維護。軟體寫入 1 時，硬體檢測到寫入資料 bit 為 1，會自動清除內部 Pending 狀態為 0，不需要寫 0 來清，避免了 R-M-W 衝突。"
      },
      {
            "question": "在定時器軟硬體測試中，若 PCLK = 50MHz，程式將 RELOAD 暫存器設定為 49999，則定時器中斷間隔時間為何？",
            "options": [
                  "0.1 毫秒",
                  "0.5 毫秒",
                  "1.0 毫秒 (1ms)",
                  "10.0 毫秒"
            ],
            "answer": 2,
            "explanation": "時脈為 50MHz 代表每秒有 50,000,000 個 ticks。定時器計數次數為 49999+1 = 50000 次，50000 / 50,000,000 = 0.001 秒 = 1ms。"
      },
      {
            "question": "在 APB GPIO 設計中，如果 OUTENABLE 暫存器某位元為 0，此時軟體讀取 DATAIN 位，會讀取到？",
            "options": [
                  "必為 0",
                  "對應實體 IO 腳位由外部硬體電路驅動的真實邏輯電平",
                  "上一次 DATAOUT 暫存器的寫入值",
                  "隨機雜訊"
            ],
            "answer": 1,
            "explanation": "當 OUTENABLE=0，代表該 IO 被設定為「輸入模式」，此時外部三態緩衝關閉關閉，讀取 DATAIN 得到的是實體管腳輸入的外部邏輯訊號。"
      },
      {
            "question": "在 APB Timer 的電路中，通常會設計 PREADY 恒為 1。這意味著該週邊的讀寫傳輸性能如何？",
            "options": [
                  "每次讀寫都需要插入等待週期",
                  "每次讀寫皆可在 SETUP 開始後的下一個時脈週期（ACCESS）無延遲完成",
                  "傳輸性能非常差",
                  "只能進行寫入，不能讀取"
            ],
            "answer": 1,
            "explanation": "PREADY = 1 表明 Slave 隨時就緒，無須藉由拉低 PREADY 插入等待週期，傳輸效率最高。"
      },
      {
            "question": "UART 數據傳輸中，一個標準的 UART 數據幀通常不包含下列哪個部分？",
            "options": [
                  "1 bit 起始位 (Start Bit, 通常為低電平)",
                  "5 到 8 bit 資料位 (Data Bits)",
                  "APB 片選訊號",
                  "1 或 2 bit 停止位 (Stop Bit, 通常為高電平)"
            ],
            "answer": 2,
            "explanation": "UART 是非同步序列通訊協議，其實體線上只有 TX/RX，沒有 APB 片選信號。APB 傳輸片選只存在於 SoC 內部的匯流排側。"
      },
      {
            "question": "一個 16 倍超取樣 (x16 Oversampling) 數位 UART 接收端，其主要優勢為何？",
            "options": [
                  "能將鮑率提升 16 倍",
                  "可對輸入的 RXD 信號在一個 Bit 寬度內採樣 16 次，通過多數決濾波避開雜訊，精準定位起始位元中段",
                  "降低硬體邏輯門面積",
                  "不需要時脈源即可接收"
            ],
            "answer": 1,
            "explanation": "超取樣（Oversampling）利用高頻時脈去採樣低速 RX，檢測到 Rx 邊沿後在中段（如第8次採樣）提取資料，能有效抑制雜訊並容忍發收時脈誤差。"
      },
      {
            "question": "下列關於外設暫存器位元組對齊（Byte Addressable）的敘述，何者正確？",
            "options": [
                  "所有的 APB 暫存器都必須指配在奇數位址",
                  "暫存器基底位址與偏移量通常指配在以 4 的倍數對齊的 Word 位址上",
                  "暫存器不能進行 Byte 讀寫",
                  "外設暫存器不佔用定址空間"
            ],
            "answer": 1,
            "explanation": "為了配合 32 位元 CPU 存取架構，週邊暫存器偏移多以 4 bytes (1 word) 遞增，以確保存取效能並防止對齊 Fault。"
      }
]
  },
  {
    id: "soc-ch9",
    num: 9,
    group: "SoC 系統設計 (SoC System Design)",
    title: "第九章：系統整合與嵌入式軟體開發基礎",
    desc: "搭建全晶片級頂層互連（SoC Top）、異步復位同步釋放樹（Reset Tree）與模擬驗證 Testbench 線路。",
    sections: [
      {
            "title": "9.1 系統頂層互連與整合 (Top-level Interconnect)",
            "content": "當設計好 CPU、處理器匯流排、解碼器、多路選擇器以及外設後，下一步就是在晶片頂層（SoC Top-level）將它們連接在一起。這包括將 Cortex-M 終端與復合的 AHB-Lite 匯流排矩陣相連，將 SRAM/ROM 連接至其專用的控制器控端，並將外圍組件懸掛在 APB Bridge 之下。\n整合的關鍵在於地址與數據通路的匹配，並正確引出除錯埠、I/O 埠、中斷訊號與電源訊號。"
      },
      {
            "title": "9.2 時脈與位元重置樹分佈設計 (Clock & Reset Tree)",
            "content": "SoC 當中包含不同的時脈與重置域：\n1. 時脈分佈：時脈產生器（CGU）根據晶振與 PLL 產生 CPUCLK、HCLK（AHB 匯流排時脈）、PCLK（APB 週邊時脈）。為避免動態功耗過高，需支援動態分頻與局部 peripheral 時脈切斷。\n2. 重置分佈：SoC 通常使用異步重置、同步釋放機制。重置源包含 Power-On Reset (POR)、外部重置、看門狗（WDT）超時重置以及軟體觸發的 System Reset (SYSRESETREQ)。必須確保重置撤銷（rst_n 變高）在時脈下降沿過渡，避免 Setup/Hold Time 違規導致亞穩態（Metastability）。"
      },
      {
            "title": "9.3 晶片層模擬測試平台 (Simulation Testbench)",
            "content": "驗證完整的 SoC 發育需要建構系統層 Testbench。這通常在 Verilog/SystemVerilog 當中實例化晶片頂層模組，並在外接入拉高/拉低控制，模擬 Flash/ROM 當中預先編譯好的中斷與韌體程式。\n除錯時，可透過 Verilog 的 $readmemh 將軟體編譯產生的十六進位檔案（.hex 或 .bin）讀入唯讀 ROM 或 Flash 記憶體陣列的模型中，讓虛擬 CPU 能夠在重置釋放後直接載入代碼執行，藉此模擬一秒內的點燈或週邊晶片級互動。"
      },
      {
            "title": "9.4 系統頂層包裝器腳本 (Verilog RTL)",
            "code": "// SoC Top Level 整合架構骨架範例\nmodule soc_top (\n  input  logic        osc_clk,     // 外部晶振時脈\n  input  logic        ext_rst_n,   // 外部重置引腳\n  // GPIO 實體埠\n  inout  wire  [7:0]  gpio_pins,\n  // UART 實體埠\n  input  logic        rxd,\n  output logic        txd\n);\n  // 內部時脈重置信號\n  logic clk;\n  logic rst_n;\n  \n  // 匯流排信號\n  logic [31:0] haddr;\n  logic        hwrite;\n  logic [1:0]  htrans;\n  logic [2:0]  hsize;\n  logic [31:0] hwdata;\n  logic [31:0] hrdata;\n  logic        hready;\n  logic        hresp;\n\n  // 1. 時脈與復位控制單元 (Reset Synchronizer)\n  // 此處省略 PLL 鎖相環與 Synchronizer 實作，假設直連\n  assign clk   = osc_clk;\n  assign rst_n = ext_rst_n;\n\n  // 2. 仿真 Cortex-M3/M0 內核虛擬 IP\n  // 在此作為 Bus Master 發射讀寫訊號\n  // (實際設計中會在這裡實例化 cortex_m_core 核心組件)\n\n  // 3. AHB 位址解碼器與 Slave Mux 系統\n  // 根據 haddr 選通 AHB ROM, AHB SRAM 或 APB 橋接器\n\n  // 4. APB 橋接器與 GPIO/UART 週邊整合\n  // 將 AHB 存取轉接至 APB 並連接口線\n\nendmodule",
            "lang": "verilog"
      },
      {
            "title": "9.5 實作演練：軟硬體聯合仿真 (Hands-on Lab)",
            "content": "1. 閱讀 soc_top 架構骨架，分析外部時脈與復位訊號的分流路徑。\n2. 撰寫一個簡單的仿真腳本，確認復位訊號釋放後，虛擬 CPU 發出的第一個 AHB 讀取位址是否確實為 0x0000_0000 處的向量表。\n3. 分析如何向 ROM 模型中載入 hex 測試檔，使其能在模擬器中輸出 UART 資料波形。"
      }
],
    quiz: [
      {
            "question": "SoC 系統整合時，完成 AHB ROM、SRAM 和 APB Bridge 的實例化後，重置訊號釋放後 CPU 的第一個動作是？",
            "options": [
                  "發送中斷響應",
                  "從代碼區的最底端（通常是位址 0x0000_0000）讀取初始 Stack 指標與跳轉位址",
                  "立即將 DMA 控制器停機",
                  "向 GPIO 輸出閃燈"
            ],
            "answer": 1,
            "explanation": "Cortex-M 在 HRESETn 被釋放後的首個時脈上升沿，會從硬體預載的 0x0 地址讀出堆疊指標 (SP)，並從 0x4 載入執行代碼位址跳入跳入運行。"
      },
      {
            "question": "在一組可靠的 SoC 時脈重置控制電路中，「異步重置、同步釋放」的同步器 (Reset Synchronizer) 目的為何？",
            "options": [
                  "使重置訊號立即生效，但釋放重置時會與系統 Clock 上升沿同步，避免邊緣亞穩態衝突",
                  "為了將時脈鎖定在 100MHz",
                  "將小端序轉換為大端序",
                  "關閉所有無效的電源島"
            ],
            "answer": 0,
            "explanation": "同步釋放可確保當 Reset 撤銷時，所有 Register 都在同一個 Clock edge 完成釋放，防止 Hold-time 違規引發晶片不穩定。"
      },
      {
            "question": "軟硬體聯調模擬（Co-simulation）時，如何讓 Verilog 仿真軟體得知 Flash/ROM 當中究竟該執行甚麼應用程式代碼？",
            "options": [
                  "在 Verilog 程式中手動撰寫 CPU 內部指令",
                  "使用 $readmemh 將軟體 C 語言編譯生成的十六進位 .hex/.bin 文本寫入 ROM 仿真陣列",
                  "直接用 debug 引腳燒錄 FPGA",
                  "將 CPU 資料線直接連接到電阻"
            ],
            "answer": 1,
            "explanation": "$readmemh / $readmemb 是 Verilog 系統任務，能在模擬開始時將軟體二進位編譯結果字節數據直接加載至記憶體模型中，直接執行真實韌體。"
      },
      {
            "question": "在 SoC Interconnect 矩陣中，若 CPUCLK (CPU主時脈) 為 100MHz，HCLK = 100MHz，PCLK = 25MHz，則 APB 週邊的時脈比例與數據吞吐為何？",
            "options": [
                  "APB 每個時脈週期和 CPU 同頻進行",
                  "APB 週邊時脈為 CPU 頻率的四分之一，為低頻寬存取速率",
                  "APB 的資料傳輸比 AHB 快四倍",
                  "系統會因為時脈不一致而損壞"
            ],
            "answer": 1,
            "explanation": "APB 運轉在 PCLK (25MHz)，是 HCLK (100MHz) 的 1/4，適合慢速周邊，傳輸開銷小但頻寬較低。"
      },
      {
            "question": "下列何者非片上系統 (SoC) 當中常見的復位源 (Reset Sources)？",
            "options": [
                  "Power-On Reset (POR)",
                  "看門狗定時器計數溢出引起的超時復位",
                  "DPI (Direct Peripheral Interface) 仿真復位",
                  "軟體寫入 SYSRESETREQ 暫存器觸發的熱重置"
            ],
            "answer": 2,
            "explanation": "DPI (Direct Programming Interface) 是 SV 用於與 C 語言關聯的驗證接口，並不屬於實體 SoC 晶片的硬體重置源。"
      },
      {
            "question": "為什麽在頂層整合時，常需要將 JTAG 的五根線路與 SWD 的兩根線路結合？",
            "options": [
                  "為了能夠同時和兩個 debuggers 通訊",
                  "透過 SWJ-DP 動態切換協議，重用 IO 腳位，降低晶片封裝管腳總數",
                  "增大 debug 的資料頻寬",
                  "避免靜態漏電流"
            ],
            "answer": 1,
            "explanation": "結合 JTAG 與 SWD 腳位能實作 pin multiplexing，提供最大的偵錯設備兼容性，且不需額外佔用昂貴的實體 Pin 腳。"
      },
      {
            "question": "在全晶片仿真 Testbench 中，為了準確檢查時序，我們常配置 `$timeformat` 系統任務，其引數中的 `-9` 物理代號為何？",
            "options": [
                  "微秒 (us)",
                  "奈秒 (ns)",
                  "皮秒 (ps)",
                  "毫秒 (ms)"
            ],
            "answer": 1,
            "explanation": "$timeformat 的第一個參數為時間單位，-9 代表以 10^-9 秒（也就是 ns，奈秒）作為時序印出的測量基底。"
      },
      {
            "question": "在 System Wrapper 整合中，如果 Master 的 HTRANS 在 Reset 釋放時沒有處於 IDLE，會導致？",
            "options": [
                  "System 記憶體自動清空",
                  "匯流排在復位釋放瞬間發射未知垃圾讀寫交易，可能引發解碼混亂與死機",
                  "CPU 自動進入特權模式",
                  "DMA 觸發中斷"
            ],
            "answer": 1,
            "explanation": "重置時必須強制 Master 輸出 HTRANS 為 00（IDLE）。如果在解脫復位時輸出垃圾值，會誤啟動解碼器，引發系統衝突。"
      },
      {
            "question": "在測試平台中，通常如何仿真一個外圍 Sensor (如 SPI Flash) 向晶片發送資料？",
            "options": [
                  "直接修改 CPU 暫存器變量",
                  "在 Testbench 中編寫仿真外設 Behavioral Model，並將其連接至晶片 IO 引腳，按照 SPI protocol 時序打入串聯波形",
                  "向 ROM 載入 C 代碼",
                  "提高 PLL 的鎖定電壓"
            ],
            "answer": 1,
            "explanation": "外部行為模型 (Behavioral Model) 能模擬實體外設的物理響應，透過模擬引腳進行 Protocol 串行數據交互交互，用以驗證 SoC controller 驅動及硬體運作。"
      },
      {
            "question": "SoC 整合中，SystemInit 函數通常由何者負責調用执行？",
            "options": [
                  "操作系統內核 OS Kernel",
                  "匯流排仲裁器",
                  "Assembler 啟動組件代碼 (Startup Code) 在進入 main() 前執行調用",
                  "除錯主機"
            ],
            "answer": 2,
            "explanation": "引導啟動代碼（Startup Code）會最先啟動，調用 SystemInit 快速配置 PLL 與記憶體介面，然後才跳轉進入使用者 C 代碼 main 進入點。"
      }
]
  },
  {
    id: "soc-ch10",
    num: 10,
    group: "SoC 系統設計 (SoC System Design)",
    title: "第十章：超越處理器系統：DMA 與混合訊號",
    desc: "整合 Direct Memory Access (DMA) 優先級仲裁器、ADC/DAC 類比數位混合通道，與 Beetle IoT 實用 SOC 晶片案例。",
    sections: [
      {
            "title": "10.1 直接記憶體存取 (DMA) 核心整合",
            "content": "在沒有 DMA (Direct Memory Access) 的系統中，所有資料搬移（如從 UART 接收 FIFO 到 SRAM）都必須經過 CPU 執行載入/儲存（LDR/STR）指令，這會消耗大量處理器時序。\nDMA 控制器是第三方的 Bus Master，擁有獲得匯流排掌控權的能力。\n它透過額外的硬體請求/回應握手線（DMA Request / Single / Ack）與週邊相連，能直接在記憶體與外設之間、或是記憶體與記憶體之間高速傳輸數據，過程中無需 CPU 介入，完成傳輸後再以中斷通知 CPU。"
      },
      {
            "title": "10.2 混合信號元件與 SoC 周邊整合 (ADC/DAC)",
            "content": "數位 SoC 經常需要與類比元件（如模數轉換器 ADC、數模轉換器 DAC）進行介面整合。整合方式通常是在數位端設計一個 APB / AHB 暫存器介面的數位包裝器（Register Wrapper）。\n該 Wrapper 把處理器寫入的配置寫入 DAC 的資料暫存器，或是將 ADC 轉換完成的序列二進位結果透過 FIFO 緩衝起，並提供轉換完成中斷（Conversion Complete Interrupt），以便 CPU 或 DMA 來搬移資料頻寬。"
      },
      {
            "title": "10.3 實例剖析：藍牙 IoT 晶片架構 (Beetle Case Study)",
            "content": "以 ARM 官方的 Beetle IoT 測試晶片為例，這是一顆高度集成的 SoC。它採用雙層匯流排架構（高速 AHB 連接 Cortex-M3、SRAM 與 Flash，低速 APB 連接藍牙無線發射射頻 TRx、真實計時器 RTC、GPIO 等）。\nBeetle 晶片展現了極致的電源分區設計（Power Islands），將運算核心與常開的 RTC / 喚醒中斷感測網路硬隔離在不同電壓島中，藍牙射頻亦有專用的低功耗控制機制，這是現代低碳低功耗晶片設計的教科書範例。"
      },
      {
            "title": "10.4 DMA 傳輸請求通道仲裁器 (Verilog)",
            "code": "module dma_channel_arbiter (\n  input  logic        clk,\n  input  logic        rst_n,\n  // 兩組周邊的 DMA 傳輸要求\n  input  logic        req_ch0,   // 通道 0 請求 (優先權高)\n  input  logic        req_ch1,   // 通道 1 請求 (優先權低)\n  output logic        ack_ch0,   // 通道 0 答覆\n  output logic        ack_ch1,   // 通道 1 答覆\n  output logic [1:0]  active_ch  // 當前致能的通道 ID\n);\n  always_ff @(posedge clk or negedge rst_n) begin\n    if (!rst_n) begin\n      ack_ch0   <= 1'b0;\n      ack_ch1   <= 1'b0;\n      active_ch <= 2'b00;\n    end else begin\n      // 固定優先級仲裁 (Fixed Priority)\n      if (req_ch0) begin\n        ack_ch0   <= 1'b1;\n        ack_ch1   <= 1'b0;\n        active_ch <= 2'b01;\n      end else if (req_ch1) begin\n        ack_ch0   <= 1'b0;\n        ack_ch1   <= 1'b1;\n        active_ch <= 2'b10;\n      end else begin\n        ack_ch0   <= 1'b0;\n        ack_ch1   <= 1'b0;\n        active_ch <= 2'b00;\n      end\n    end\n  end\nendmodule",
            "lang": "verilog"
      },
      {
            "title": "10.5 實作演練：DMA 優先級仿真 (Hands-on Lab)",
            "content": "1. 仿真 dma_channel_arbiter 模組，同時拉高 req_ch0 與 req_ch1，驗證通道 0 是否優先獲得 ack 答覆。\n2. 在通道 0 執行傳輸期間拉低 req_ch0，觀察通道 1 是否能夠順利接替獲得授權。\n3. 分析多 Master 匯流排矩陣中，DMA 與 CPU 同時搶占主記憶體時，匯流排層級仲裁器（Arbiter）的優先分配策略。"
      }
],
    quiz: [
      {
            "question": "DMA (直接記憶體存取) 控制器作為第三方 Master 插入匯流排矩陣，其最核心的作用是？",
            "options": [
                  "用來加速 C 語言程序的編譯速度",
                  "免除 CPU 介入，在記憶體與外設或記憶體之間實現高速、自治的資料搬移，節省 CPU 負擔",
                  "降低 PLL 的功耗",
                  "直接把 APB 轉化為 AXI"
            ],
            "answer": 1,
            "explanation": "DMA 主要實現硬件自主搬移。CPU 只需指配起止位址與資料長度，隨後即可去做其他運算，搬完後以中斷回報，大幅釋放處理器算力。"
      },
      {
            "question": "在晶片層整合 ADC (模數轉換器) 時，數位包裝器 (Digital Wrapper) 中的 FIFO 緩衝區主要作用是？",
            "options": [
                  "提高 ADC 的採樣電壓",
                  "緩衝連續採樣出的數位信號，避免 CPU 或 DMA 因來不及讀取而丟失採樣數據",
                  "用來處理 bit-band 存取",
                  "降低系統 Reset 時的雜訊"
            ],
            "answer": 1,
            "explanation": "ADC 的數據產出通常是定時的。Wrapper 內置 FIFO 能克服系統總線等待延遲，暫存轉換後的資料塊以待 CPU/DMA 批次載入。"
      },
      {
            "question": "Beetle IoT 參考晶片案例中，為了達到低功耗應用，內部模組是如何進行分配佈局的？",
            "options": [
                  "所有周邊皆採用高主時脈執行的 AXI 匯流排連線",
                  "將系統劃分為多個獨立的 Power Domain (電壓島)，不工作的電磁射頻與暫停的核心可被斷電關閉，僅保留常開域 WIC/RTC 運轉",
                  "直接將處理器全部拿掉",
                  "使用 1024KB 的超大暫存器"
            ],
            "answer": 1,
            "explanation": "Beetle 展現了先進電力島設計，將射頻 TRx、處理器核心、周邊與 Always-on Domain 物理隔離，並根據狀況動態調整開關，是典型的低能量設計規格。"
      },
      {
            "question": "在 Fixed-Priority (固定優先級) 的 DMA 通道仲裁器中，若 req_ch0 優先級高於 req_ch1，當兩者同時發起請求時，仲裁器會？",
            "options": [
                  "通道 0 和通道 1 輪流發送 (Round Robin)",
                  "優先選通通道 0 的寫應答 ack_ch0，並將 active_ch 指向通道 0 的 ID",
                  "直接拒絕兩個請求",
                  "將 CPU 當前代碼重設"
            ],
            "answer": 1,
            "explanation": "固定優先級仲裁器直接比對高優先級位元。若 req_ch0 存在，無論 req_ch1 是否拉高，都優先答覆通道 0 執行。"
      },
      {
            "question": "在 32-bit 位址匯流排下，SoC 的 DMA 通常以 Bus Master 身份發射傳輸交易。這意味著它的匯流排腳位會和處理器核心的什麼引腳共享？",
            "options": [
                  "僅共享 Reset 和時脈",
                  "共享系統 address (HADDR)、Data (HWDATA/HRDATA) 以及控制匯流排 (HTRANS/HWRITE/HSIZE)",
                  "共享 GPIO 的實體輸出腳",
                  "共享 ETM 除錯追蹤引腳"
            ],
            "answer": 1,
            "explanation": "DMA 作為總線主控（Master），必須和 CPU 一樣連到 Interconnect，直接發射 HADDR 與控制訊號，故其總線路徑與內核完全複用。"
      },
      {
            "question": "下列哪一個應用場景最適合使用 DMA 的 'Memory-to-Memory' (記憶體到記憶體) 傳輸模式？",
            "options": [
                  "UART 接收數據並顯示在 LCD",
                  "雙緩衝區大數據塊複製 (如 memmove / memcpy 硬體加速)",
                  "ADC 動態轉換中斷觸發",
                  "外部除錯指令抓取"
            ],
            "answer": 1,
            "explanation": "Mem-to-Mem 模式允許 DMA 使用最高匯流排速度將一段 SRAM 資料搬運到另一段 SRAM (如 framebuffer 刷新)，不需等待外設 Ready 握手。"
      },
      {
            "question": "什麽是 DMA 傳輸的 'Burst Size' (突發傳輸大小)？",
            "options": [
                  "DMA 晶片的物理封裝大小",
                  "DMA 在單次獲得總線使用權後，所能連續不中斷發射的最大數據項數目 (如 4-beat / 8-beat)",
                  "定時器內部的 reload 值",
                  "ADC 採樣頻率"
            ],
            "answer": 1,
            "explanation": "Burst 傳輸允許 DMA 發起連續地址的多拍存取，而無須在每讀寫一個 Word 都重新申請總線，大幅提升記憶體存取頻寬與總線效率。"
      },
      {
            "question": "SoC 內的類比 ADC (Analog-to-Digital Converter) 在將類比電壓轉化為數位 binary 後，以何種訊號通知 CPU 讀取？",
            "options": [
                  "UART 接收旗標",
                  "EOC / EOS 中斷 (End of Conversion / End of Sequence)",
                  "DMA 優先權中斷",
                  "Bit-band 別名"
            ],
            "answer": 1,
            "explanation": "轉換完畢後，ADC 控制器通常拉高 Conversion Complete 中斷線，通告 NVIC 該資料已解出，提醒 CPU 取值。"
      },
      {
            "question": "Beetle 晶片中採用的低功耗藍牙 (BLE) 子系統，通常以何種匯流排掛載至微處理器？",
            "options": [
                  "高速 AXI 匯流排矩陣",
                  "低速且低功耗的 APB 匯流排",
                  "直連 CPU 的 ITCM 管道",
                  "JTAG 偵錯引腳"
            ],
            "answer": 1,
            "explanation": "藍牙 TRx 控制與寄存器配置頻寬低，因此以 APB 進行控制暫存器映射，在確保通訊的同時把總線電路與漏電控制在最低。"
      },
      {
            "question": "若 DMA 的 Active Channel 暫存器輸出為 2'b10，說明此時晶片內正在執行哪一個傳輸通道的交易？",
            "options": [
                  "通道 0",
                  "通道 1 (因為其編碼對應 2'b10 通道標識)",
                  "無任何通道在工作",
                  "通道 2"
            ],
            "answer": 1,
            "explanation": "根據編碼邏輯，2'b01 代表通道 0 工作，2'b10 則對應通道 1 整體致能狀態。"
      }
]
  },
  {
    id: "soc-ch11",
    num: 11,
    group: "SoC 系統設計 (SoC System Design)",
    title: "第十一章：軟體開發與 RTOS 系統移植",
    desc: "實作 CMSIS-CORE 標準驅動、VTOR 重定向、中斷嵌套優先級管理，與 SysTick 滴答載入與 OS 移植實務。",
    sections: [
      {
            "title": "11.1 外設驅動層 (HAL) 與 CMSIS-CORE 標准",
            "content": "在軟體開發中，為了避免工程師直接對暫存器二進位硬編碼，ARM 建立了 CMSIS (Cortex Microcontroller Software Interface Standard) 規範。\nCMSIS-CORE 定義了統一的暫存器結構體，例如以 typedef struct 定義 `GPIO_TypeDef`，將成員對應至 GPIO 的偏移地址。透過指標 `((GPIO_TypeDef *) GPIO_BASE)` 即可用點運算子結構化操作硬體暫存器，大幅提高了程式碼在不同晶片供應商之間的移植性。"
      },
      {
            "title": "11.2 中斷向量重新定向與引導載入程式 (Bootloader)",
            "content": "軟體系統啟動時，通常會需要中斷桌的重新映射。Cortex-M 具有向量表偏移暫存器 (VTOR, Vector Table Offset Register)。\n微控制器的引導程序（Bootloader）在 Flash 前端執行，當準備加載運行 APP 程式前，會先驗證 APP 映像檔的合法性，接著將 VTOR 修改為 APP 的起始位址（如 0x0801_0000），然後讀取該位址的 MSP 與 Reset_Handler，最後使用跳躍指令跳入該端點執行，實現完整的 Boot 流程。"
      },
      {
            "title": "11.3 中斷驅動程式設計與 NVIC 優先權",
            "content": "NVIC (Nested Vectored Interrupt Controller) 可實現極佳的中斷嵌套與即時中斷響應。優先級分為搶占優先級（Preemption Priority）和子優先級（Subpriority）。\n高搶占優先級的中斷能直接打斷低搶占優先級中斷的執行（搶占嵌套）；若搶占優先級相同，則同時懸掛時僅依據子優先級排序執行，不會發生搶占打斷。寫軟體時，必須在 CMSIS 中調用 `NVIC_SetPriority(IRQn, priority)` 設定，並定義中斷服務常式名（如 `USART1_IRQHandler`）。"
      },
      {
            "title": "11.4 SysTick 定時器初始化與 C 驅動模板",
            "code": "#include \"cortex_m3_harness.h\" // 包含模擬硬體對應之 CMSIS 頭文件\n\n// 聲明全局計數變量\nvolatile uint32_t msTicks = 0;\n\n// SysTick 中斷服務常式 (Interrupt Service Routine)\nvoid SysTick_Handler(void) {\n  msTicks++; // 每次溢出加 1 毫秒\n}\n\n// 延時函數\nvoid Delay(uint32_t dlyTicks) {\n  uint32_t curTicks = msTicks;\n  while ((msTicks - curTicks) < dlyTicks);\n}\n\nint main(void) {\n  // 初始化 SysTick，配置為 1 毫秒觸發一次中斷\n  // SystemCoreClock 假設為 50MHz\n  if (SysTick_Config(50000000 / 1000)) {\n    while(1); // 初始化失敗死循環\n  end\n\n  // 啟用 NVIC 當中的外部中斷 0x05 (假設為 GPIO 中斷)\n  NVIC_EnableIRQ(GPIO_IRQn);\n  NVIC_SetPriority(GPIO_IRQn, 2); // 優先級設為 2\n\n  while(1) {\n    // 軟體循環\n    Delay(500); // 延遲 500ms\n    // 對 GPIO 資料暫存器做 Toggle 閃燈\n    GPIO->DATAOUT ^= 0x01; \n  }\n}",
            "lang": "c"
      },
      {
            "title": "11.5 實作演練：CMSIS 啟動引導與 RTOS 移植 (Hands-on Lab)",
            "content": "1. 閱讀 SysTick 定時器初始化驅動代碼，計算 50MHz 時脈下定時 1ms 的 Reload 值是多少。\n2. 配置 GCC 或 Keil 軟體編譯鏈，將該程式編譯成二進位映像，並在預設 Testbench 模擬器中執行，檢查 UART 日誌是否每隔定時時間即輸出一次閃燈切換指示。\n3. 研究如何導入實時操作系統（如 Keil RTX、FreeRTOS），分析任務調度器的 SysTick 滴答切換機制。"
      }
],
    quiz: [
      {
            "question": "CMSIS-CORE 標準軟體驅動中，利用 C 語言的 struct 定義週邊暫存器結構，是利用了何種硬體映射特徵？",
            "options": [
                  "成員變量的宣告順序與內存字長偏移，剛好與外設物理暫存器的偏移位址完全重合",
                  "C 語言變量能自動降低晶片功耗",
                  "暫存器不能使用 struct 結構體",
                  "為了引入類別 OOP 繼承"
            ],
            "answer": 0,
            "explanation": "C Struct 成員儲存是連續的。將 C Struct 指針強制指向周邊 Base Addr，即可透過 `GPIO->DATAOUT` 巧妙對應到 `Base + 4` 的實體寫入暫存器。"
      },
      {
            "question": "VTOR (Vector Table Offset Register, 向量表偏移暫存器) 在軟體開發當中的最典型用途為何？",
            "options": [
                  "提高 ROM 容量",
                  "將中斷向量表重新定向，使得中斷發生時 CPU 能跳轉跳轉到 SRAM 或自定義 Flash 分區的 ISR 代碼區",
                  "用來偵測 JTAG 是否拔除",
                  "重置所有的 stack 指標"
            ],
            "answer": 1,
            "explanation": "VTOR 設定中斷表基底位址。修改它可使 CPU 在觸發 Exception 時，轉而查詢新的向量表（如 Bootloader 跳入 APP 時），非常靈活。"
      },
      {
            "question": "在 NVIC (巢狀向量中斷控制器) 中，若中斷 A 的搶占優先級 (Preemption Priority) 為 1，子優先級為 2；中斷 B 的搶占優先級為 2，子優先級為 1。下列敘述何者正確？",
            "options": [
                  "中斷 B 可以打斷中斷 A 的 execution",
                  "中斷 A 的搶佔優先級高（數字低），因此中斷 A 正在執行時若中斷 B 觸發，B 將會被懸掛直到 A 執行完畢；若 B 先執行，A 可直接打斷 B",
                  "兩個中斷會同時並行運行",
                  " NVIC 會發起 HardFault"
            ],
            "answer": 1,
            "explanation": "搶佔級別數值越小，優先權越高，且只有搶佔級別高的中斷能實現打斷與嵌套。子優先權僅用於兩中斷同時等待時的先後排程。"
      },
      {
            "question": "Cortex-M 處理器內建的 'SysTick' 定時器是何種結構？",
            "options": [
                  "必須外接 CPU 晶片的引腳才會動作的數位電路",
                  "一個內建於 Cortex-M 內核內部的 24-bit 下減計數定時器，為操作系統 RTOS 提供標準的心跳滴答 (Tick)",
                  "一個 32 位元的 UART 計步器",
                  "專為 DMA 加速設計的 FIFO 緩衝區"
            ],
            "answer": 1,
            "explanation": "SysTick 是 ARM 生態系的利器。在各家 Cortex-M 晶片中都統一實作了此 24-bit 滴答時鐘，使得 RTOS 核心系統的移植變得極為標準標準與簡單。"
      },
      {
            "question": "當編寫 C 語言中斷服務常式時，必須確保名稱與向量表名稱完全一致。在 ARM 預設 GCC 編譯鏈中，Systick 中斷常式名為？",
            "options": [
                  "systick_isr()",
                  "SysTick_Handler(void)",
                  "sys_tick_fun()",
                  "NVIC_SysTick_Handler()"
            ],
            "answer": 1,
            "explanation": "CMSIS startup 啟動代碼中中斷函數指標名稱預設使用 `SysTick_Handler` 弱定義，C 語言中定義此名可實作覆寫聯結。"
      },
      {
            "question": "在 NVIC 中，如果軟體想要主動觸發某個外部中斷，除了模擬實體引腳變化，還能？",
            "options": [
                  "寫入 NVIC 內的懸掛暫存器 (NVIC_ISPR 或軟體中斷觸發暫存器 STIR)",
                  "拉低 HRESETn",
                  "重新編譯 C 軟體",
                  "調用 system_shutdown"
            ],
            "answer": 0,
            "explanation": "NVIC 提供了可編程懸掛控制。向 NVIC_ISPR 寫入對應中斷 ID offset，即可軟體置位中斷掛起，實現軟體觸發中斷（Software Interrupt）。"
      },
      {
            "question": "若 SysTick 暫存器 SystemCoreClock 為 80MHz，想要設定 1KHz 的心跳滴答，則寫入 SysTick_Config 的 reload 參數值應該是多少？",
            "options": [
                  "80000",
                  "800000",
                  "8000",
                  "800"
            ],
            "answer": 0,
            "explanation": "80,000,000 Hz / 1000 Hz = 80,000 次 ticks。故載入暫存器 reload 值應設為 80000（實際寫入載錄暫存器值為 80000-1 = 79999）。"
      },
      {
            "question": "在編寫 CMSIS 軟體時，`volatile` 開關關鍵字在暫存器定義中的主要作用為何？",
            "options": [
                  "優化編譯出的彙編，使其佔用更小內存",
                  "通告編譯器該暫存器數值可能會由硬體隨時改變，不要對其進行任何優化/快取暫存，必須每次都從實體位址重新載入",
                  "宣告該變數屬於 heap 空間",
                  "將暫存器轉移至 TCM 中"
            ],
            "answer": 1,
            "explanation": "周邊狀態暫存器由底層硬體硬體隨時覆寫（如 GPIO_IN）。若無 volatile，C 編譯器會優化為只讀取 CPU register 暫存，造成讀取不到外設最新電平。"
      },
      {
            "question": "當軟體發生除零錯誤或者存取非法對齊地址引發 UsageFault，且該 Fault 沒有被 NVIC 啟用使能時，處理器會？",
            "options": [
                  "自動略過該代碼",
                  "向上升級（Escalation）觸發 HardFault 異常",
                  "直接關閉核心電源域",
                  "喚醒 WIC"
            ],
            "answer": 1,
            "explanation": "當特定 Fault (UsageFault, MemManageFault, BusFault) 未啟用、或在 Fault 內又發生 Fault 時，處理器會將其 Escalated 為最嚴重的 HardFault。"
      },
      {
            "question": "CMSIS 架構中，與晶片製造商關聯最深、負責暴露特定周邊暫存器的文件是？",
            "options": [
                  "core_cm3.h",
                  "device.h (如 stm32f10x.h, 記載晶片特有周邊地址與結構體定義)",
                  "startup_device.s",
                  "system_device.c"
            ],
            "answer": 1,
            "explanation": "core_cm3.h 是 ARM 核心標準定義；而 device.h 是晶片廠商（如 ST、NXP）根據其擁有的周邊實體暫存器基底寫成的，是晶片級開發的起點。"
      }
]
  }
];
