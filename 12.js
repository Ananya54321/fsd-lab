// Write NodeJS program to implement os, and http module

const os = require("os");
const http = require("http");

// os module
console.log(os.homedir());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.platform());
console.log(os.release());
console.log(os.arch());
console.log(os.uptime());

// http module
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.write("<h1>Welcome</h1>");
  res.end();
});

server.listen(3000, () => console.log("SERVER RUNNING"));
