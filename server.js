const express = require("express");
const app = express();
const path = require("path");
const port = 5001;
// const connectDB = require("./db");

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Serve files from the 'pages' directory
app.use("/pages", express.static(path.join(__dirname, "pages")));

// app.use(express.json())

// app.use("/api/auth", require("./Auth/route"))

// Serve login.html as the default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/login.html"));
});

// connectDB();

 const server = app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

// process.on("unhandledRejection", err => {
//   console.log(`An error occurred: ${err.message}`)
//   server.close(() => process.exit(1))
// })

// module.exports = server;

