const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  fs.readFile("./text.txt", (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end("error loading page");
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log("server running");
});
