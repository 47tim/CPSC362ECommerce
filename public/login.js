function handleLogin() {
  var password = document.getElementById("password-input").value;
  var userName = document.getElementById("username-input").value;

  console.log(userName);
  console.log(password);

  window.location.href = "pages/locker.html";
}
