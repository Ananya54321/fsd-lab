// Write an ejs program to display contact information

const express = require("express");
const path = require("path");

const app = express();
app.set("view enginer", "ejs");
app.set("views", path.join(__dirname, "views"));

const contactinfo = [
  {
    name: "john",
    phone: "1234567890",
    email: "john@gmail.com",
  },
  {
    name: "sara",
    phone: "1234567890",
    email: "sara@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.render("index.ejs", { contactinfo });
});

app.listen(3000);
