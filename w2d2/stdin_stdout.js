const readline = require('readline');
const fs = require('fs')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the path of the file you want to read?', (path) => {

  fs.readFile(
    path,  // file path
    { encoding: "utf8" },  // options
    (error, data) => { // callback
      if (error) {
        return console.log(error)
      }
      console.log(data)
      console.log("Done!")
    }
  )

  rl.close();
});