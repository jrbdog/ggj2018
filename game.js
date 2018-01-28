const chalk = require('chalk');
// const clui = require('clui');
const readlineSync = require('readline-sync');
const fs = require("fs");

const encryption = require('./encryption')

const utility = require('./utility')

// load puzzles
//var puzzleFile = fs.readFileSync("puzzles.json");
//var puzzles = JSON.parse(puzzleFile);

// load words
var words = fs.readFileSync('words_alpha.txt').toString().split("\n");
console.log("Loaded "+ words.length + " words");

if ((Math.random * 100) > 25) {
    var randomWord = words[utility.getRandomInt(0, words.length)];
    // console.log("debug: word is [" + randomWord + "]");
    encodedMsg = encryption.randomEncryption(randomWord);
} else {
    var randomWord = utility.getRandomInt(5, 31).toString(2);
    encodedMsg = encryption.binaryEncryption(randomWord);
}


//encodedMsg = morse.encode(randomWord);

console.log(chalk.cyan("===INCOMING TRANSMISSION==="));
console.log(encodedMsg);

var isAnswered = false;

while (!isAnswered) {
    var userAnswer = readlineSync.question('Enter your answer: ');
    if (userAnswer == randomWord) {
        console.log(chalk.green("CORRECT"));
        isAnswered = true;
    }
    else {
        console.log(chalk.red("INCORRECT"));
    }
}
