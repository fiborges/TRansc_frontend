// ranking.js
function showRanking() {
    document.getElementById('app').innerHTML = `
      <h2>Ranking</h2>
      <div id="rankingList"></div>
      <button class="menu-button" onclick="navigateTo('menu')">Back</button>
    `;
    loadRanking();
  }
  
  function loadRanking() {
    const rankingList = document.getElementById('rankingList');
    // Carregar e exibir dados do ranking
  }
  