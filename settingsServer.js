const express = require("express");
const app = express();
const path = require("path");
const port = 5001;

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Serve files from the 'pages' directory
app.use("/pages", express.static(path.join(__dirname, "pages")));

// Serve login.html as the default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/settings.html"));
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});