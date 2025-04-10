const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.set("view enginer", "ejs");
app.set("views", path.join(__dirname, "views"));

const apikey = process.env.OPENWEATHER_API;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", async (req, res) => {
  const { cityname } = req.body;
  console.log(apikey);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${apikey}`
  );
  const data = await response.json();
  console.log(data);
  //   res.json(data);
  res.render("result.ejs", { details: data.list, cityname });
});

app.listen(3000, () => console.log("server running"));
