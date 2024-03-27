/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0
    while (x !== 0) {
        let digit = x % 10 // get last digit
        x = (x / 10) | 0 // equivalent to Math.floor(x / 10)
        if (result > Math.pow(2, 31) / 10 || (result === Math.pow(2, 31) / 10 && digit > 7)) return 0
        if (result < Math.pow(-2, 31) / 10 || (result === Math.pow(-2, 31) / 10 && digit < -8)) return 0
        result = result * 10 + digit;
    }
    return result
};