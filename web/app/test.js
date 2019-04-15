const fs = require("fs");
const path = require("path");

const getFilesArray = (jsonPath, suffix) => {
  let jsonFiles = [];

  function findFile(dpath) {
    let files = fs.readdirSync(dpath);
    files.forEach(function(item, index) {
      let fPath = path.join(dpath, item);
      let stat = fs.statSync(fPath);
      if (stat.isDirectory() === true) {
        findFile(fPath);
      }
      if (stat.isFile() === true) {
        if (suffix instanceof Array && suffix.includes(path.extname(item))) {
          jsonFiles.push(fPath);
        }
      }
    });
  }
  findFile(jsonPath);
  return jsonFiles;
};

console.log(getFilesArray(__dirname, ['.js']));
