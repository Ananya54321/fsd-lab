import express from "express";
import mongoose from "mongoose";
import User from "./userSchema.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

async function main() {
  console.log("uri:", process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI);
}

app.get("/users", async (req, res) => {
  const users = await User.find({});
  console.log(users);
  res.send("" + users);
});

app.post("/users", async (req, res) => {
  const { name, age } = req.body;
  const user = new User({
    name: name,
    age: age,
  });
  await user.save();
  res.send("user created", user);
});

app.put("/users", async (req, res) => {
  const { id, newuser } = req.body;
  await User.findByIdAndUpdate(id, newuser);
  console.log(newuser);
  res.send("" + newuser);
});

app.delete("/users", async (req, res) => {
  const { id } = req.body;
  const result = await User.findByIdAndDelete(id);
  console.log("user deleted successfully");
  res.send("" + result);
});

main().then(() => console.log("connected to db"));

app.listen(3000, () => console.log("server is running"));
