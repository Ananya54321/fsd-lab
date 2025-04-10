import express from "express";
import ejs from "ejs";
import { dirname, filename } from "path";
import path from "path";

const app = express();
const __dirname = dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const users = [
  {
    name: "john",
    age: 34,
  },
  {
    name: "sara",
    age: 23,
  },
  {
    name: "siri",
    age: 65,
  },
];

app.get("/", (req, res) => {
  res.render("index.ejs", users);
});

app.listen(3000, () => console.log("server running"));
