// Personal experience supplied by Matthew; metrics are self-reported, not audited.
export const workCases = [
    {
        id: 'spi', title: 'SPI / QSPI：從 IP ownership 到 coverage closure', area: 'IP DV',
        tags: ['UVM', 'SystemVerilog', 'SPI', 'QSPI', 'Formal', 'Coverage'],
        context: '擔任 SPI/QSPI 驗證 owner，建立測試計畫、SystemVerilog API 與測試案例，涵蓋 dual/quad、全雙工／半雙工、flash model 與 clock stretch。',
        actions: ['以 UVM sequence 驅動交易，透過 monitor 與 checker 比對協議及資料。', '使用 VC Formal / JasperGold 與 SVA 驗證 APB-to-SPI bridge。', '依 functional / code coverage 缺口補測並追蹤 RTL、VIP 問題。'],
        result: '已分享成果：30+ tests；負責範圍內 functional 與 code coverage 達 100%。',
        lesson: 'Coverage closure 要先對照 test plan，再判斷缺口是未測情境、不可達邏輯或 coverage model 問題；100% 不等於沒有 bug。',
        question: '如何證明 SPI 的 100% coverage 有涵蓋需求，而非只讓程式碼被執行？',
        answer: '先說明 feature-to-test-to-coverpoint 的對應，再舉一個缺口如何被定位與補測；若有 exclusion，需說明依據。',
        next: '整理一個代表性 bug 的 stimulus、預期結果、實際波形與修正後 regression 證據。',
        related: ['SPI', 'coverage', 'assertion']
    },
    {
        id: 'ucie', title: 'UCIe：PHY 訓練與 Adapter 狀態驗證', area: 'High-speed DV',
        tags: ['UCIe', 'PHY', 'PCS', 'Link training', 'Recovery'],
        context: '參與 UCIe PHY/PCS 驗證，涵蓋 link bring-up、lane repair/retraining、TX/RX per-bit de-skew、timing alignment、redundancy 與資料完整性。',
        actions: ['驗證多 slice training，觀察各 slice 完成條件及資料路徑。', '進行 Vref/Vsel/phase 的 2D eye scan 與 margining。', '涵蓋 Adapter 的 LinkReset、LinkError 與 Disable 情境。'],
        result: '已分享成果：100+ tests；曾確認 8 slices training complete。',
        lesson: 'Training complete 是狀態檢查，還需要資料完整性與錯誤恢復驗證；正常 bring-up 和 recovery 應分別建立檢查點。',
        question: 'Link training 完成後，如何繼續證明 link 可正常傳輸？',
        answer: '分開描述 training 狀態、lane 對齊、傳輸資料比對，以及 LinkError / LinkReset 後的恢復條件。',
        next: '補上各 recovery scenario 的預期狀態轉移與 pass/fail 證據。',
        related: ['coverage', 'scoreboard']
    },
    {
        id: 'pvt', title: 'PVT / SCU：Alarm、IRQ 與電源狀態', area: 'SoC DV',
        tags: ['PVT', 'SCU', 'Interrupt', 'UPF', 'Power sequence'],
        context: '建立 PVT / SCU 測試，驗證 Alarm A/B threshold、hysteresis、IRQ，以及 temperature sensor 所在 power domain 的啟動條件。',
        actions: ['檢查 Alarm A falling 與 Alarm B rising 的設定及門檻跨越行為。', '比對 sensor data、alarm status 與 IRQ，追查 power-off 情境下的不一致。', '與設計端釐清 power on、pwrstate deassert、PVT-C 設定與 clk_slv enable 的順序。'],
        result: '已分享成果：PVT / SCU 50+ tests。電源開啟控制路徑與完成指示仍屬待釐清事項。',
        lesson: 'Threshold 與 hysteresis 要驗證進入、退出與邊界；電源尚未就緒時，不能直接套用正常工作狀態的 IRQ 預期。',
        question: 'Sensor 在預設關閉的 power domain，測試前要確認什麼？',
        answer: '確認供電控制方式、power-ready 或等待條件、reset/pwrstate 釋放、clock enable，最後才配置監測與 alarm。',
        next: '取得 power-on 完成條件後，補齊 power-off → power-on 的完整回歸情境。',
        related: ['power', 'interrupt', '低功耗']
    },
    {
        id: 'clock', title: 'PLL / Clock / Reset：時序 checker 與 WDT 重置', area: 'SoC DV',
        tags: ['PLL', 'Clock', 'Reset', 'SVA', 'WDT'],
        context: '建立 boot/reset sequence、PLL lock window、frequency 與 duty-cycle 檢查，涵蓋 never-lock、lost-lock、restart 及 WDT 重複 reset。',
        actions: ['逐段比對 reset release 與 PLL ready 的時間關係，釐清規格與實測差異。', '追查 lost-lock IRQ status 與 PLL sticky status 不一致的問題。', '觀察 WDT 再次 reset 時，下游 reset 可能尚未釋放；區分 checker 控制與 DUT 行為。'],
        result: '已建立時序檢查並提出設計釐清。最新分享的暫行標準為 frequency ±0.3%、duty cycle ±0.5%，待供應商更新；不同專案需各自確認。',
        lesson: 'Checker 必須定義 reset 中止、重新啟動及取樣時機；disable checker 只改變檢查行為，不會改變硬體 reset。Duty tolerance 也須註明是百分點或相對誤差。',
        question: '若新的 reset 在 PLL lock 等待時間內到來，原本的檢查應如何處理？',
        answer: '先依規格決定中止或重啟舊檢查，避免把合法中斷當失敗；同時保留 reset assertion 與恢復後時序的驗證。',
        next: '確認 wdt_sys_rst 下 checker 的停用與恢復條件，以及各 clock 的容差定義。',
        related: ['assertion', 'clock', 'reset', 'SVA']
    },
    {
        id: 'frequency', title: 'Frequency Monitor：公式、設定與 checker 分工', area: 'SoC DV',
        tags: ['Frequency Monitor', 'UVM', 'AXI BFM', 'Register', 'Checker'],
        context: '建立 frequency monitor 的 configuration、sequence 與 checker，使用既有 reg_wr/reg_rd 經 AXI BFM 設定寄存器。',
        actions: ['以 target frequency、sample period、prescaler 與 reference clock 推導 expected count。', '將 fm_checker 設為 uvm_object，對應使用 uvm_object_utils 與 object constructor。', '修正 $sformatf 參數不足等編譯問題，保持 sequence 與 monitor/checker 的職責清楚。'],
        result: '已分享設定與 checker 實作及除錯經驗；尚未提供整體 coverage closure 或量化效益。',
        lesson: '使用中的公式：expected_count = f_target_mhz × (sample_period + 1) / (p_div × fref_mhz)。例如 665.6 MHz、0xFF、/1、16.384 MHz 得到 10400。實際邊界與容差仍須對照該 IP 規格。',
        question: '為什麼要經 reg_wr/reg_rd 設定，而非直接 drive DUT port？',
        answer: '透過真實 bus/register 路徑驗證可見行為，並重用環境既有存取 API；checker 負責預期值與讀回結果比較。',
        next: '補齊 prescaler、sample period 邊界與 count tolerance 的規格對照。',
        related: ['register', 'RAL', 'object']
    },
    {
        id: 'bringup', title: 'SPI Host Boot / DAC：把波形現象轉成設計問題', area: 'Debug 協作',
        tags: ['SPI', 'Boot', 'DAC', 'Clock gating', 'Designer clarification'],
        context: '面對 SPI host boot readiness 與 DAC clock 被 gate 的現象，從 RTL 條件與可見 status 推導需要釐清的控制流程。',
        actions: ['依設計回覆，以 HB_RESET_OUT == 1 作為 SoC 可接受 SPI 存取的條件。', '追問 boot code 寫入 RAM 完成後，CPU reset release 的控制者與 handshake。', '由 DAC FSM 的 ENREF、timer expiry 與非 TestMode 條件，詢問是否透過 DAC1_REFCTRL 設定參考源。'],
        result: 'SPI ready 條件已有設計回覆；boot completion handshake、DAC register 控制方式與 typical frequency 仍待確認。',
        lesson: '看到狀態轉移條件，不代表已證明 clock enable 路徑。提問要包含觀察、RTL 條件、預期操作與尚缺的完成指示。',
        question: '如何寫一則 designer 能直接回答的 debug 問題？',
        answer: '提供最小重現步驟與波形現象，指出已觀察的 RTL 條件，再問 register 控制路徑、預期時序與完成條件。',
        next: '取得設計回覆後更新操作流程與檢查點，再標記為已驗證。',
        related: ['SPI', 'reset', 'register']
    },
    {
        id: 'workflow', title: 'Regression / AI Agent：讓驗證成果可追蹤', area: '工程流程',
        tags: ['Regression', 'Debug', 'AI Agent', 'Perforce', 'JIRA'],
        context: '參與 regression、RTL/VIP debug、coverage closure 與跨團隊問題追蹤，也探索 AI Agent integration 在驗證工作中的應用。',
        actions: ['累積執行 2000+ regressions、解決 50+ RTL/VIP bugs 的自述經驗。', '觀察逐檔 submit 造成他人 sync 時編譯相依不完整，提出整合提交的問題。', '探索 AI 輔助程式整理、checker 說明與問題描述；生成結果仍需規格比對與編譯驗證。'],
        result: 'Regression / bug 數字是跨專案累積自述。AI Agent 的導入範圍與節省工時尚未量化。',
        lesson: 'Senior 貢獻可從 ownership、可重用方法、問題閉環與跨團隊協作整理；測試數量需搭配品質與影響證據。',
        question: '如何證明 AI integration 有提升驗證效率？',
        answer: '先定義可比較任務，再記錄人工修正時間、編譯成功率與錯誤率。沒有量測前，描述實際用途，不宣稱效率提升比例。',
        next: '建立一個 AI 輔助任務的前後對照，保留人工 review 與 regression 結果。',
        related: ['coverage', 'testbench', '驗證']
    }
];
