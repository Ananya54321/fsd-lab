const express = require("express");

const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    name: "john",
    age: 34,
  },
  {
    id: 2,
    name: "sara",
    age: 23,
  },
  {
    id: 3,
    name: "siri",
    age: 65,
  },
  {
    id: 4,
    name: "dave",
    age: 12,
  },
];

// read all operation
app.get("/", (req, res) => {
  res.json(users);
});

// reading particular user data
app.get("/:id", (req, res) => {
  const { id } = req.params;
  if (users.length >= id) res.json(users[id - 1]);
  else res.json("user not found");
});

// create operation
app.post("/", (req, res) => {
  const { name, age } = req.body;
  const user = {
    id: users.length + 1,
    name,
    age,
  };
  users.push(user);
  res.json(users);
});

// update operation
app.put("/", (req, res) => {
  const { id, newuser } = req.body;
  if (users.length >= id) {
    const user = users[id - 1];
    user.name = newuser.name;
    user.age = newuser.age;
  }
  res.json(users);
});

// delete operation
app.delete("/", (req, res) => {
  const { id } = req.body;
  if (users.length >= id) {
    users.splice(id - 1, 1);
  }
  res.json(users);
});

app.listen(3000, () => console.log("server running"));
