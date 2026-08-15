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

    // 要件項目（アイコン、名前、ユーザー名、フォロワー数、公開リポジトリ数）を表示
    resultDiv.innerHTML = `
      <div style="border: 1px solid #ccc; padding: 20px; border-radius: 8px; max-width: 420px; display: flex; gap: 20px; align-items: center; margin-top: 15px;">
        <!-- アイコン -->
        <img src="${data.avatar_url}" alt="${data.login}" style="width: 90px; height: 90px; border-radius: 50%;">
        
        <div>
          <!-- 名前（設定がない場合はユーザー名） -->
          <h3 style="margin: 0 0 5px 0;">${data.name || data.login}</h3>
          
          <!-- ユーザー名（@login） -->
          <p style="margin: 0 0 10px 0; color: #666; font-size: 0.9em;">@${data.login}</p>
          
          <!-- フォロワー数・公開リポジトリ数 -->
          <p style="margin: 0 0 5px 0;">フォロワー数: <strong>${data.followers}</strong> 人</p>
          <p style="margin: 0 0 10px 0;">公開リポジトリ数: <strong>${data.public_repos}</strong> 個</p>
          
          <a href="${data.html_url}" target="_blank" rel="noopener noreferrer">GitHubで見る ↗</a>
        </div>
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