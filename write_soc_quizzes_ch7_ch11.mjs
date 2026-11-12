import fs from 'fs';

const quizzes = {
    "soc-ch7": [
        {
            question: "在 AHB 匯流排基礎架構設計中，如果解碼器檢測到非法位址，它會拉高哪一個 Slaves 的選擇訊號？",
            options: ["SRAM Slave Selector", "ROM Slave Selector", "Default Slave Selector", "APB Bridge Selector"],
            answer: 2,
            explanation: "解碼器檢測到未映射的位址區間時，會拉高 HSEL_DefSlave，將請求轉發至 Default Slave 進行錯誤處理。"
        },
        {
            question: "在 AHB Slave Mux (從屬選擇多路器) 設計中，為甚麼在多路復用 HRDATA 時需要使用暫存器將 HSEL 信號延遲一拍？",
            options: ["為了降低系統 clock 頻率", "因為 AHB 具有管線化特徵，位址階段與數據階段相差一個時脈週期", "為了防止亞穩態", "預設的 APB 協定必須要求延遲"],
            answer: 1,
            explanation: "AHB 的位址階段（HSEL 定址）和資料讀取階段（HRDATA 返回）存在一拍的 Pipeline 差。Mux 必須記錄上一拍選中的 Slave ID，才能在當前資料拍正對應讀取管道。"
        },
        {
            question: "當 AHB Default Slave 響應主控端非法存取時，會發射 2-cycle ERROR。這兩個週期的 HREADYOUT 與 HRESP 信號順序分別為何？",
            options: ["第一週期：HREADYOUT=0, HRESP=0；第二週期：HREADYOUT=1, HRESP=1", "第一週期：HREADYOUT=0, HRESP=1；第二週期：HREADYOUT=1, HRESP=1", "第一週期：HREADYOUT=1, HRESP=1；第二週期：HREADYOUT=1, HRESP=0", "第一週期：HREADYOUT=1, HRESP=0；第二週期：HREADYOUT=0, HRESP=1"],
            answer: 1,
            explanation: "2-cycle ERROR：第一拍拉低 HREADYOUT=0 使 Master 延長等待，並表明有 ERROR (HRESP=1)；第二拍拉高 HREADYOUT=1 完成釋放，同時維持 HRESP=1。"
        },
        {
            question: "在 AHB-to-APB Bridge 中，如果 APB 外圍暫存器需要 3 個 APB 時脈週期才能返回資料，Bridge 該如何通知 AHB Master？",
            options: ["立刻返回 ERROR 響應", "在 APB 傳輸未完成期間，將 AHB 端的 HREADYOUT 信號拉低 (0)，強迫 CPU 等待", "直接拉高 HRESP", "暫停系統 PCLK 控制"],
            answer: 1,
            explanation: "當 APB 端的 PREADY 為 0（代表外設未就緒）時，Bridge 在 AHB 端會保持 HREADYOUT 為低，以將 CPU 發起的匯流排交易掛起，直到 APB 讀取完成。"
        },
        {
            question: "如下 AHB Default Slave 的控制邏輯中，RespState 暫存器復位後的初始編碼是？",
            options: ["2'b00 (ERROR)", "2'b01 (IDLE/READY)", "2'b10 (CYCLE1)", "2'b11 (CYCLE2)"],
            answer: 1,
            explanation: "復位後預設處於空閒就緒狀態（2'b01），此時 HREADYOUT=1，允許 Master 發起新的傳輸。"
        },
        {
            question: "在 AHB 系統中，解碼器輸出的複數個 HSELx 信號，是由哪一個單元進行邏輯產生？",
            options: ["Processor Core", "中央位址譯碼器 (Central Address Decoder)", "DMA 主控器", "APB 橋接器"],
            answer: 1,
            explanation: "中央解碼器根據 Master 輸出的 HADDR 進行解碼，並輸出給各 Slave 對應的 HSELx。"
        },
        {
            question: "若設計中需要 1 個 Master 與 3 個 Slave，則 AHB 系統中總共需要多少個 Slave Mux 通道？",
            options: ["1個與 3 組輸入的 Mux 通道 (複用這 3 個 Slave 的回應信號)", "3個 Mux 通道", "9個 Mux 通道", "不需要 Mux，可用 OR 閘直接相加"],
            answer: 0,
            explanation: "只需要一組多路選擇器選通器（Slave Mux），輸入端接三個 Slaves，根據 decode 保留位選出對應的 HRDATA, HREADYOUT, HRESP 返回給唯一 Master。"
        },
        {
            question: "在 AHB 協議中，HRESP 信號為 0 (OKAY) 和 1 (ERROR) 分別代表什麼意思？",
            options: ["0 代表傳輸失敗，1 代表傳輸成功", "0 代表傳輸成功/正常，1 代表傳輸錯誤", "0 代表寫入，1 代表讀取", "0 代表連續傳輸，1 代表非連續傳輸"],
            answer: 1,
            explanation: "HRESP = 1'b0 (OKAY) 表示傳輸正常完成；HRESP = 1'b1 (ERROR) 表示傳輸失敗或發生位址越界等異常。"
        },
        {
            question: "AHB-to-APB 匯流排橋接器在進行寫傳輸時，如果 HCLK 與 PCLK 的頻率不同（例如 HCLK=100MHz, PCLK=50MHz），橋接器內部通常需要處理什麼？",
            options: ["非同步時脈域跨越與狀態握手控制", "直接忽略時脈差異", "使 CPU 頻率降到 50MHz", "將 APB 數據直接丟棄"],
            answer: 0,
            explanation: "如果兩總線為同步分頻關係，可以利用時脈邊沿使能訊號；如果是不同源異步時脈，則橋接器內部需實作動態 FIFO 或異步握手電路以確保安全跨時脈傳輸。"
        },
        {
            question: "在 APB 匯流排中，所有的傳輸至少需要花費多少個時脈週期？",
            options: ["1 個時脈週期", "2 個時脈週期 (Setup 拍與 Access 拍)", "3 個時脈週期", "不固定，取決於地址大小"],
            answer: 1,
            explanation: "APB 匯流排傳輸無管線，每次讀寫操作均需至少經歷 Setup Phase (1 拍) 和 Access Phase (1 拍)，合計至少 2 個 PCLK 週期。"
        }
    ],
    "soc-ch8": [
        {
            question: "周邊開發中的 'Programmer's Model' (程式設計模型) 具體指什麼？",
            options: ["軟體代碼的封裝格式", "外設向軟體工程師暴露的暫存器控制接口、偏移地址與二進位定義", "FPGA 燒錄的 Bitstream 內容", "除錯主機 J-Link 的說明手冊"],
            answer: 1,
            explanation: "Programmer's Model 定義了硬體如何映射至軟體視角（定址基底、暫存器位元組偏移、讀寫讀寫寫標誌等），方便驅動開發。"
        },
        {
            question: "自製 APB GPIO 週邊中，若要寫入實體輸出引腳的訊號，軟體通常寫入哪個暫存器？",
            options: ["DATAIN", "DATAOUT", "OUTENABLE", "INTSTATUS"],
            answer: 1,
            explanation: "DATAOUT 用於儲存要輸出的邏輯資料；OUTENABLE 則用來配置引腳是輸入還是輸出輸出輸出；DATAIN 則反映輸入引腳的外部狀態。"
        },
        {
            question: "在定時器 APB Timer 設計中，若 VALUE 計數下減到 0，且 CTRL[3] = 1 (中斷使能)，系統會發起什麼動作？",
            options: ["自動將系統重設", "自 RELOAD 暫存器加載計加載值，同時拉高中斷輸出信號 TIMERINT", "將 VALUE 計數向上累加", "自動關閉 Timer 的 Enable 位"],
            answer: 1,
            explanation: "Timer 減到 0 後自動重載（Reload），並在計數溢出且中斷被使能時，觸發中斷標誌。該標誌輸出到 SoC 中斷線即為 TIMERINT。"
        },
        {
            question: "在週邊暫存器的設計中，什麽是 W1C (Write 1 to Clear)？",
            options: ["寫入 1 代表設定為最高搶占中斷優先編譯級", "向該 Flag 暫存器位寫入 1 即可將其硬體清除為 0，寫入 0 則不影響", "只能寫入 1 次資料", "寫入 1 代表清除所有 SRAM 記憶體"],
            answer: 1,
            explanation: "W1C 常用於中斷狀態/旗標暫存器維護。軟體寫入 1 時，硬體檢測到寫入資料 bit 為 1，會自動清除內部 Pending 狀態為 0，不需要寫 0 來清，避免了 R-M-W 衝突。"
        },
        {
            question: "在定時器軟硬體測試中，若 PCLK = 50MHz，程式將 RELOAD 暫存器設定為 49999，則定時器中斷間隔時間為何？",
            options: ["0.1 毫秒", "0.5 毫秒", "1.0 毫秒 (1ms)", "10.0 毫秒"],
            answer: 2,
            explanation: "時脈為 50MHz 代表每秒有 50,000,000 個 ticks。定時器計數次數為 49999+1 = 50000 次，50000 / 50,000,000 = 0.001 秒 = 1ms。"
        },
        {
            question: "在 APB GPIO 設計中，如果 OUTENABLE 暫存器某位元為 0，此時軟體讀取 DATAIN 位，會讀取到？",
            options: ["必為 0", "對應實體 IO 腳位由外部硬體電路驅動的真實邏輯電平", "上一次 DATAOUT 暫存器的寫入值", "隨機雜訊"],
            answer: 1,
            explanation: "當 OUTENABLE=0，代表該 IO 被設定為「輸入模式」，此時外部三態緩衝關閉關閉，讀取 DATAIN 得到的是實體管腳輸入的外部邏輯訊號。"
        },
        {
            question: "在 APB Timer 的電路中，通常會設計 PREADY 恒為 1。這意味著該週邊的讀寫傳輸性能如何？",
            options: ["每次讀寫都需要插入等待週期", "每次讀寫皆可在 SETUP 開始後的下一個時脈週期（ACCESS）無延遲完成", "傳輸性能非常差", "只能進行寫入，不能讀取"],
            answer: 1,
            explanation: "PREADY = 1 表明 Slave 隨時就緒，無須藉由拉低 PREADY 插入等待週期，傳輸效率最高。"
        },
        {
            question: "UART 數據傳輸中，一個標準的 UART 數據幀通常不包含下列哪個部分？",
            options: ["1 bit 起始位 (Start Bit, 通常為低電平)", "5 到 8 bit 資料位 (Data Bits)", "APB 片選訊號", "1 或 2 bit 停止位 (Stop Bit, 通常為高電平)"],
            answer: 2,
            explanation: "UART 是非同步序列通訊協議，其實體線上只有 TX/RX，沒有 APB 片選信號。APB 傳輸片選只存在於 SoC 內部的匯流排側。"
        },
        {
            question: "一個 16 倍超取樣 (x16 Oversampling) 數位 UART 接收端，其主要優勢為何？",
            options: ["能將鮑率提升 16 倍", "可對輸入的 RXD 信號在一個 Bit 寬度內採樣 16 次，通過多數決濾波避開雜訊，精準定位起始位元中段", "降低硬體邏輯門面積", "不需要時脈源即可接收"],
            answer: 1,
            explanation: "超取樣（Oversampling）利用高頻時脈去採樣低速 RX，檢測到 Rx 邊沿後在中段（如第8次採樣）提取資料，能有效抑制雜訊並容忍發收時脈誤差。"
        },
        {
            question: "下列關於外設暫存器位元組對齊（Byte Addressable）的敘述，何者正確？",
            options: ["所有的 APB 暫存器都必須指配在奇數位址", "暫存器基底位址與偏移量通常指配在以 4 的倍數對齊的 Word 位址上", "暫存器不能進行 Byte 讀寫", "外設暫存器不佔用定址空間"],
            answer: 1,
            explanation: "為了配合 32 位元 CPU 存取架構，週邊暫存器偏移多以 4 bytes (1 word) 遞增，以確保存取效能並防止對齊 Fault。"
        }
    ],
    "soc-ch9": [
        {
            question: "SoC 系統整合時，完成 AHB ROM、SRAM 和 APB Bridge 的實例化後，重置訊號釋放後 CPU 的第一個動作是？",
            options: ["發送中斷響應", "從代碼區的最底端（通常是位址 0x0000_0000）讀取初始 Stack 指標與跳轉位址", "立即將 DMA 控制器停機", "向 GPIO 輸出閃燈"],
            answer: 1,
            explanation: "Cortex-M 在 HRESETn 被釋放後的首個時脈上升沿，會從硬體預載的 0x0 地址讀出堆疊指標 (SP)，並從 0x4 載入執行代碼位址跳入跳入運行。"
        },
        {
            question: "在一組可靠的 SoC 時脈重置控制電路中，「異步重置、同步釋放」的同步器 (Reset Synchronizer) 目的為何？",
            options: ["使重置訊號立即生效，但釋放重置時會與系統 Clock 上升沿同步，避免邊緣亞穩態衝突", "為了將時脈鎖定在 100MHz", "將小端序轉換為大端序", "關閉所有無效的電源島"],
            answer: 0,
            explanation: "同步釋放可確保當 Reset 撤銷時，所有 Register 都在同一個 Clock edge 完成釋放，防止 Hold-time 違規引發晶片不穩定。"
        },
        {
            question: "軟硬體聯調模擬（Co-simulation）時，如何讓 Verilog 仿真軟體得知 Flash/ROM 當中究竟該執行甚麼應用程式代碼？",
            options: ["在 Verilog 程式中手動撰寫 CPU 內部指令", "使用 $readmemh 將軟體 C 語言編譯生成的十六進位 .hex/.bin 文本寫入 ROM 仿真陣列", "直接用 debug 引腳燒錄 FPGA", "將 CPU 資料線直接連接到電阻"],
            answer: 1,
            explanation: "$readmemh / $readmemb 是 Verilog 系統任務，能在模擬開始時將軟體二進位編譯結果字節數據直接加載至記憶體模型中，直接執行真實韌體。"
        },
        {
            question: "在 SoC Interconnect 矩陣中，若 CPUCLK (CPU主時脈) 為 100MHz，HCLK = 100MHz，PCLK = 25MHz，則 APB 週邊的時脈比例與數據吞吐為何？",
            options: ["APB 每個時脈週期和 CPU 同頻進行", "APB 週邊時脈為 CPU 頻率的四分之一，為低頻寬存取速率", "APB 的資料傳輸比 AHB 快四倍", "系統會因為時脈不一致而損壞"],
            answer: 1,
            explanation: "APB 運轉在 PCLK (25MHz)，是 HCLK (100MHz) 的 1/4，適合慢速周邊，傳輸開銷小但頻寬較低。"
        },
        {
            question: "下列何者非片上系統 (SoC) 當中常見的復位源 (Reset Sources)？",
            options: ["Power-On Reset (POR)", "看門狗定時器計數溢出引起的超時復位", "DPI (Direct Peripheral Interface) 仿真復位", "軟體寫入 SYSRESETREQ 暫存器觸發的熱重置"],
            answer: 2,
            explanation: "DPI (Direct Programming Interface) 是 SV 用於與 C 語言關聯的驗證接口，並不屬於實體 SoC 晶片的硬體重置源。"
        },
        {
            question: "為什麽在頂層整合時，常需要將 JTAG 的五根線路與 SWD 的兩根線路結合？",
            options: ["為了能夠同時和兩個 debuggers 通訊", "透過 SWJ-DP 動態切換協議，重用 IO 腳位，降低晶片封裝管腳總數", "增大 debug 的資料頻寬", "避免靜態漏電流"],
            answer: 1,
            explanation: "結合 JTAG 與 SWD 腳位能實作 pin multiplexing，提供最大的偵錯設備兼容性，且不需額外佔用昂貴的實體 Pin 腳。"
        },
        {
            question: "在全晶片仿真 Testbench 中，為了準確檢查時序，我們常配置 `$timeformat` 系統任務，其引數中的 `-9` 物理代號為何？",
            options: ["微秒 (us)", "奈秒 (ns)", "皮秒 (ps)", "毫秒 (ms)"],
            answer: 1,
            explanation: "$timeformat 的第一個參數為時間單位，-9 代表以 10^-9 秒（也就是 ns，奈秒）作為時序印出的測量基底。"
        },
        {
            question: "在 System Wrapper 整合中，如果 Master 的 HTRANS 在 Reset 釋放時沒有處於 IDLE，會導致？",
            options: ["System 記憶體自動清空", "匯流排在復位釋放瞬間發射未知垃圾讀寫交易，可能引發解碼混亂與死機", "CPU 自動進入特權模式", "DMA 觸發中斷"],
            answer: 1,
            explanation: "重置時必須強制 Master 輸出 HTRANS 為 00（IDLE）。如果在解脫復位時輸出垃圾值，會誤啟動解碼器，引發系統衝突。"
        },
        {
            question: "在測試平台中，通常如何仿真一個外圍 Sensor (如 SPI Flash) 向晶片發送資料？",
            options: ["直接修改 CPU 暫存器變量", "在 Testbench 中編寫仿真外設 Behavioral Model，並將其連接至晶片 IO 引腳，按照 SPI protocol 時序打入串聯波形", "向 ROM 載入 C 代碼", "提高 PLL 的鎖定電壓"],
            answer: 1,
            explanation: "外部行為模型 (Behavioral Model) 能模擬實體外設的物理響應，透過模擬引腳進行 Protocol 串行數據交互交互，用以驗證 SoC controller 驅動及硬體運作。"
        },
        {
            question: "SoC 整合中，SystemInit 函數通常由何者負責調用执行？",
            options: ["操作系統內核 OS Kernel", "匯流排仲裁器", "Assembler 啟動組件代碼 (Startup Code) 在進入 main() 前執行調用", "除錯主機"],
            answer: 2,
            explanation: "引導啟動代碼（Startup Code）會最先啟動，調用 SystemInit 快速配置 PLL 與記憶體介面，然後才跳轉進入使用者 C 代碼 main 進入點。"
        }
    ],
    "soc-ch10": [
        {
            question: "DMA (直接記憶體存取) 控制器作為第三方 Master 插入匯流排矩陣，其最核心的作用是？",
            options: ["用來加速 C 語言程序的編譯速度", "免除 CPU 介入，在記憶體與外設或記憶體之間實現高速、自治的資料搬移，節省 CPU 負擔", "降低 PLL 的功耗", "直接把 APB 轉化為 AXI"],
            answer: 1,
            explanation: "DMA 主要實現硬件自主搬移。CPU 只需指配起止位址與資料長度，隨後即可去做其他運算，搬完後以中斷回報，大幅釋放處理器算力。"
        },
        {
            question: "在晶片層整合 ADC (模數轉換器) 時，數位包裝器 (Digital Wrapper) 中的 FIFO 緩衝區主要作用是？",
            options: ["提高 ADC 的採樣電壓", "緩衝連續採樣出的數位信號，避免 CPU 或 DMA 因來不及讀取而丟失採樣數據", "用來處理 bit-band 存取", "降低系統 Reset 時的雜訊"],
            answer: 1,
            explanation: "ADC 的數據產出通常是定時的。Wrapper 內置 FIFO 能克服系統總線等待延遲，暫存轉換後的資料塊以待 CPU/DMA 批次載入。"
        },
        {
            question: "Beetle IoT 參考晶片案例中，為了達到低功耗應用，內部模組是如何進行分配佈局的？",
            options: ["所有周邊皆採用高主時脈執行的 AXI 匯流排連線", "將系統劃分為多個獨立的 Power Domain (電壓島)，不工作的電磁射頻與暫停的核心可被斷電關閉，僅保留常開域 WIC/RTC 運轉", "直接將處理器全部拿掉", "使用 1024KB 的超大暫存器"],
            answer: 1,
            explanation: "Beetle 展現了先進電力島設計，將射頻 TRx、處理器核心、周邊與 Always-on Domain 物理隔離，並根據狀況動態調整開關，是典型的低能量設計規格。"
        },
        {
            question: "在 Fixed-Priority (固定優先級) 的 DMA 通道仲裁器中，若 req_ch0 優先級高於 req_ch1，當兩者同時發起請求時，仲裁器會？",
            options: ["通道 0 和通道 1 輪流發送 (Round Robin)", "優先選通通道 0 的寫應答 ack_ch0，並將 active_ch 指向通道 0 的 ID", "直接拒絕兩個請求", "將 CPU 當前代碼重設"],
            answer: 1,
            explanation: "固定優先級仲裁器直接比對高優先級位元。若 req_ch0 存在，無論 req_ch1 是否拉高，都優先答覆通道 0 執行。"
        },
        {
            question: "在 32-bit 位址匯流排下，SoC 的 DMA 通常以 Bus Master 身份發射傳輸交易。這意味著它的匯流排腳位會和處理器核心的什麼引腳共享？",
            options: ["僅共享 Reset 和時脈", "共享系統 address (HADDR)、Data (HWDATA/HRDATA) 以及控制匯流排 (HTRANS/HWRITE/HSIZE)", "共享 GPIO 的實體輸出腳", "共享 ETM 除錯追蹤引腳"],
            answer: 1,
            explanation: "DMA 作為總線主控（Master），必須和 CPU 一樣連到 Interconnect，直接發射 HADDR 與控制訊號，故其總線路徑與內核完全複用。"
        },
        {
            question: "下列哪一個應用場景最適合使用 DMA 的 'Memory-to-Memory' (記憶體到記憶體) 傳輸模式？",
            options: ["UART 接收數據並顯示在 LCD", "雙緩衝區大數據塊複製 (如 memmove / memcpy 硬體加速)", "ADC 動態轉換中斷觸發", "外部除錯指令抓取"],
            answer: 1,
            explanation: "Mem-to-Mem 模式允許 DMA 使用最高匯流排速度將一段 SRAM 資料搬運到另一段 SRAM (如 framebuffer 刷新)，不需等待外設 Ready 握手。"
        },
        {
            question: "什麽是 DMA 傳輸的 'Burst Size' (突發傳輸大小)？",
            options: ["DMA 晶片的物理封裝大小", "DMA 在單次獲得總線使用權後，所能連續不中斷發射的最大數據項數目 (如 4-beat / 8-beat)", "定時器內部的 reload 值", "ADC 採樣頻率"],
            answer: 1,
            explanation: "Burst 傳輸允許 DMA 發起連續地址的多拍存取，而無須在每讀寫一個 Word 都重新申請總線，大幅提升記憶體存取頻寬與總線效率。"
        },
        {
            question: "SoC 內的類比 ADC (Analog-to-Digital Converter) 在將類比電壓轉化為數位 binary 後，以何種訊號通知 CPU 讀取？",
            options: ["UART 接收旗標", "EOC / EOS 中斷 (End of Conversion / End of Sequence)", "DMA 優先權中斷", "Bit-band 別名"],
            answer: 1,
            explanation: "轉換完畢後，ADC 控制器通常拉高 Conversion Complete 中斷線，通告 NVIC 該資料已解出，提醒 CPU 取值。"
        },
        {
            question: "Beetle 晶片中採用的低功耗藍牙 (BLE) 子系統，通常以何種匯流排掛載至微處理器？",
            options: ["高速 AXI 匯流排矩陣", "低速且低功耗的 APB 匯流排", "直連 CPU 的 ITCM 管道", "JTAG 偵錯引腳"],
            answer: 1,
            explanation: "藍牙 TRx 控制與寄存器配置頻寬低，因此以 APB 進行控制暫存器映射，在確保通訊的同時把總線電路與漏電控制在最低。"
        },
        {
            question: "若 DMA 的 Active Channel 暫存器輸出為 2'b10，說明此時晶片內正在執行哪一個傳輸通道的交易？",
            options: ["通道 0", "通道 1 (因為其編碼對應 2'b10 通道標識)", "無任何通道在工作", "通道 2"],
            answer: 1,
            explanation: "根據編碼邏輯，2'b01 代表通道 0 工作，2'b10 則對應通道 1 整體致能狀態。"
        }
    ],
    "soc-ch11": [
        {
            question: "CMSIS-CORE 標準軟體驅動中，利用 C 語言的 struct 定義週邊暫存器結構，是利用了何種硬體映射特徵？",
            options: ["成員變量的宣告順序與內存字長偏移，剛好與外設物理暫存器的偏移位址完全重合", "C 語言變量能自動降低晶片功耗", "暫存器不能使用 struct 結構體", "為了引入類別 OOP 繼承"],
            answer: 0,
            explanation: "C Struct 成員儲存是連續的。將 C Struct 指針強制指向周邊 Base Addr，即可透過 `GPIO->DATAOUT` 巧妙對應到 `Base + 4` 的實體寫入暫存器。"
        },
        {
            question: "VTOR (Vector Table Offset Register, 向量表偏移暫存器) 在軟體開發當中的最典型用途為何？",
            options: ["提高 ROM 容量", "將中斷向量表重新定向，使得中斷發生時 CPU 能跳轉跳轉到 SRAM 或自定義 Flash 分區的 ISR 代碼區", "用來偵測 JTAG 是否拔除", "重置所有的 stack 指標"],
            answer: 1,
            explanation: "VTOR 設定中斷表基底位址。修改它可使 CPU 在觸發 Exception 時，轉而查詢新的向量表（如 Bootloader 跳入 APP 時），非常靈活。"
        },
        {
            question: "在 NVIC (巢狀向量中斷控制器) 中，若中斷 A 的搶占優先級 (Preemption Priority) 為 1，子優先級為 2；中斷 B 的搶占優先級為 2，子優先級為 1。下列敘述何者正確？",
            options: ["中斷 B 可以打斷中斷 A 的 execution", "中斷 A 的搶佔優先級高（數字低），因此中斷 A 正在執行時若中斷 B 觸發，B 將會被懸掛直到 A 執行完畢；若 B 先執行，A 可直接打斷 B", "兩個中斷會同時並行運行", " NVIC 會發起 HardFault"],
            answer: 1,
            explanation: "搶佔級別數值越小，優先權越高，且只有搶佔級別高的中斷能實現打斷與嵌套。子優先權僅用於兩中斷同時等待時的先後排程。"
        },
        {
            question: "Cortex-M 處理器內建的 'SysTick' 定時器是何種結構？",
            options: ["必須外接 CPU 晶片的引腳才會動作的數位電路", "一個內建於 Cortex-M 內核內部的 24-bit 下減計數定時器，為操作系統 RTOS 提供標準的心跳滴答 (Tick)", "一個 32 位元的 UART 計步器", "專為 DMA 加速設計的 FIFO 緩衝區"],
            answer: 1,
            explanation: "SysTick 是 ARM 生態系的利器。在各家 Cortex-M 晶片中都統一實作了此 24-bit 滴答時鐘，使得 RTOS 核心系統的移植變得極為標準標準與簡單。"
        },
        {
            question: "當編寫 C 語言中斷服務常式時，必須確保名稱與向量表名稱完全一致。在 ARM 預設 GCC 編譯鏈中，Systick 中斷常式名為？",
            options: ["systick_isr()", "SysTick_Handler(void)", "sys_tick_fun()", "NVIC_SysTick_Handler()"],
            answer: 1,
            explanation: "CMSIS startup 啟動代碼中中斷函數指標名稱預設使用 `SysTick_Handler` 弱定義，C 語言中定義此名可實作覆寫聯結。"
        },
        {
            question: "在 NVIC 中，如果軟體想要主動觸發某個外部中斷，除了模擬實體引腳變化，還能？",
            options: ["寫入 NVIC 內的懸掛暫存器 (NVIC_ISPR 或軟體中斷觸發暫存器 STIR)", "拉低 HRESETn", "重新編譯 C 軟體", "調用 system_shutdown"],
            answer: 0,
            explanation: "NVIC 提供了可編程懸掛控制。向 NVIC_ISPR 寫入對應中斷 ID offset，即可軟體置位中斷掛起，實現軟體觸發中斷（Software Interrupt）。"
        },
        {
            question: "若 SysTick 暫存器 SystemCoreClock 為 80MHz，想要設定 1KHz 的心跳滴答，則寫入 SysTick_Config 的 reload 參數值應該是多少？",
            options: ["80000", "800000", "8000", "800"],
            answer: 0,
            explanation: "80,000,000 Hz / 1000 Hz = 80,000 次 ticks。故載入暫存器 reload 值應設為 80000（實際寫入載錄暫存器值為 80000-1 = 79999）。"
        },
        {
            question: "在編寫 CMSIS 軟體時，`volatile` 開關關鍵字在暫存器定義中的主要作用為何？",
            options: ["優化編譯出的彙編，使其佔用更小內存", "通告編譯器該暫存器數值可能會由硬體隨時改變，不要對其進行任何優化/快取暫存，必須每次都從實體位址重新載入", "宣告該變數屬於 heap 空間", "將暫存器轉移至 TCM 中"],
            answer: 1,
            explanation: "周邊狀態暫存器由底層硬體硬體隨時覆寫（如 GPIO_IN）。若無 volatile，C 編譯器會優化為只讀取 CPU register 暫存，造成讀取不到外設最新電平。"
        },
        {
            question: "當軟體發生除零錯誤或者存取非法對齊地址引發 UsageFault，且該 Fault 沒有被 NVIC 啟用使能時，處理器會？",
            options: ["自動略過該代碼", "向上升級（Escalation）觸發 HardFault 異常", "直接關閉核心電源域", "喚醒 WIC"],
            answer: 1,
            explanation: "當特定 Fault (UsageFault, MemManageFault, BusFault) 未啟用、或在 Fault 內又發生 Fault 時，處理器會將其 Escalated 為最嚴重的 HardFault。"
        },
        {
            question: "CMSIS 架構中，與晶片製造商關聯最深、負責暴露特定周邊暫存器的文件是？",
            options: ["core_cm3.h", "device.h (如 stm32f10x.h, 記載晶片特有周邊地址與結構體定義)", "startup_device.s", "system_device.c"],
            answer: 1,
            explanation: "core_cm3.h 是 ARM 核心標準定義；而 device.h 是晶片廠商（如 ST、NXP）根據其擁有的周邊實體暫存器基底寫成的，是晶片級開發的起點。"
        }
    ]
};

fs.writeFileSync('c:\\Users\\卓\\Desktop\\antigravity\\SoC\\soc_quizzes_ch7_ch11.json', JSON.stringify(quizzes, null, 2));
console.log("Written Ch7-Ch11 quizzes to JSON successfully.");
