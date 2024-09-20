// Adicionando console.log para verificar se o id e name estão sendo aplicados
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
  console.log(document.getElementById('loginUsername'));
  console.log(document.getElementById('loginPassword'));
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
}

// Função para exibir o formulário de registro
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

function handleRegister(event) {
  event.preventDefault();
  console.log("Registro submetido");
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;

  let users = JSON.parse(localStorage.getItem('users')) || [];

  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    alert('Username already exists!');
    return;
  }

  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('User registered successfully!');
  navigateTo('login');
}

function handleLogin(event) {
  event.preventDefault();
  console.log("Login submetido");
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const storedUser = users.find(user => user.username === username && user.password === password);

  if (storedUser) {
    alert('Login successful!');
    navigateTo('menu');
  } else {
    alert('Invalid username or password');
  }
}
