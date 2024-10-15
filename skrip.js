// Fungsi untuk menampilkan pesan selamat datang berdasarkan peran
function displayWelcomeMessage(role) {
    const username = localStorage.getItem("username"); // Ambil username dari localStorage
    const welcomeMessage = document.getElementById("welcomeMessage"); // Ambil elemen untuk menampilkan pesan

    if (welcomeMessage && username) {
        if (role === "admin") {
            welcomeMessage.innerText = `Halo Admin ${username} 💞`; // Tampilkan pesan untuk admin
        } else {
            welcomeMessage.innerText = `Member ${username} LOG OUT aja 🫵`; // Tampilkan pesan untuk member
        }
    }
}

// Fungsi untuk menambahkan event listeners
function setupEventListeners() {
    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");

    if (loginButton) {
        loginButton.addEventListener("click", onLogin);
    }
    if (logoutButton) {
        logoutButton.addEventListener("click", onLogout);
    }
}

// Fungsi untuk menangani login
function onLogin() {
    console.log(usernameInput.value);

    if (usernameInput.value === "admin" && passwordInput.value === "admin") {
        localStorage.setItem("role", "admin");
        localStorage.setItem("username", usernameInput.value);
        window.location.href = "admin.html";
    } else if (usernameInput.value === "zura" && passwordInput.value === "zura") {
        localStorage.setItem("role", "admin");
        localStorage.setItem("username", usernameInput.value);
        window.location.href = "admin.html";
    } else {
        localStorage.setItem("role", "member");
        localStorage.setItem("username", usernameInput.value);
        window.location.href = "member.html";
    }
}

// Fungsi untuk menangani logout
function onLogout() {
    localStorage.clear();
    location.href = "index.html";
}

// Inisialisasi saat halaman dimuat
window.onload = function () {
    setupEventListeners(); // Tambahkan event listeners

    // Cek peran dan tampilkan pesan yang sesuai
    const role = localStorage.getItem("role");
    displayWelcomeMessage(role); // Panggil fungsi untuk menampilkan username sesuai peran
};

// Ambil elemen input di sini agar bisa diakses di fungsi onLogin
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
