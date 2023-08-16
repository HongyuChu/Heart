function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "user123" && password === "pass123") {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('heart-container').style.display = 'flex';
    } else {
        alert("Incorrect username or password!");
    }
}