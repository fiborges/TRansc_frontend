<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Neon Pong</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background: #000 url('brick-wall-dark.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #fff;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }
        .nav {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 20px;
            background: rgba(0,0,0,0.7);
        }
        .nav a {
            color: #fff;
            text-decoration: none;
            margin-right: 15px;
            font-size: 18px;
            transition: all 0.3s ease;
            border: 2px solid #0ff;
            padding: 8px 20px;
            border-radius: 20px;
        }
        .nav a:hover {
            background-color: #0ff;
            color: #000;
            box-shadow: 0 0 15px #0ff;
        }
        .content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
        }
        .about-title {
            font-size: 48px;
            color: #0ff;
            text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
            margin-bottom: 20px;
        }
        .about-content {
            max-width: 800px;
            font-size: 18px;
            line-height: 1.6;
            color: #ddd;
            margin-bottom: 30px;
            text-align: left;
        }
    </style>
</head>
<body>
    <nav class="nav">
        <a href="#" onclick="navigateTo('home')">Home</a>
        <a href="#" onclick="navigateTo('about')">About</a>
        <a href="#" onclick="navigateTo('login')">Login</a>
        <a href="#" onclick="navigateTo('register')">Register</a>
    </nav>
    <div class="content">
        <h1 class="about-title">About Neon Pong</h1>
        <div class="about-content">
            <p>Welcome to Neon Pong, a modern reimagining of the classic arcade game that started it all!</p>
            <p>Neon Pong takes the timeless gameplay of the original Pong and injects it with a vibrant, neon-soaked aesthetic that's sure to dazzle your senses. Our goal is to provide a nostalgic yet fresh gaming experience that appeals to both veteran gamers and newcomers alike.</p>
            <p>Features of Neon Pong include:</p>
            <ul>
                <li>Classic Pong gameplay with a neon twist</li>
                <li>Online multiplayer matches</li>
                <li>Leaderboards to track your progress</li>
                <li>Customizable paddles and effects</li>
                <li>Regular tournaments with exciting prizes</li>
            </ul>
            <p>Whether you're looking to relive the glory days of arcade gaming or experience the thrill of Pong for the first time, Neon Pong offers an electrifying experience that's hard to put down. Get ready to dive into the neon-lit world of competitive paddling!</p>
        </div>
    </div>
    <script>
        function navigateTo(page) {
            if (page === 'home') {
                window.location.href = 'index.html';
            } else if (page === 'about') {
                // Already on the about page, no action needed
            } else if (page === 'login') {
                // Implement login page navigation
            } else if (page === 'register') {
                // Implement register page navigation
            }
        }
    </script>
</body>
</html>