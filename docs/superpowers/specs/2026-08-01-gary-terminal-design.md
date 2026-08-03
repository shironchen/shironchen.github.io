# GARY//OS — 駭客終端機風個人履歷站 設計文件

日期：2026-08-01
狀態：使用者已核可（對話中分段核可）

## 目的

純好玩／技術展示用的個人履歷單頁網站，風格致敬 plugdealer.shop 的
「地下供應終端機」世界觀：真實經歷包裝成 DATA DEALER 賣貨文案。

## 決策紀錄

| 議題 | 決定 |
|---|---|
| 用途 | 純好玩／技術展示（非求職主力） |
| 內容 | 真實經歷包裝成駭客風；公司專案只寫技術面 |
| 特效 | 完整套餐（boot 閘門、文字雨、CRT、glitch、ticker、音樂、SFX） |
| 音樂 | Web Audio 即時合成 dark ambient loop，零音檔零版權 |
| 架構 | 單檔 vanilla `index.html`，零依賴零 build，view-source 即作品 |
| 部署 | 新 repo `shironchen/gary-terminal` + GitHub Pages |

## 內容結構（單頁由上而下）

1. **Boot 閘門**：打字機式開機 log（GARY//OS V1.0 …）→ `▸ CLICK TO ENTER THE SUPPLY`。
   點擊手勢同時啟動背景音樂（繞過瀏覽器 autoplay 限制）。
2. **Header**：glitch logo `GARY//OS`、SFX 開關、即時時鐘。
3. **Ticker 跑馬燈**：霓虹綠梗文案循環。
4. **Hero**：`DATA DEALER_` 大標＋雙關副標＋兩顆按鈕（VIEW THE SUPPLY / CONTACT THE PLUG）。
5. **Stats 列**：4 格趣味數據（PROJECTS SHIPPED / PIPELINES 24-7 / SUBSCRIPTIONS SOLD 0 / NARCS 0）。
6. **THE SUPPLY 專案卡 ×6**（即時 ASCII 渲染圖示 + 街頭文案 + tech chips）：
   PIPELINE（TVBS 資料管線：GCP/BQ/dbt/Terraform）、TEXT2SQL、BZBOT（加密貨幣 Discord bot）、
   BZTEAM（LINE 個人助手團隊）、MEOWBOX（貓咪社群）、TXF ORACLE（台指期預測 routine）。
7. **Manifesto**：翅膀 ASCII 背景＋宣言式自介。
8. **Contact**：GitHub `shironchen`、email `shironchen@gmail.com`、LinkedIn 留位。
9. **Footer**：no cookies / no trackers / view-source 邀請。

## 視覺系統

- 配色：近黑底（#050607 系）、淡綠墨色、霓虹綠主色、紅/琥珀點綴；不照抄 plugdealer 色票。
- 字體：IBM Plex Mono（Google Fonts，唯一外部資源）。
- 特效層（全 vanilla canvas/CSS）：文字雨雙層 canvas（字元集混 SQL 梗）、雜訊顆粒 canvas、
  CSS 掃描線＋暗角＋隨機 flicker、logo glitch（::before/::after + clip-path 藍紅錯位）、
  專案卡 ASCII 即時渲染（小 canvas 畫圖→亮度映射 ` .░▒▓█`）。
- RWD：手機單欄、特效降密度；`prefers-reduced-motion` 停用所有動畫迴圈。

## 音訊系統（全合成，零音檔）

- 音樂：AudioContext——低音 drone（雙 osc 微失諧＋lowpass）、每數秒一次的 pad 和弦
  （Am/F/C/G 進行、慢 attack/release）、稀疏高頻 blip 進 feedback delay；master gain 壓低當環境音。
- SFX：方波掃頻 tick（hover/click）、access-granted 進站聲、開卡 glitch 聲。
- SFX 開關同時控制音樂暫停/恢復。

## 錯誤處理

- 無 JS：`<noscript>` 提示。
- AudioContext 建立失敗或被擋：靜默略過，站照常運作。
- `prefers-reduced-motion`：不跑 rAF 迴圈，靜態呈現。

## 驗證

- 本地瀏覽器實測：boot→進站→音樂啟動→六卡→manifesto→contact→SFX 開關→手機寬度。
- push 後確認 GitHub Pages 網址可開。
