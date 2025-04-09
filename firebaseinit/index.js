import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => {
  const { name, age } = req.body;
  console.log(req);
  res.send(name + " " + age);
});

app.put;

app.listen(3000, () => {
  console.log("server running");
});
