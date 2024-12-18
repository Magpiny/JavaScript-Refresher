// Reading a file & WRITING into a file

let { readFile } = require("fs"); // read file contents
let { writeFile } = require("fs");

// Read file contents
readFile("./epson.pdf", "utf-8", (error, text) => {
  if (error) throw error;
  console.log(text);
});

// Write into file->disk
let info = {
  name: "Samuel Wanjare",
  age: 56,
  country: "Kenya",
};

writeFile("./info.json", JSON.stringify(info), (err) => {
  if (err) throw err;
  console.log("File written successfully");
});
