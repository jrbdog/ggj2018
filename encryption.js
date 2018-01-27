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

const numberOfEncryptionMethods = 3;

exports.randomEncryption = function(messageToEncode) {
    let encNum = utility.getRandomInt(1, numberOfEncryptionMethods + 1);
    console.log("debug: random encryption = "+encNum)
    // console.log(messageToEncode);
    let encodedMessage = '';
    switch (encNum) {
        case 1:
            encodedMessage = chalk.red(monoalphabeticCipher1.encipher(messageToEncode));
            break;

        case 2:
            encodedMessage = chalk.yellow(monoalphabeticCipher2.encipher(messageToEncode));
            break;
    
        case 3:
            encodedMessage = morse.encode(messageToEncode);
            break;

        default:
            console.log("invalid random encryption - this shouldn't happen, check the numberOfEncryptionMethods value");
            break;
    }
    return encodedMessage;
}