# f2e_workshop

#### HTML:

- input Element 表單一份

  - 5 個 type 為 text 的 input 欄位，代表
    - 學生學號
    - 分數

- 基本範例

```htmlmixed=
<input id="stuNo" type="text"></input>
<input id="stuScore" type="text"></input>
```

- 一個按鈕元素

  - 基本範例
  - `<button onclick=""></button>`

- 一個用於公告訊息的段落
  - 基本範例
  - `<p id=<元素 id>></p>`

#### Javascript or jQuery:

- Button onclick callback function

  - 讀取 input 欄位值
  - 宣告物件 (Object)
    - No
    - Score
  - 將 input 欄位值存放在物件中

- 基本範例

```javascript=
var <物件名稱> = {
    no: <學生學號>,
    Score: <學生分數>
}
```

- 陣列

  - 將學生物件存放於陣列中

- 基本範例：

  - ` var listStu = [學生1, 學生2, ... 學生5];`

- 計算出學生分數平均值

- 將平均值的結果，寫於 HTML 段落中

- 加分題 -1 ：

  - 在計算分數的函式中
  - 找出最高分的學生
  - 找出最低分的學生
  - 將最高分、最低分數公佈在段落中

- 加分題 -2 ：
  - 在計算分數的函式中
  - 如果不及格者 > 50%
  - 全班加分，加到及格率 > 50% 為止
