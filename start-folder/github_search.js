const searchBtn = document.getElementById('searchBtn');
const usernameInput = document.getElementById('username');
const resultDiv = document.getElementById('result');

async function searchGitHubUser() {
  const username = usernameInput.value.trim();

  // 未入力チェック
  if (username === '') {
    resultDiv.innerHTML = '<p style="color: red;">ユーザー名を入力してください。</p>';
    return;
  }

  resultDiv.innerHTML = '<p>検索中...</p>';

  try {
    // GitHub APIからユーザー情報を取得
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      if (response.status === 404) {
        resultDiv.innerHTML = '<p style="color: red;">ユーザーが見つかりませんでした。</p>';
      } else {
        resultDiv.innerHTML = '<p style="color: red;">エラーが発生しました。</p>';
      }
      return;
    }

    const data = await response.json();

    // 検索結果のUIを出力（画像のデザインに合わせて修正）
    // 1. テキスト情報を「中央揃え」で並べる
    // 2. アイコンを一番下の中央に配置
    resultDiv.innerHTML = `
      <div style="text-align: center; margin-top: 20px;">
        
        <!-- テキスト情報エリア -->
        <div style="margin-bottom: 20px; font-size: 1em; line-height: 1.8;">
          <p style="margin: 0;"><strong>ユーザー名:</strong> ${data.login}</p>
          <p style="margin: 0;"><strong>名前:</strong> ${data.name || '未設定'}</p>
          <p style="margin: 0;"><strong>フォロワー数:</strong> ${data.followers}</p>
          <p style="margin: 0;"><strong>公開リポジトリ数:</strong> ${data.public_repos}</p>
        </div>

        <!-- アイコン（画像のように下部中央に配置） -->
        <img src="${data.avatar_url}" alt="${data.login}" style="width: 100px; height: 100px; border-radius: 8px; border: 1px solid #ddd; display: block; margin: 0 auto 15px auto;">
        
        <!-- リンク -->
        <a href="${data.html_url}" target="_blank" rel="noopener noreferrer" style="font-size: 0.9em;">GitHubで見る ↗</a>
      </div>
    `;
  } catch (error) {
    resultDiv.innerHTML = '<p style="color: red;">通信エラーが発生しました。</p>';
  }
}

// 検索ボタンクリックおよびEnterキー押し下げ時のイベント設定
searchBtn.addEventListener('click', searchGitHubUser);
usernameInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchGitHubUser();
  }
});