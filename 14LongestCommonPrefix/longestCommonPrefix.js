/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = strs[0]
    let prefixLength = prefix.length

    for (let i = 1; i < strs.length; i++) {
        let currentStrs = strs[i]
        while (prefix !== currentStrs.substring(0, prefixLength)) {
            prefixLength--
            if (prefixLength === 0) {
                return ''
            }
            prefix = prefix.substring(0, prefixLength)
        }
    }
    return prefix
};

//I'm wondering what "easy" means in leetcode, this actually feels fairly complicated

console.log(longestCommonPrefix(["flower", "flow", "flight"]))