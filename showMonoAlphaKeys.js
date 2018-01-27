const MonoAlphabeticCipher = require('text-ciphers').MonoAlphabeticCipher;

const monoalphabeticCipher1 = new MonoAlphabeticCipher({
    substitution: MonoAlphabeticCipher.createKeyByShift(-5)
});

const monoalphabeticCipher2 = new MonoAlphabeticCipher({
    substitution: MonoAlphabeticCipher.createKeyByShift(-3)
});

console.log(monoalphabeticCipher1.substitution);
console.log("abcdefghijklmnopqrstuvwxyz");

console.log("");

console.log(monoalphabeticCipher2.substitution);
console.log("abcdefghijklmnopqrstuvwxyz");

