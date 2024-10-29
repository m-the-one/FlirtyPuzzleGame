function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const correctPassword = "19march"; // Set your unique password here

    if (passwordInput === correctPassword) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("game-screen").style.display = "block";
    } else {
        document.getElementById("error-message").innerText = "Incorrect password. Try again!";
    }
}

function nextPuzzle() {
    const messages = [
        "You're amazing!",
        "Remember our first date? ❤️",
        "Can't wait to see you again!",
        "Here’s a challenge: Tell me something you love about us!",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = randomMessage;
}
