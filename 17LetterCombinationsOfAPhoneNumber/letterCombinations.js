/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let numberMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    let result = []

    let recursiveBackTrack = (i, currentString) => {
        if (currentString.length == digits.length) {
            result.push(currentString)
            return
        }
        for (c of numberMap[digits[i]]) {
            recursiveBackTrack(i + 1, currentString + c)
        }

    }
    if (digits) {
        recursiveBackTrack(0, "")
    }
    return result
};

console.log(letterCombinations("23"))