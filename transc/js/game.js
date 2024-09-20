function showGame() {
    // Pegando o nickname e avatar do localStorage, com valores padrão
    const nickname = localStorage.getItem('nickname') || 'Player1';
    const playerAvatar = localStorage.getItem('avatar') || 'AvatarInt.png';
    const aiAvatar = 'AvatarIA.png';
  
    document.getElementById('app').innerHTML = `
      <div class="game-header">
        <button id="goBackButton" onclick="navigateTo('menu')">Go Back</button>
        <div class="avatars">
          <div class="avatar-box">
            <img src="../images/avatars/${playerAvatar}" alt="Player Avatar">
            <p>${nickname}</p>
          </div>
          <div class="avatar-box">
            <img src="../images/avatars/${aiAvatar}" alt="AI Avatar">
            <p>AI</p>
          </div>
        </div>
      </div>
      <div class="score-box">
        <div id="scoreText">Player: <span id="playerScore">0</span> | AI: <span id="aiScore">0</span></div>
        <div id="matchInfo">Best of 5</div>
      </div>
      <canvas id="pongGame"></canvas>
    `;
    startPongGame();
  }
  
  
  function startPongGame() {
    const canvas = document.getElementById('pongGame');
    const context = canvas.getContext('2d');
  
    const playerScoreElement = document.getElementById('playerScore');
    const aiScoreElement = document.getElementById('aiScore');
  
    canvas.width = 800;
    canvas.height = 600;
  
    const difficulty = localStorage.getItem('difficulty') || 'medium';
    let ballSpeed = difficulty === 'easy' ? 3 : difficulty === 'hard' ? 7 : 5;
  
    const player = {
        x: 10,
        y: canvas.height / 2 - 50,
        width: 10,
        height: 100,
        dy: 0,
        speed: 8
    };
  
    const ai = {
        x: canvas.width - 20,
        y: canvas.height / 2 - 50,
        width: 10,
        height: 100,
        speed: ballSpeed - 1
    };
  
    const ball = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        size: 10,
        speed: ballSpeed,
        dx: ballSpeed,
        dy: ballSpeed * (Math.random() > 0.5 ? 1 : -1)
    };
  
    let playerScore = 0;
    let aiScore = 0;
    const winningScore = 5;
    let isGameOver = false;
  
    function drawRect(x, y, w, h, color) {
        context.fillStyle = color;
        context.fillRect(x, y, w, h);
    }
  
    function drawBall(x, y, size, color) {
        context.shadowBlur = 20;
        context.shadowColor = "#f00";
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2, false);
        context.closePath();
        context.fill();
    }
  
    function movePlayer() {
        player.y += player.dy;
        if (player.y < 0) player.y = 0;
        if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
    }
  
    function moveAI() {
        if (ai.y + ai.height / 2 < ball.y) {
            ai.y += ai.speed;
        } else {
            ai.y -= ai.speed;
        }
        if (ai.y < 0) ai.y = 0;
        if (ai.y + ai.height > canvas.height) ai.y = canvas.height - ai.height;
    }
  
    function moveBall() {
        if (isGameOver) return; // Previne que a bola se mova se o jogo acabou
  
        ball.x += ball.dx;
        ball.y += ball.dy;
  
        if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
            ball.dy *= -1;
        }
  
        if (
            (ball.x - ball.size < player.x + player.width && ball.y > player.y && ball.y < player.y + player.height) ||
            (ball.x + ball.size > ai.x && ball.y > ai.y && ball.y < ai.y + ai.height)
        ) {
            ball.dx *= -1;
        }
  
        if (ball.x - ball.size < 0) {
            aiScore++;
            aiScoreElement.textContent = aiScore;
            resetBall();
        } else if (ball.x + ball.size > canvas.width) {
            playerScore++;
            playerScoreElement.textContent = playerScore;
            resetBall();
        }
  
        if (playerScore === winningScore || aiScore === winningScore) {
            isGameOver = true;
            setTimeout(() => {
                endGame(playerScore === winningScore ? "You win!" : "You lose!");
            }, 100);
        }
    }
  
    function resetBall() {
        if (isGameOver) return; // Não reinicia a bola se o jogo acabou
  
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.dx = ballSpeed * (Math.random() > 0.5 ? 1 : -1);
        ball.dy = ballSpeed * (Math.random() > 0.5 ? 1 : -1);
    }
  
    function endGame(message) {
        alert(message);
        playerScore = 0;
        aiScore = 0;
        playerScoreElement.textContent = playerScore;
        aiScoreElement.textContent = aiScore;
        isGameOver = false;
        resetBall();
    }
  
    function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawRect(player.x, player.y, player.width, player.height, "#0ff");
        drawRect(ai.x, ai.y, ai.width, ai.height, "#ff0");
        drawBall(ball.x, ball.y, ball.size, "#f00");
        movePlayer();
        moveAI();
        moveBall();
        requestAnimationFrame(gameLoop);
    }
  
    document.addEventListener('keydown', (e) => {
        if (e.key === "ArrowUp") player.dy = -player.speed;
        else if (e.key === "ArrowDown") player.dy = player.speed;
    });
  
    document.addEventListener('keyup', () => {
        player.dy = 0;
    });
  
    canvas.addEventListener('mousemove', (e) => {
        const canvasPosition = canvas.getBoundingClientRect();
        const mouseY = e.clientY - canvasPosition.top;
        player.y = mouseY - player.height / 2;
    });
  
    gameLoop();
  }
  
  