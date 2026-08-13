// 関数1: 価格と個数から小計を計算する関数
const getTotalPrice = (price, quantity) => price * quantity;

// 関数2: 合計金額に10%の消費税を加算する関数（小数点以下切り捨て）
const addTax = total => Math.floor(total * 1.1);

// 実行処理
const total = getTotalPrice(1000, 2); // 2000
console.log(`税抜金額は${total}円です`);

const taxedTotal = addTax(total); // 2200
console.log(`税込金額は${taxedTotal}円です`);