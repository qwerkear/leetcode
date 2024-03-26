/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0
    let current, next

    for (let i = 0; i < s.length; i++) {
        current = romanNumerals[s[i]]
        next = romanNumerals[s[i + 1]]

        if (next && current < next) {
            total -= current
        } else {
            total += current
        }
    }

    return total
}