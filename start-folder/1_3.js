// 🚩関数1：getTotalPrice
// 引数は price（価格）と quantity（個数）
// price * quantity を計算して「合計金額は◯◯円です」という文字列ではなく、計算数値を返す構造にします
// ※後のaddTaxで計算に使用するため数値として返します
const getTotalPrice = (price, quantity) => price * quantity;

// 🚩関数2：addTax
// 引数は total（数値の金額）
// total に10%の税金を加えて返す（整数のままでOK、小数点以下は切り捨て）
const addTax = total => Math.floor(total * 1.1);

// --- 実行処理 ---
const total = getTotalPrice(1000, 2); // → 2000

// 「税抜金額は2000円です」とコンソールに出力
console.log(`税抜金額は${total}円です`);

// 税込金額の計算
const taxedTotal = addTax(total);     // → 2200

// 「税込金額は2200円です」とコンソールに出力
console.log(`税込金額は${taxedTotal}円です`);