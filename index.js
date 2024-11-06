
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
      window.location.href = "landing.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
