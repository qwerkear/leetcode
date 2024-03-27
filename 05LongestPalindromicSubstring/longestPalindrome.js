/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    //TO return a substring palindrome, use two pointers that represent string indexes
    //  retrieve the substring when they match and incremnt/decrement the pointers away from the start
    let checkPalindrome = (l, r) => {
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            l -= 1
            r += 1
        }
        return s.substring(l + 1, r)
    }

    //TO find the longest palindrome, check for palindromes in the provided string
    //  start at the same index in case the provided string has odd length
    //  start at i and i + 1 in case the provided string has even length
    let result = ""
    for (let i = 0; i < s.length; i++) {
        //TODO: refactor?
        substring1 = checkPalindrome(i, i)
        if (substring1.length > result.length) {
            result = substring1
        }
        substring2 = checkPalindrome(i, i + 1)
        if (substring2.length > result.length) {
            result = substring2
        }
    }
    return result
};

console.log(longestPalindrome('babad'))
