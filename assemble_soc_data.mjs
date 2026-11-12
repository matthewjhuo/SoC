import fs from 'fs';
import path from 'path';

// 讀取產生的 JSON 檔案
const ch1_ch4_details = JSON.parse(fs.readFileSync('c:\\Users\\卓\\Desktop\\antigravity\\SoC\\soc_details_ch1_ch4.json', 'utf8'));
const ch5_ch8_details = JSON.parse(fs.readFileSync('c:\\Users\\卓\\Desktop\\antigravity\\SoC\\soc_details_ch5_ch8.json', 'utf8'));
const ch9_ch11_details = JSON.parse(fs.readFileSync('c:\\Users\\卓\\Desktop\\antigravity\\SoC\\soc_details_ch9_ch11.json', 'utf8'));

const ch1_ch6_quizzes = JSON.parse(fs.readFileSync('c:\\Users\\卓\\Desktop\\antigravity\\SoC\\soc_quizzes_ch1_ch6.json', 'utf8'));
const ch7_ch11_quizzes = JSON.parse(fs.readFileSync('c:\\Users\\卓\\Desktop\\antigravity\\SoC\\soc_quizzes_ch7_ch11.json', 'utf8'));

// 合併
const sections = {
    ...ch1_ch4_details,
    ...ch5_ch8_details,
    ...ch9_ch11_details
};

const quizzes = {
    ...ch1_ch6_quizzes,
    ...ch7_ch11_quizzes
};

const chaptersConfig = [
    {
        id: "soc-ch1",
        num: 1,
        title: "第一章：Arm Cortex-M 處理器架構與特性",
        desc: "介紹 Arm Cortex-M 處理器家族、執行模式與暫存器結構，以及多樣化的 IP 授權模式與交付物。"
    },
    {
        id: "soc-ch2",
        num: 2,
        title: "第二章：Cortex-M 處理器系統設計基礎",
        desc: "分析 SoC 記憶體系統分區（SRAM, ROM, Flash, TCM）、位元帶存取（Bit-Banding），與位元組排列（Endianness）時序設計。"
    },
    {
        id: "soc-ch3",
        num: 3,
        title: "第三章：AMBA 匯流排架構與 AHB/APB 協議",
        desc: "深入探討 AMBA 家族，分析 APB 與 AHB-Lite 協議時序、管線化傳輸與 SystemVerilog SVA 斷言檢查。"
    },
    {
        id: "soc-ch4",
        num: 4,
        title: "第四章：構建 Cortex-M 簡單匯流排系統",
        desc: "學習 ICODE/DCODE 總線合併、中央地址解碼分配，與地址重映射（Remap Mux）硬體電路設計。"
    },
    {
        id: "soc-ch5",
        num: 5,
        title: "第五章：CoreSight 除錯系統整合",
        desc: "剖析 DP/AP 偵錯存取埠、ROM Table 自動發現機制，與 ETM/ITM 系統追蹤匯流排配置。"
    },
    {
        id: "soc-ch6",
        num: 6,
        title: "第六章：SoC 低功耗設計支援",
        desc: "探討動態 Clock Gating、Power Gating 阻斷，與喚醒中斷控制器（WIC）硬體握手管理時序。"
    },
    {
        id: "soc-ch7",
        num: 7,
        title: "第七章：AMBA 匯流排基礎設施元件設計",
        desc: "研討實作 AHB 多路選擇器（Slave Mux）、預設從屬器（Default Slave）錯誤回報，與 AHB-to-APB Bridge 轉換電路。"
    },
    {
        id: "soc-ch8",
        num: 8,
        title: "第八章：常用簡單外設元件設計",
        desc: "實行 APB 控制暫存器 Programmer's Model 生態，包含 GPIO、定時二進制計數器（Timer）與 UART 收發模組。"
    },
    {
        id: "soc-ch9",
        num: 9,
        title: "第九章：系統整合與嵌入式軟體開發基礎",
        desc: "搭建全晶片級頂層互連（SoC Top）、異步復位同步釋放樹（Reset Tree）與模擬驗證 Testbench 線路。"
    },
    {
        id: "soc-ch10",
        num: 10,
        title: "第十章：超越處理器系統：DMA 與混合訊號",
        desc: "整合 Direct Memory Access (DMA) 優先級仲裁器、ADC/DAC 類比數位混合通道，與 Beetle IoT 實用 SOC 晶片案例。"
    },
    {
        id: "soc-ch11",
        num: 11,
        title: "第十一章：軟體開發與 RTOS 系統移植",
        desc: "實作 CMSIS-CORE 標準驅動、VTOR 重定向、中斷嵌套優先級管理，與 SysTick 滴答載入與 OS 移植實務。"
    }
];

const groupName = "SoC 系統設計 (SoC System Design)";

// 生成最終的 socChapters.js 內容
let socChaptersContent = `/**
 * SoC System Design Course Chapters
 * procedurally generated from Arm Cortex-M Reference Book
 */

export const socChapters = [\n`;

chaptersConfig.forEach((ch, idx) => {
    const chSections = sections[ch.id] || [];
    const chQuizzes = quizzes[ch.id] || [];

    if (chSections.length === 0 || chQuizzes.length === 0) {
        console.warn(`WARNING: Missing sections or quizzes for ${ch.id}`);
    }

    socChaptersContent += `  {
    id: ${JSON.stringify(ch.id)},
    num: ${ch.num},
    group: ${JSON.stringify(groupName)},
    title: ${JSON.stringify(ch.title)},
    desc: ${JSON.stringify(ch.desc)},
    sections: ${JSON.stringify(chSections, null, 6)},
    quiz: ${JSON.stringify(chQuizzes, null, 6)}
  }${idx === chaptersConfig.length - 1 ? '' : ','}\n`;
});

socChaptersContent += `];\n`;

const targetPath = 'c:\\Users\\卓\\Desktop\\antigravity\\SoC\\sv-uvm-app\\src\\data\\socChapters.js';
fs.writeFileSync(targetPath, socChaptersContent, 'utf8');
console.log(`Successfully assembled & wrote socChapters.js to ${targetPath}`);

// 檢查各章節的測驗字數與長度
chaptersConfig.forEach(ch => {
    const quizCount = quizzes[ch.id]?.length || 0;
    console.log(`- ${ch.title}: ${quizCount} questions`);
});
