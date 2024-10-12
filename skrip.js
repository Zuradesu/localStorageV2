let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let loginButton =  document.getElementById("loginButton");
let logoutButton =  document.getElementById("logoutButton");

loginButton.addEventListener("click", onLogin);
logoutButton.addEventListener("click", onLogout);

function onLogin() {
    // console.log("cie yang mau login");
    console.log(usernameInput.value);

    if(usernameInput.value == "admin" && passwordInput.value == "admin") {
        localStorage.setItem("role", "admin");
        window.location.href = "admin.html";
    } else {
        localStorage.setItem("role", "member");
        window.location.href = "member.html";
    }
}

function onLogout() {
    localStorage.clear();
    location.href = "index.html";
}

