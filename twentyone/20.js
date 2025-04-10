// Create Express server listening requests at port 3000. Add different end points to provide access to the resources

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the about page");
});
app.get("/contact", (req, res) => {
  res.send("Welcome to the contact page");
});

app.listen(3000, () => {
  console.log("server running");
});
