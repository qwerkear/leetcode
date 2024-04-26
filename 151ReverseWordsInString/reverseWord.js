/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let sArray = s.split(' ')
    let result = ''

    for (let i = sArray.length - 1; i >= 0; i--) {
        if (sArray[i]) {
            result = result ? result.concat(' ', sArray[i]) : result.concat(sArray[i])
            //This is more memory efficient than calling trim() at the end
        }
    }

    return result
};