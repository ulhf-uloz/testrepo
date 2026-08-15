// HTMLの要素を取得
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const resultDiv = document.getElementById('result');

// 計算を行う関数
function calculate() {
  const num1Value = num1Input.value;
  const num2Value = num2Input.value;
  const operator = operatorSelect.value;

  // 要件: 値が入力されていない場合
  if (num1Value === '' || num2Value === '') {
    resultDiv.textContent = '両方の数値を入力してください';
    return; // ここで処理を終了
  }

  // 文字列から数値に変換
  const num1 = parseFloat(num1Value);
  const num2 = parseFloat(num2Value);

  // 要件: 割り算の場合、値2に0が入った時のエラー処理
  if (operator === '/' && num2 === 0) {
    resultDiv.textContent = '0で割る事はできません。';
    return;
  }

  // 計算処理
  let calcResult = 0;
  let operatorSymbol = '';

  if (operator === '+') {
    calcResult = num1 + num2;
    operatorSymbol = '＋';
  } else if (operator === '-') {
    calcResult = num1 - num2;
    operatorSymbol = '－';
  } else if (operator === '*') {
    calcResult = num1 * num2;
    operatorSymbol = '×';
  } else if (operator === '/') {
    calcResult = num1 / num2;
    operatorSymbol = '÷';
  }

  // 要件: 計算式とその結果を表示する
  resultDiv.textContent = `${num1} ${operatorSymbol} ${num2} = ${calcResult}`;
}

// 要件: 値の変更を行うと動的に結果の表示が変化すること
// 入力欄やセレクトボックスの値が変わるたびに calculate 関数を実行する
num1Input.addEventListener('input', calculate);
num2Input.addEventListener('input', calculate);
operatorSelect.addEventListener('change', calculate);