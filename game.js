const readlineSync = require('readline-sync');
const fs = require("fs");

// load puzzles
var puzzleFile = fs.readFileSync("puzzles.json");
var puzzles = JSON.parse(puzzleFile);

console.log("debug: loaded "+puzzles.length+" puzzles")

var puzzleNum = getRandomInt(0, puzzles.length)

console.log("===ENCRYPTED MESSAGE===");
console.log(puzzles[puzzleNum].message);

var isAnswered = false;

while (!isAnswered) {
    var userAnswer = readlineSync.question('Enter your answer: ');
    if (userAnswer == puzzles[puzzleNum].answer) {
        console.log("CORRECT");
        isAnswered = true;
    }
    else {
        console.log("INCORRECT");
    }
}

// utility functions
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}