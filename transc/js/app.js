import { showSettings } from './settings.js';
console.log("app.js carregado");

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded and parsed");
  window.addEventListener('hashchange', router);
  router();
});

function router() {
  console.log("Router chamado");
  const route = getCurrentRoute();
  console.log("Rota atual:", route);

  switch(route) {
      case 'home':
          showHome();
          return;  // Garante que o 'default' não seja chamado
      case 'about':
          showAbout();
          return;  // Garante que o 'default' não seja chamado
      case 'login':
          showLogin();
          return;  // Garante que o 'default' não seja chamado
      case 'register':
          showRegister();
          return;  // Garante que o 'default' não seja chamado
      case 'menu':
          showMenu();
          return;  // Garante que o 'default' não seja chamado
      case 'game':  // Certifique-se de que a rota 'game' está aqui
          showGame();
          return;
      case 'settings':  // Adicione esta linha para reconhecer a rota 'settings'
          showSettings(); // Chama a função que exibe os settings
          return;
      default:
          showHome();
  }
}

function showHome() {
  console.log("Mostrando Home");
  document.body.classList.remove('about-page');
  document.getElementById('app').innerHTML = `
    <div class="content">
      <h1 class="home-title">Neon Pong</h1>
      <p>Rediscover the classic in neon!</p>
    </div>
  `;
}

function showAbout() {
  console.log("Mostrando About");
  document.body.classList.add('about-page');
  document.getElementById('app').innerHTML = `
    <div class="content">
      <h1 class="other-title">About Neon Pong</h1>
      <p>Neon Pong is a modern twist on the classic Pong game, combining nostalgia with neon aesthetics. Challenge your friends and enjoy the game!</p>
    </div>
  `;
}

function showLogin() {
  console.log("Mostrando Login");
  document.getElementById('app').innerHTML = `
    <div class="content">
      <h2>Login</h2>
      <form id="loginForm">
        <input type="text" id="loginUsername" name="username" placeholder="Username" required><br>
        <input type="password" id="loginPassword" name="password" placeholder="Password" required><br>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="#" onclick="event.preventDefault(); navigateTo('register')">Register here</a></p>
    </div>
  `;
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
}

function showRegister() {
  console.log("Mostrando Register");
  document.getElementById('app').innerHTML = `
    <div class="content">
      <h2>Register</h2>
      <form id="registerForm">
        <input type="text" id="registerUsername" name="username" placeholder="Username" required><br>
        <input type="password" id="registerPassword" name="password" placeholder="Password" required><br>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="#" onclick="event.preventDefault(); navigateTo('login')">Login here</a></p>
    </div>
  `;
  document.getElementById('registerForm').addEventListener('submit', handleRegister);
}

function showMenu() {
  console.log("Mostrando Menu");
  
  document.querySelector('.nav').style.display = 'none';
  
  document.body.classList.add('menu-page');
  document.getElementById('app').innerHTML = `
    <div class="content">
      <h1 class="menu-title">Menu</h1>
      <button class="menu-button play-button" onclick="navigateTo('game')">Play</button>
      <button class="menu-button ranking-button" onclick="navigateTo('ranking')">Ranking</button>
      <button class="menu-button chat-button" onclick="navigateTo('chat')">Chat</button>
      <button class="menu-button settings-button" onclick="navigateTo('settings')">Settings</button>
      <button class="menu-button exit-button" onclick="navigateTo('home')">Exit</button>
    </div>
  `;
}