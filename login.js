document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pwd = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.email === email && u.password === pwd);

  if(user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "index.html";
  } else {
    document.getElementById("msg").innerText = "❌ Invalid login!";
    document.getElementById("msg").className = "text-danger";
  }
});
