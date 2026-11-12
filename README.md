# SoC & SystemVerilog / UVM 互動式學習平台

![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)
![SystemVerilog](https://img.shields.io/badge/IEEE_1800-SystemVerilog-00B4D8)
![UVM](https://img.shields.io/badge/IEEE_1800.2-UVM_1.2-7209B7)
![SoC](https://img.shields.io/badge/AMBA_APB%2FAXI-SoC_Design-06D6A0)

從零開始，系統化掌握 **SystemVerilog**、**UVM (Universal Verification Methodology)** 與 **SoC 系統設計** 的互動式學習網站。結合完整 RTL / Testbench 原始碼範例、Mermaid 架構圖、章節隨堂測驗與 **APB-to-SPI Bridge 實戰驗證專案**，協助學習者進階成為專業的 **SoC Design Verification (DV) Engineer**。

---

## ✨ 核心功能與課程模組

| 模組 | 內容規模 | 重點主題 |
| :--- | :--- | :--- |
| **1. SystemVerilog 基礎與進階** (`/sv/:id`) | **147 章節** | 資料型態、Interface & Modport、OOP 物件導向、Constrained Random、Functional Coverage、SVA 斷言 (Assertions) |
| **2. UVM 驗證方法論** (`/uvm/:id`) | **117 章節** | UVM Component / Object 階層、Factory 機制、Phases、TLM 通訊、Sequence / Sequencer 激勵生成、Scoreboard、RAL 暫存器模型 |
| **3. SoC 系統設計** (`/soc/:id`) | **11 大核心章節 + 110 題測驗** | AMBA 匯流排 (AXI / AHB / APB)、Clock & Reset (CDC)、低功耗設計 (UPF)、DMA、中斷控制器、Memory Subsystem 與軟硬體協同驗證 |
| **4. APB-to-SPI 實戰驗證專案** (`/soc-spi-project`) | **完整 RTL + UVM TB** | 相容 Motorola S12SPIV3 規範之 `apb_spi.sv` 橋接器設計、完整 UVM 驗證環境、暫存器讀寫與波型模擬互動展示 |
| **5. 我的 DV 實務案例** (`/experience`) | **實戰案例 × 課程串聯** | 涵蓋 SPI/QSPI ownership、UCIe PHY training、PVT/SCU 低功耗驗證、PLL/Clock/Reset 時序 checker、Frequency Monitor 與系統級整合案例，並串聯面試問答與對應章節 |
| **6. DV 職涯指南與面試題庫** (`/career`, `/interview`) | **精選實戰問答** | IC 設計驗證工程師技能樹、履歷準備方向、常見一線 IC 設計公司面試真題與詳解 |

---

## 📂 專案目錄結構

```text
SoC/
├── README.md                    # 專案說明文件
├── data_verify.test.mjs         # SoC 章節與 110 題隨堂測驗自動化結構驗證腳本
└── sv-uvm-app/                  # 前端互動式學習平台主程式 (React + Vite)
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.jsx              # 路由設定 (SV / UVM / SoC / SPI Project / Career / Interview)
        ├── components/          # 共用元件 (Sidebar、Prism 語法高亮 CodeBlock、測驗元件等)
        ├── pages/               # 各功能頁面 (HomePage, ChapterPage, SocSpiProjectPage, ...)
        └── data/                # 課程章節資料庫與面試題庫 (svChapters, uvmChapters, socChapters, interviewData)
```

---

## 🚀 快速開始 (Getting Started)

### 1. 環境需求
- **Node.js** `>= 18.x`
- **npm** `>= 9.x`

### 2. 安裝與啟動開發伺服器

```bash
# 進入前端專案資料夾
cd sv-uvm-app

# 安裝相依套件
npm install

# 啟動 Vite 本地開發伺服器
npm run dev
```

啟動後打開瀏覽器前往 `http://localhost:5173` 即可開始使用。

### 3. 建置正式版 (Production Build)

```bash
cd sv-uvm-app
npm run build
npm run preview
```

---

## 🧪 課程資料與題庫自動化驗證

根目錄附帶 [data_verify.test.mjs](./data_verify.test.mjs) 驗證腳本，用於檢查 SoC 系統設計 11 個章節的段落結構、程式碼區塊語言標籤以及 110 道四選一測驗題目與詳解完整性：

```bash
node data_verify.test.mjs
```

---

## 📱 iOS App 安裝與原生打包指南 (PWA & Capacitor)

本專案同時支援 **iOS PWA 全螢幕離線 App** 與 **Capacitor 原生 iOS (Xcode / `.ipa`)** 兩種模式：

### 方式一：iOS Safari「加入主畫面」全螢幕 App（免 Mac / 免開發者帳號）
1. 在 iPhone 或 iPad 使用 **Safari** 開啟部署後的網站（或區網開發伺服器）。
2. 點擊 Safari 底部導覽列的 **「分享」按鈕** ➔ 選擇 **「加入主畫面 (Add to Home Screen)」**。
3. 從 iOS 桌面開啟 **SoC DV** 圖示，即可享有：
   - **全螢幕獨立視窗**（隱藏 Safari 網址列與工具列）
   - **iOS Safe Area 瀏海與動態島適配** (`viewport-fit=cover` + `env(safe-area-inset-*)`)
   - **完整離線題庫與章節快取**（由 `pwa-plugin.mjs` 自動產生全站預快取 Service Worker）

### 方式二：透過 GitHub Actions 自動雲端打包原生 `.ipa` 與 Xcode 專案
本倉庫已內建 [.github/workflows/ios-build.yml](./.github/workflows/ios-build.yml) 雲端 macOS 打包流程：
1. 每次推送到 `main` 分支（或至 GitHub **Actions ➔ Build Native iOS App ➔ Run workflow** 手動觸發），GitHub 的 `macos-latest` 伺服器會自動執行 Capacitor iOS 同步與 `xcodebuild`。
2. 編譯完成後，至該次 Action 頁面下方的 **Artifacts** 下載 `SoC-DV-iOS-App`，內含：
   - `SoC-DV-iOS.ipa`：可在 Windows 上透過 **Sideloadly** 或 **AltStore** 直接簽名安裝至 iPhone / iPad。
   - `ios/` 原生 Xcode 專案目錄：可在 macOS 上直接以 Xcode 開啟並發佈至 TestFlight / App Store。

### 方式三：本地 Capacitor CLI 指令（macOS + Xcode 環境）
```bash
cd sv-uvm-app

# 首次安裝 Capacitor iOS 套件並建立 ios/ 原生目錄
npm run ios:setup

# 編譯前端並同步資源至 iOS 專案
npm run ios:sync

# 在 Xcode 中開啟原生 iOS 專案
npm run ios:open
```

---

## 🛠️ 技術堆疊 (Tech Stack)

- **前端框架**：React 19, React Router v7
- **建置工具**：Vite 6
- **程式碼高亮與圖表**：PrismJS (SystemVerilog / Verilog / C / Bash 語法高亮)、Mermaid.js (硬體方塊圖與 UVM 拓樸圖渲染)
- **圖示庫**：Lucide React
- **狀態保存**：LocalStorage 學習進度追蹤 (`sv_uvm_progress`)

