// Write a node js program for reading and writing into file using pipes.

const fs = require("fs");
const readStream = fs.createReadStream("./1.txt", "utf-8");
const writeStream = fs.createWriteStream("./2.txt", "utf-8");
readStream.pipe(writeStream);
