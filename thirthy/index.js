// Read the weather forecast details for a given city and display details like date and temp in a table
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded()); // for getting form data

app.set("view enginer", "ejs");
app.set("views", path.join(__dirname, "views"));

const APIkey = process.env.OPENWEATHER_API;

app.post("/", async (req, res) => {
  const { cityname } = req.body;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`
  );
  const data = await response.json();
  const { temp, pressure, humidity } = data.main;
  const details = {
    cityname,
    temp,
    pressure,
    humidity,
  };
  // res.send(details);
  res.render("result.ejs", { details });
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => console.log("server running"));
