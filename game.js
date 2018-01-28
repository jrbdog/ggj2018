// console.log(window.document);

// const chalk = require('chalk');
const encryption = require('./encryption')
const utility = require('./utility')

import { words } from './words';
import { story, preStory } from './story';

var encodedMsg = '';

console.log("init");
var randomWord = '';
var encodedMsg = '';
var solvedTransmissions = 0;

var getTransmission = function() {
    console.log("receiving transmission...");
    
    // clear out the previous transmission
    window.document.getElementById('transmissionText').innerHTML = "";
    window.document.getElementById('transmissionStatus').innerHTML = "";
    window.document.getElementById('transmissionInput').style.display = "none";
    window.document.getElementById('userAnswerField').value = "";

    // randomly decide between word or binary challenge
    if ((Math.random() * 100) > 25) {
        randomWord = words[utility.getRandomInt(0, words.length)];
        // console.log("debug: word is [" + randomWord + "]");
        encodedMsg = encryption.randomEncryption(randomWord);
    } else {
        randomWord = utility.getRandomInt(5, 31).toString(2);
        encodedMsg = encryption.binaryEncryption(randomWord);
    }

    setTimeout(function(){ window.document.getElementById('transmissionText').innerHTML = "<p class='cyan'>===INCOMING TRANSMISSION===</p>"+encodedMsg; }, 1000);
    setTimeout(function(){ window.document.getElementById('transmissionInput').style.display = "block" }, 1500);

    if(preStory[solvedTransmissions] != undefined) {
        window.document.getElementById('preStoryContent').innerHTML = preStory[solvedTransmissions];
    } else {
        window.document.getElementById('preStoryContent').innerHTML = "";
    }

    console.log("===INCOMING TRANSMISSION===");
    console.log(encodedMsg);
    console.log(randomWord);
    
    // var inputField = window.document.getElementById('userAnswerField');
    // console.log(inputField);
}

var checkAnswer = function() {
    console.log("checking answer");
    var userAnswer = window.document.getElementById('userAnswerField').value;
    if (userAnswer == randomWord) {
        window.document.getElementById('transmissionStatus').innerHTML = "<p class='green'>CORRECT</p><br /><p><a class='nextTransmissionButton' onclick='getTransmission()'>Next Target</a></p>"
        solvedTransmissions = solvedTransmissions + 1;
        if(story[solvedTransmissions] != undefined) {
            window.document.getElementById('storyContent').innerHTML = story[solvedTransmissions];
        } else {
            window.document.getElementById('storyContent').innerHTML = "";
        }
        
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
window.getTransmission = getTransmission;
var inputField = window.document.getElementById('userAnswerField');
addEvent(inputField, 'change', window.checkAnswer);

// window.setTimeout(console.log("TEST"), 16000);
window.setTimeout(getTransmission, 16000);

// function removeEvent(el, type, handler) {
//     if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
// }