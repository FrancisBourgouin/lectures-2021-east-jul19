const fs = require('fs')

const readFileCallback = (error, data) => { // callback
  console.log(data)
  console.log("Done!")
}

fs.readFile(
  './fridge.txt',  // file path
  { encoding: "utf8" },  // options
  readFileCallback
)

console.log("Reading files!")


fs.readFile('./fridge.txt', { encoding: 'utf8' }, (err, data) => {
  console.log("Read first file")
  fs.readFile('./freezer.txt', { encoding: 'utf8' }, (err, data) => {
    console.log("Read second file")
    fs.readFile('./pantry.txt', { encoding: 'utf8' }, (err, data) => {
      console.log("Read third file")
      console.log("read everything")
    })
  })
})
