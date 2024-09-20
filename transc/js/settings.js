// settings.js

export function showSettings() {
    console.log("Mostrando Settings");
    document.getElementById('app').innerHTML = `
      <div class="content">
        <h2>Settings</h2>
        <form id="settingsForm">
          <div>
            <label for="nickname">Enter Your Nickname:</label>
            <input type="text" id="nickname" name="nickname" maxlength="12" placeholder="Enter nickname">
          </div>
          <div>
            <label for="difficulty">Select Difficulty:</label>
            <select id="difficulty" name="difficulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <label for="avatar">Select Avatar:</label>
            <div class="avatar-options">
              <label>
                <input type="radio" name="avatar" value="Avatar1" checked>
                <img src="images/avatars/Avatar1.png" alt="Avatar 1">
              </label>
              <label>
                <input type="radio" name="avatar" value="Avatar2">
                <img src="images/avatars/Avatar2.png" alt="Avatar 2">
              </label>
              <label>
                <input type="radio" name="avatar" value="Avatar3">
                <img src="images/avatars/Avatar3.png" alt="Avatar 3">
              </label>
            </div>
          </div>
          <button type="submit">Save Settings</button>
        </form>
        <button class="menu-button" onclick="navigateTo('menu')">Back</button>
      </div>
    `;
  
    document.getElementById('nickname').value = localStorage.getItem('nickname') || '';
    document.getElementById('difficulty').value = localStorage.getItem('difficulty') || 'medium';
    document.querySelector(`input[name="avatar"][value="${localStorage.getItem('avatar') || 'Avatar1'}"]`).checked = true;
  
    document.getElementById('settingsForm').addEventListener('submit', saveSettings);
  }
  
  function saveSettings(event) {
    event.preventDefault();
    const nickname = document.getElementById('nickname').value.trim() || 'Player';
    const difficulty = document.getElementById('difficulty').value;
    const avatar = document.querySelector('input[name="avatar"]:checked').value;
  
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('difficulty', difficulty);
    localStorage.setItem('avatar', avatar);
  
    alert('Settings saved!');
    navigateTo('menu');
  }
  
