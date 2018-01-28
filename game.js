// console.log(window.document);

const chalk = require('chalk');
const encryption = require('./encryption')
const utility = require('./utility')

import { words } from './words';

var encodedMsg = '';

if ((Math.random() * 100) > 25) {
    var randomWord = words[utility.getRandomInt(0, words.length)];
    // console.log("debug: word is [" + randomWord + "]");
    encodedMsg = encryption.randomEncryption(randomWord);
} else {
    var randomWord = utility.getRandomInt(5, 31).toString(2);
    encodedMsg = encryption.binaryEncryption(randomWord);
}

//encodedMsg = morse.encode(randomWord);

setTimeout(function(){ window.document.getElementById('transmissionText').innerHTML = "<p class='cyan'>===INCOMING TRANSMISSION===</p>"+encodedMsg; }, 16000);
setTimeout(function(){ window.document.getElementById('transmissionInput').style.display = "block" }, 17000);

console.log(chalk.cyan("===INCOMING TRANSMISSION==="));
console.log(encodedMsg);

var inputField = window.document.getElementById('userAnswerField');
console.log(inputField);


window.testFunc = function() {
    alert("test passed");
}

var checkAnswer = function() {
    console.log("checking answer");
    var userAnswer = window.document.getElementById('userAnswerField').value
    if (userAnswer == randomWord) {
        window.document.getElementById('transmissionStatus').innerHTML = "<p class='green'>CORRECT</p>"
        isAnswered = true;
    }
    else {
        window.document.getElementById('transmissionStatus').innerHTML = "<p class='red'>INCORRECT</p>"
        setTimeout(function(){ window.document.getElementById('transmissionStatus').innerHTML = "" }, 2000);
    }
}

function addEvent(el, type, handler) {
    if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}

window.checkAnswer = checkAnswer;
addEvent(inputField, 'change', window.checkAnswer);
// function removeEvent(el, type, handler) {
//     if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
// }