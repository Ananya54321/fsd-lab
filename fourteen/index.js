// Write a node js program to demonstrate read and write streams

const fs = require("fs");
const readStream = fs.createReadStream("./one.txt", "utf-8");
const writeStream = fs.createWriteStream("./two.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log("chunk\n", chunk);
  writeStream.write(chunk);
});
