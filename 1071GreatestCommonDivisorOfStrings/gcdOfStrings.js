/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    // check if the substrings combined share a common substring
    // if they do, then the string inputs combined should look the same regardless of the order */
    if (str1 + str2 !== str2 + str1) {
        return '';
    }
    let minLength = Math.min(str1.length, str2.length);
    //start with the longest possible divisor
    for (let i = minLength; i > 0; i--) {
        //check if str1 and str2 lengths are divisable with length
        //length i represents length of substring
        if ((str1.length % i === 0) && (str2.length % i === 0)) {
            //return str1 substring up to that length
            return str1.substring(0, i);
        }
    }
};

//This one is actually pretty hard IMO