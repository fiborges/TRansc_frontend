// app.js
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', router);
  router();
});

function router() {
  const route = getCurrentRoute();
  if (route === 'menu') {
    showMenu();
  } else if (route === 'login') {
    showLogin();
  } else if (route === 'register') {
    showRegister();
  } else if (route === 'settings') {
    showSettings();
  } else if (route === 'game') {
    showGame();
  } else if (route === 'ranking') {
    showRanking();
  } else if (route === 'chat') {
    showChat();
  } else {
    navigateTo('login');
  }
}

function showMenu() {
  document.getElementById('app').innerHTML = `
    <h2>Welcome to Pong Game</h2>
    <button class="menu-button" onclick="navigateTo('settings')">Settings</button>
    <button class="menu-button" onclick="navigateTo('game')">Play Game</button>
    <button class="menu-button" onclick="navigateTo('ranking')">Ranking</button>
    <button class="menu-button" onclick="navigateTo('chat')">Chat</button>
  `;
}
