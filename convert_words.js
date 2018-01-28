const fs = require("fs");
var words = fs.readFileSync('words_alpha.txt').toString().split("\n");
// console.log("Loaded "+ words.length + " words");

var output = "[";
words.forEach(function(element) {
    output += "'" + element + "',";
}, this);

output += "]";

console.log(output)