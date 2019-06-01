# NCTU 2018下學期 物聯網概論 final project
## 有關 github
1. 沒有帳號的話先去申請一個
2. 把 github ID 跟我說，像我是 HardworkingSnowman
3. 打開 command line 或是 terminal
```
# 先 cd 到想要存放的資料夾
cd "PATH"

# 把 project 複製到資料夾中
git clone https://github.com/HardworkingSnowman/IoT_final.git
```
4. 每個人都有一個資料夾，資料夾名稱為學號，裡面都有一份 bombergirl，在自己的資料夾中把自己那份工作改好，別改到別人的資料夾的東西，不然如果兩個人改到同份檔案會產生衝突，也別改到個人的資料夾外的那份 bombergirl，那是給最後統整的人改的也是我們最後的結果。ps. 如果要兩個人一起改，要事先說好
5. 以後當做完一部份，想要更新到 github 上面時
```
Linux or Mac:
# cd 到之前存放的資料夾
cd "Path"
sudo git pull
sudo git add --all
sudo git commit -m "裡面寫改了什麼，寫什麼都可以"
sudo git push

Windows:
# cd 到之前存放的資料夾
cd "Path"
git pull
git add --all
git commit -m "裡面寫改了什麼，寫什麼都可以"
git push
```

## 開始作業分工
* [原始遊戲 github 連結](https://github.com/MattSkala/html5-bombergirl?fbclid=IwAR1QSFp4kyfgN4m3CmBsPfNJhEtx1VXRox8pQVdZw6OLBfv12JC9F_bjWTo)
* [iottalk 連結](http://iottalk2.tw:7788/register?next=connection)，帳號: nctu_iottalk_final，密碼: finalfinal
### 負責修改遊戲場景
1. 主要是修改 Menu.js 和 Tile.js
2. 把單人的選項消除
3. 把 bot 消除
4. 把場景改成我們需要的樣子

### 負責更改遊戲人物的操作
1. 主要修改 Playe.js
2. 把上下左右改成用手機操作
3. 在 iottalk 上設置好 idf 和 odf

### 讓其他人連線進來丟炸彈
1. 建議另外開一個檔案寫
2. 讓連線進來的人在場面上會有一個圖案表示他即將放炸彈的位置
3. 讓連線進來的人可以透過按按鈕控制場面上的圖案(包含上下左右和放炸彈)
4. 在 iottalk 上設置好 idf 和 odf

### 最後統整
1. 需要找每個分工的組談他們分別改了什麼，最後修改外層資料夾的部分
2. 寫報告
3. 接洽合作的組