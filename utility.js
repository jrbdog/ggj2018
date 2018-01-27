exports.getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

exports.isEven = function(n) {
    return n % 2 == 0;
 }
 
exports.isOdd = function(n) {
    return Math.abs(n % 2) == 1;
 }