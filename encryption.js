const chalk = require('chalk');

// encoding libraries
const morse = require("morse");
const MonoAlphabeticCipher = require('text-ciphers').MonoAlphabeticCipher;
const monoalphabeticCipher1 = new MonoAlphabeticCipher({
    substitution: MonoAlphabeticCipher.createKeyByShift(-5)
});

const monoalphabeticCipher2 = new MonoAlphabeticCipher({
    substitution: MonoAlphabeticCipher.createKeyByShift(-3)
});

const utility = require("./utility")

const numberOfEncryptionMethods = 1;

const letterToNumberRed = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26
};

exports.randomEncryption = function(messageToEncode) {
    let encNum = utility.getRandomInt(1, numberOfEncryptionMethods + 1);
    console.log("debug: random encryption = "+encNum)
    // console.log(messageToEncode);
    let encodedMessage = '';
    switch (encNum) {
        case 1:
            let msg = messageToEncode;
            Object.keys(letterToNumberRed).forEach(function(key) {
                let value = letterToNumberRed[key];
                msg = msg.replace(new RegExp(key, 'g'), value + " ");
            }, this);

            // check for all even, if so multiply by 2
            let numberArray = msg.split(" ");
            let allEven = true;
            numberArray.forEach(function(n) {
                if (utility.isOdd(n)) { allEven = false }
            }, this);

            if (allEven) {
                console.log('debug: multiplying all by 2');

                let origNumArray = msg.split(" ");
                let newNumArray = [];
                
                console.log(origNumArray);
                origNumArray.forEach(function(n) {
                    if(n > 0) {
                        newNumArray.push(n*2);
                    }
                }, this);
                console.log(newNumArray);
                msg = newNumArray.join(" ");
            }

            // chance of appending random repeating number
            if (Math.floor(Math.random()*2) == 1) {
                console.log('debug: inserting repeating number')
                let repeatingNum = utility.getRandomInt(1, 10);
                let origNumArray = msg.split(" ");
                // console.log(origNumArray);

                let newNumArray = [];
                origNumArray.forEach(function(n) {
                    if(n > 0) {
                        newNumArray.push(n);
                        newNumArray.push(repeatingNum);
                    }
                }, this);
                // console.log(newNumArray);
                msg = newNumArray.join(" ");
            }

            encodedMessage = chalk.red(msg);
            break;

        case 2:
            encodedMessage = chalk.yellow(monoalphabeticCipher2.encipher(messageToEncode));
            break;
    
        case 3:
            encodedMessage = morse.encode(messageToEncode);
            break;

        case 4:
            encodedMessage = chalk.blue(monoalphabeticCipher1.encipher(messageToEncode));
            break;

        default:
            console.log("invalid random encryption - this shouldn't happen, check the numberOfEncryptionMethods value");
            break;
    }
    return encodedMessage;
}