const fs = require("fs");
const path = require("path");

// create a folder
// fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created");
// });

// create and write to file
// fs.writeFile(
//   path.join(__dirname, "test", "hello.txt"),
//   "Hello Node.JS Again",
//   (err) => {
//     if (err) throw err;
//     console.log("File created");
//   }
// );

//append to file
// fs.writeFile(
//   path.join(__dirname, "test", "hello.txt"),
//   "Hello Node.JS Again",
//   (err) => {
//     if (err) throw err;
//     console.log("File created");

//     //file append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "\n...me again",
//       (err) => {
//         if (err) throw err;
//         console.log("File appended...");
//       }
//     );
//   }
// );

//read file
// fs.readFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

//rename a file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "test", "helloworld.txt"),
  (err, data) => {
    if (err) throw err;
    console.log("File renamed");
  }
);
