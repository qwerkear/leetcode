/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArrays = s.trim().split(' ')
    return sArrays.pop().length
};

console.log(lengthOfLastWord("hello world"))