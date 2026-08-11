# 陳祺昀 — 駭客終端機風個人履歷站 設計文件

初版日期：2026-08-01（原代號 `GARY//OS`）
最後更新：2026-08-11
狀態：已上線，本文件反映現況

## 目的

個人網站根站台的單頁履歷，風格致敬 plugdealer.shop 的「地下供應終端機」世界觀：
真實經歷與可查證數字，包裝成賣貨文案的語氣。

站台由兩層組成：

- `/` — 本文件描述的終端機風單頁（技術展示，view-source 即作品）
- `/resume/` — 正式履歷（繁中／简中／日本語／English），典雅紙質風，另一套設計

## 決策紀錄

| 議題 | 決定 |
|---|---|
| 用途 | 技術展示 ＋ 求職名片；硬數字放在戰績區與工作經驗區 |
| 品牌 | 本名「陳祺昀」（BZ）。初版代號 `GARY//OS` 已於 `aac46e3` 移除 |
| 語言 | 全站繁體中文（`6c1bde6` 起，原為英文文案） |
| 定位 | AI 數據應用工程師 |
| 內容 | 真實經歷包裝成駭客風；公司專案只寫技術面，不寫內部細節 |
| 特效 | 完整套餐（boot 閘門、文字雨、CRT、glitch、ticker、音樂、SFX） |
| 音樂 | Web Audio 即時合成 dark ambient loop，零音檔零版權 |
| 架構 | 單檔 vanilla `index.html`，零依賴零 build |
| 部署 | `shironchen/shironchen.github.io` + GitHub Pages |
| 個資 | 公開站台只放 email / GitHub / LinkedIn；手機號不放（`docs` 外的 private repo 保留） |

## 內容結構（單頁由上而下）

1. **Boot 閘門**：打字機式開機 log →「▸ 點擊進站」。
   點擊手勢同時啟動背景音樂（繞過瀏覽器 autoplay 限制）。
2. **Header**：glitch logo「陳祺昀」、七項錨點導覽、即時時鐘、SFX 開關。
3. **Ticker 跑馬燈**：霓虹綠梗文案循環。
4. **Hero**：`AI 工程師_` 大標＋副標＋三顆按鈕（看貨／找我談／喵盒子外連）。
5. **Stats 列**：4 格數據（出貨專案 6+／管線 24-7／蝦皮營收 257 萬／條子 0）。
6. **貨源** `#supply`：三張身分卡（即時 ASCII 渲染圖示＋文案＋tech chips）——
   數據工程師、全端工程師、寵物電商（喵盒子卡加「自家貨」緞帶並可點擊外連）。
7. **工作經驗** `#exp`：時間軸七段（TVBS／星展／神策／曼徹斯特碩士／百維／大聲公／Cybilltek）。
   內容依正式履歷 PDF 校正（`f1997d0`）。
8. **個人作品** `#works`：七張卡（喵盒子、BZBOT、BZTEAM、TXF ORACLE、TEXT2SQL、
   MimiMao·LetsPushUp、本站）。
9. **數據戰績** `#biz`：喵盒子蝦皮賣場。六個指標板塊（銷售額／訂單數／轉換率／客單價／
   商品點擊／退款率），點板塊展開對應的手寫 SVG 折線圖，可 hover 查各月數字，再點一次收合。
   資料為 2026/01–07 逐月後台數字，內嵌於 `index.html` 的 `D` 陣列，來源與口徑寫在區塊註腳。
10. **我的團隊** `#crew`：bzteam 六個 AI 小弟的 ASCII 雙格動畫卡＋每日排程 ops log。
11. **宣言** `#manifesto`：翅膀 ASCII 背景＋宣言式自介。
12. **聯絡** `#contact`：GitHub、正式履歷連結、喵盒子、email `shironchen@gmail.com`、LinkedIn。
13. **Footer**：no cookies / no trackers / view-source 邀請。

## 視覺系統

- 配色：近黑底（#050607 系）、淡綠墨色、霓虹綠主色、紅/琥珀點綴；不照抄 plugdealer 色票。
- 字體：IBM Plex Mono（Google Fonts，唯一外部資源）。
- 字級：因應中文字重，全面放大並提高對比（`13a14bf`、`74cfa75`），大標相對縮小（`c9bb5fe`）。
- 特效層（全 vanilla canvas/CSS）：文字雨雙層 canvas（字元集混 SQL 梗）、雜訊顆粒 canvas、
  CSS 掃描線＋暗角＋隨機 flicker、logo glitch（::before/::after + clip-path 藍紅錯位）、
  卡片 ASCII 即時渲染（小 canvas 畫圖→亮度映射 ` .:!*#%@`）。
- RWD：手機單欄、特效降密度；`prefers-reduced-motion` 停用所有動畫迴圈。
  手機版溢出與導覽已於 `0ec4e4a` 修正。

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

- 本地瀏覽器實測：boot→進站→音樂啟動→貨源→經歷→作品→戰績圖表展開/收合→
  團隊動畫→manifesto→contact→SFX 開關→手機寬度。
- push 後確認 GitHub Pages 網址可開。

## 影片資產

`resume/images/` 的 demo mp4 全部進版控，由 `/resume/` 各頁的「Demo 影片」按鈕
（`data-video` 屬性）點擊時才載入，非頁面載入時下載。

2026-08-11 重壓四支最大的（H.264、長邊上限 1280、上限 30fps、去音軌、`+faststart`）：

| 檔案 | 前 | 後 | CRF |
|---|---|---|---|
| bemyguest | 83.0MB | 9.4MB | 21（手持攝影，需較高畫質） |
| uBike | 21.3MB | 12.2MB | 26 |
| friendy | 19.4MB | 8.9MB | 26 |
| winformVideo03 | 12.6MB | 0.8MB | 26（螢幕錄影，極好壓） |

合計 164MB → 59MB。原始檔仍可由 history 取回（`git show <舊 commit>:resume/images/<檔名>`）。

### 待辦

- history 未清理，`.git` 仍留著舊的大 blob（且會再長）。
  真要縮小需 `git filter-repo` 改寫 history ＋ force push，尚未執行。
- Git LFS 不是選項——GitHub Pages 不會 serve LFS 檔案。
- 剩下 8 支（合計 27MB）未處理。
