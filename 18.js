const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request was made to : " + req.url);
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  const obj = {
    name: "john",
    age: 34,
    city: "delhi",
  };
  res.write(JSON.stringify(obj));
  res.end();
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
