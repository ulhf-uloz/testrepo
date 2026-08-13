let wantApple = 4;
let stockApple = 3;

// 在庫が足りているか判定（希望数 <= 在庫数）
if (wantApple <= stockApple) {
  console.log("希望通りカートに入れます。");
} else {
  console.log("在庫が足りません。在庫分だけカートに入れます。");
}

// 在庫の分（stockApple）だけ追加
let i = 0;
while (i < stockApple) {
  console.log("りんごをカートに追加しました");
  i++;
}

// 在庫の分（stockApple）だけ処理回数をカウントして表示
for (let j = 1; j <= stockApple; j++) {
  console.log(`リンゴを買うのは${j}回目の処理です`);
}