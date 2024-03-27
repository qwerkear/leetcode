/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const string = x.toString()
    let backwardsString = []

    for (let i = string.length - 1; i >= 0; i--) {
        backwardsString.push(string[i])
    }

    const value = string == newString.join('') ? true : false

    return value

};

//this will do the same thing, but is slower and more memory intensive
//It's easier to read and understand too.
//TODO: Which is better?
var isPalindrome2 = function (x) {
    const string = x.toString();
    const reversedString = string.split('').reverse().join('');
    return string === reversedString;

};