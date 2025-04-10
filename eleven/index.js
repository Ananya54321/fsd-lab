// Write NodeJS program to implement the following using fs module:
// 1. Deleting file
// 2. Creating and Deleting directory
// 3. Deleting file within a directory
// 4. Removing the file and then removing the directory
// 5. creating a directory and writing the data to the file within the directory
// 6. Create a server that listens to client requests using http module

const fs = require("fs");

// deleting file
fs.unlink("./one.txt", (err) => {
  if (err) console.log(err);
  else console.log("file deleted successfully");
});

// creating directory
if (!fs.existsSync("./newdir")) {
  fs.mkdir("./newdir", (err) => {
    if (err) console.log(err);
    else console.log("directory created successfully");
  });
}

// deleting directory
if (fs.existsSync("./newdir")) {
  fs.rmdir("./newdir", (err) => {
    if (err) console.log(err);
    else console.log("directory deleted successfully");
  });
}

// removing the file and then removing the directory
fs.unlink("./temp/file.txt", (err) => {
  if (err) console.log(err);
  else {
    console.log("file deleted successfully");
    fs.rmdir("./temp", (err) => {
      if (err) console.log(err);
      else console.log("directory deleted successfully");
    });
  }
});

// creating a directory and writing the data to the file within the directory

if (!fs.existsSync("./newdir")) {
  fs.mkdir("./newdir", (err) => {
    if (err) console.log(err);
    else {
      fs.writeFile("./newdir/file.txt", "hello world", (err) => {
        if (err) console.log(err);
        else console.log("file created successfully");
      });
    }
  });
}
