# Icarus Verilog #
iverilog和gtkwave是verilog編譯和產生波形的輕量化工具。
僅能檢查波形和驗證功能，不能對電路面積和效能進行分析。

1.Download VSCode
---
(1) 載點: https://code.visualstudio.com/

(2) 下載VScode擴充套件: </b>
點擊延伸模組搜尋:
Verilog-HDL: 提供基本的語法檢查
Chinese(Traditional): 提供繁體中文環境
![image](https://hackmd.io/_uploads/B1S0oQe6p.png) </b>

![image](https://hackmd.io/_uploads/S1jQ3XeTa.png) </b>

2.Download iverilog
---
(1) 載點: https://bleyer.org/icarus/ </b>
![image](https://hackmd.io/_uploads/HyH2-GUaa.png)

基本都打勾就好，add to user path必勾，不然之後需要添加環境變數
![image](https://hackmd.io/_uploads/SkDOXM866.png)

載完會創建iverilog資料夾 </b>
![image](https://hackmd.io/_uploads/B1UP2mxTa.png)</b>

(2) 添加環境變數:</b>
![image](https://hackmd.io/_uploads/rkqyRc5aR.png)</b>

點選環境變數</b>
![image](https://hackmd.io/_uploads/SJPM0ccp0.png)</b>

點選Path->編輯</b>
![image](https://hackmd.io/_uploads/HJ82Ac5pR.png)</b>

新增loccal/iverilog/bin和local/iverilog/gtkwave路徑</b>
![image](https://hackmd.io/_uploads/Hk_M1s5TR.png)</b>

(3) 修改VScode之verilog擴充設定</b>
![image](https://hackmd.io/_uploads/S1sD1oqTR.png)</b>

![image](https://hackmd.io/_uploads/S1juxi5aC.png)

(4) 在VScode的terimal(點選vscode視窗最下方像電塔的圖示![image](https://hackmd.io/_uploads/SJEpkclaa.png))輸入iverilog，檢查是否安裝成功</b>
跳出內容表示成功</b>
![image](https://hackmd.io/_uploads/S17JjsbAT.png)
</b>

檢查gtkwave，輸入gtkwave，跳出視窗表示成功</b>
![image](https://hackmd.io/_uploads/rJugNM8pT.png)

![image](https://hackmd.io/_uploads/BJw9AXlap.png)</b>

之後重啟電腦，使環境生效</b>


3.iverilog introduction
---
(1) Icarus Verilog編譯器主要包含:</b>
|iverilog|編譯verilog和vhdl檔案，檢查語法並生成執行檔|
|-|-|
|vvp|根據執行檔，產生波形檔|
|gtkwave|打開波形檔，顯示波形|
    
(2) 常用參數介紹</b>
-o: 指定編譯後的檔案名稱，預設為a.out
編譯top.v產生top: `iverilog -o top tb_top.v`</b>

-g:擴展版本，若要使用systemverilog，可以使用 `-g 2012`

-D: 切換tb指定的define

-y: 指定包含的資料夾</b>
編譯在D:/test的tb_top.v: `iverilog -y D:/test/tb_top.v`，</b>
在跟ternimal的同目錄:`iverilog -y ./tb_top.v`</b>

-I: include其他檔案或資料夾</b>
編譯tb_top.v，同時會用到top.v: `iverilog -I ./top.v tb_top.v`</b>

3.環境測試
---
(1) 在桌面建立測試資料夾iverilog_ex
![image](https://hackmd.io/_uploads/SJAm19lpT.png)

(2) 編寫範例程式:</b>
計數器，每10 cycles計數+1，當計數10次後，會拉起一個done訊號</b>
其中tb要增加的只有產生波形檔vcd的部分
```verilog=
initial begin
    $dumpfile("wave.vcd");       //產生vcd name
    $dumpvars(0, tb_counter);    //tb module name
end
```
![image](https://hackmd.io/_uploads/HyIk5cWaa.png)

counter.v:</b>
```verilog=
module counter(
    input clk,
    input rst,
    output reg count_done
);

reg [7:0] cnt;

always @ (posedge clk) begin
    if(rst) cnt <= 8'd0;
    else if(cnt >= 8'd10) cnt <= 8'd0;
    else cnt <= cnt + 8'd1;
end

always @ (posedge clk) begin
    if(rst)
        count_done <= 1'b0;
    else if(cnt == 8'd10)
        count_done <= 1'b1;
    else
        count_done <= 1'b0;
end

endmodule
```
tb_counter.v:
```verilog=
`timescale 1ns/100ps
`include "counter.v" //加了比較保險，讓tb能讀到top module
module tb_counter;

parameter CLK_PERIOD = 10;

reg  CLK;
reg  RESET;
wire count_done;
//module be tested
counter t0 (
    .rst(RESET),
    .clk(CLK),
    .count_done(count_done)
);
//stimilu
initial begin
    CLK   = 1'b0;
    RESET = 1'b1;
end

initial begin
    #100
        RESET = 1'b0;
    #1000
        $finish;
end

always @(CLK)
    #(CLK_PERIOD/2) CLK <= !CLK;

/*iverilog */
initial begin            
    $dumpfile("wave.vcd");       //產生vcd name
    $dumpvars(0, tb_counter);    //tb module name
end

endmodule
```
(3) 打開vscode的terminal，移動至code所在的資料夾</b>
移動當前位置指令: `cd <file_path>`
![image](https://hackmd.io/_uploads/Hyfh9txp6.png)

(5) 編譯: `iverilog -o wave top_tb.v`</b>
![image](https://hackmd.io/_uploads/Bk5dOobAa.png)

產生檔案wave</b>
![image](https://hackmd.io/_uploads/Hkt5oKg66.png)

(6) 生成波形檔: `vvp wave`</b>
![image](https://hackmd.io/_uploads/S1PcdsbRT.png)

產生波形檔wave.vcd</b>
![image](https://hackmd.io/_uploads/H1qQnYg6T.png)

(7) 打開波形: `gtkwave wave.vcd`，`+mda` 可觀察矩陣資料
![image](https://hackmd.io/_uploads/SJdu3KxaT.png)
![image](https://hackmd.io/_uploads/rkEwntepT.png)

(8) 插入訊號: 點擊insert</b>
![image](https://hackmd.io/_uploads/HJHnJsZ6a.png)
縮放時間軸大小:</b>
![image](https://hackmd.io/_uploads/SkuSzVx6T.png)
調整時間軸位置:</b>
![image](https://hackmd.io/_uploads/HJ7dPKlTT.png)

<!-- ~~(9) 透過vscode擴充WaveTrace打開 (沒想像中好用)~~
下載WaveTrace
![image](https://hackmd.io/_uploads/SJVQKjbAT.png)</b>

以vscode開啟vcd檔</b>
![image](https://hackmd.io/_uploads/Hk3cFi-Aa.png)</b>

點擊Add Signals添加訊號</b>
![image](https://hackmd.io/_uploads/BJjnYi-0T.png)</b>

shift+滾輪: 移動波形</b>
![image](https://hackmd.io/_uploads/rkD8csWAT.png) -->

4.寫成腳本自動化
---
(1) 創建cmd檔，將編譯和產生波形檔指令寫入</b>
![image](https://hackmd.io/_uploads/SJj-uoWAp.png)
```clike=
del wave                       //delete file wave
del wave.vcd                   //delete file wave.vcd
iverilog -o wave tb_counter.v  //compile tb_cvounter.v & generate file wave
vvp wave                       //generate waveform wave.vcd by file wave
pause                          //terminal pause
```

(2) 回到終端機，輸入.\run.cmd，執行該執行檔</b>
![image](https://hackmd.io/_uploads/H1OQf9laT.png)

即可產生wave和wave.vcd</b>
![image](https://hackmd.io/_uploads/rJV-GqxT6.png)

(3) 之後要修改，點選右鍵編輯內容即可</b>
![image](https://hackmd.io/_uploads/Bysiq9Wap.png)

(4) linux下使用Makefile -- 待更新
新增Makefile:`touch Makefile`
![image](https://hackmd.io/_uploads/ryY9ojZAT.png)

Reference
---
[一定學得會!!! 在vscode上架設易於開發verilog/system verilog的環境之教學(win10環境)](https://www.dcard.tw/f/nctu/p/235935287)
[超簡易!!! 在vscode上利用TerosHDL架設易於開發verilog/system verilog的環境之教學(win11環境)](https://www.dcard.tw/f/nctu/p/239947030)
[全平台轻量开源verilog仿真工具iverilog+GTKWave使用教程](https://zhuanlan.zhihu.com/p/95081329)