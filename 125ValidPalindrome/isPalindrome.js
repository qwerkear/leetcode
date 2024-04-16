/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let cleanString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    let left = 0;
    let right = cleanString.length - 1;

    if (!cleanString) {
        return true
    }

    while (left < right) {
        if (cleanString[left] != cleanString[right]) {
            return false
        }
        left++
        right--
    }
    return true
};
//truly a master class in how to make an annoying question using edge cases exclusively.
console.log(isPalindrome("A man, a plan, a canal: Panama"))

//You can also do this, but two pointer was the point:
var isPalindrome = function (s) {
    let str = s.replace(/[^A-Z0-9a-z]/g, '').toLowerCase()
    return str === str.split('').reverse().join('')
};