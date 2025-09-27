document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("regConfirmPassword").value;
  const msg = document.getElementById("regMsg");

  if(password !== confirmPassword) {
    msg.innerText = "⚠️ Passwords do not match!";
    msg.className = "text-danger";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if(users.find(u => u.email === email)) {
    msg.innerText = "⚠️ User already exists!";
    msg.className = "text-danger";
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  msg.innerText = "✅ Registration successful! Redirecting...";
  msg.className = "text-success";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
});
