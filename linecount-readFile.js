//relevant for question 4 of the homework

var fs = require('fs')
// console.log(fs)

// asynchronous file read
var content
notesText = fs.readFile(process.argv[2], function(err, data){
	console.log('pooooop')
	if (err) {
        throw err
        console.log('goooaaaats')
    } 
    	var newLines = data.split('\n')

		console.log(newLines.length)

})

