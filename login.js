const express = require("express");
const app = express();
const port = 5001;

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("pages/login.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginButton").addEventListener("click", handleLogin);
});

function handleLogin() {
  var userName = document.getElementsByClassName("username").value;
  var password = document.getElementsByClassName("password").value;

  console.log(userName);
  console.log(password);
}
