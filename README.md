# Project Title 專案名
 
 Expense-Tracker
 你的雲端記帳簿

======================================= 
![screenshot](https://github.com/mk900/expense-tracker/blob/master/screenshot-1.GIF)

![screenshot](https://github.com/mk900/expense-tracker/blob/master/screenshot-2.GIF)
 
**功能**
--
1. **使用者會員系統**

   * 本地註冊
   * 登入
   * 登出
   
2. **使用者可以管理一套屬於你的收出支狀況**

   * 總覽所有支出
   * 篩選(時間、類別)
   * 新增支出
   * 編輯支出
   * 刪除支出

=========================================== 
--
bcryptjs <br>
body-parser<br>
connect-flash<br>
express<br>
express-handlebars<br>
express-session<br>
method-override<br>
mongoose<br>
passport<br>
passport-local<br><br>

============================================= 
## 安裝流程
--
1.打開terminal並輸入git clone指令，將專案檔案下載到本機電腦。<br>
　　`git clone`<br>
  
2.進入資料夾 expense-tracker-master<br>
　　`cd expense-tracker-master`<br>
  
3.在 Terminal 輸入 npm install 指令，安裝 npm 套件<br>
　　`npm install`<br>

4.執行專案<br>
　　`npm run dev`<br>

5. 預設 port 為 3000，請直接打開瀏覽器，並在 URL 輸入 http://localhost:3000/ 即可瀏覽網頁

## Deployment 開發

套件安裝完畢後，可用專案所設定的統一指令 `npm run seed`，即可產生 DB 種子資料以提供測試
