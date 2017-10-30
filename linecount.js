//relevant for question 3 of the homework


var fs = require('fs')
// console.log(fs)

// synchronous file read
// the program will wait until we finish reading the file, and then it will return the contents of the file.
var notesText = fs.readFileSync(process.argv[2], 'utf-8')

var newLines = notesText.split('\n')

console.log(newLines.length)