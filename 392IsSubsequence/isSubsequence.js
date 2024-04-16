/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length == 0) {
        return true
    }
    if (t.length == 0) {
        return false
    }
    let sPointer = 0

    for (let i = 0; i < t.length; i++) {
        if (t[i] == s[sPointer]) {
            sPointer++
        }

        if (sPointer == s.length) {
            return true
        }
    }
    return false
};

console.log(isSubsequence('abc', 'ahbgdc'))