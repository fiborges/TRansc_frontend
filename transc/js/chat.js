// chat.js
function showChat() {
    document.getElementById('app').innerHTML = `
      <h2>Chat</h2>
      <div id="chatWindow"></div>
      <input type="text" id="chatInput" placeholder="Type a message...">
      <button onclick="sendMessage()">Send</button>
      <button class="menu-button" onclick="navigateTo('menu')">Back</button>
    `;
    loadChat();
  }
  
  function loadChat() {
    const chatWindow = document.getElementById('chatWindow');
    // Carregar e exibir mensagens do chat
  }
  
  function sendMessage() {
    const message = document.getElementById('chatInput').value;
    // Enviar mensagem
  }
  