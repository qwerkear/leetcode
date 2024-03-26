//I tried to see if finding the shortest possible prefix saved anything
//My guess is that only if the string inputs are long does this really do much
//One day I will have to figure out how to test throughput of these.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = ''
    let shortestPrefixLength = strs.reduce((a, b) => a.length <= b.length ? a : b).length

    for (let i = 0; i < shortestPrefixLength; i++) {
        const character = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== character) {
                return prefix
            }
        }
        prefix += character
    }
    return prefix
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))