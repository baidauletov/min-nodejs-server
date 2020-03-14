const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), err => {
//   if (err) {
//     throw err;
//   }

//   console.log("Dir created");
// });

const filePath = path.join(__dirname, "test", "text.txt");

// fs.appendFile(filePath, "\nHello NodeJS(fs)", err => {
//   if (err) {
//     throw err;
//   }

//   console.log("File created");
// });

fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }

  console.log("Content: ", content);
});
