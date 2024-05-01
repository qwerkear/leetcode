/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let sArray = s.split(' ')
    let patternMap = new Map()
    let sMap = new Map()

    if (pattern.length != sArray.length) {
        return false
    }
    for (let i = 0; i < pattern.length; i++) {
        if ((patternMap.has(pattern[i]) && patternMap.get(pattern[i]) !== sArray[i]) || (sMap.has(sArray[i]) && sMap.get(sArray[i]) !== pattern[i])) {
            return false
        }
        patternMap.set(pattern[i], sArray[i])
        sMap.set(sArray[i], pattern[i])
    }
    return true
};

//There's real eye roller here: we can't use javascript objects for patternMap and sMap because one of the examples uses 'constructor'
//which confuses JavaScript because it's a built in property meaning the sMap['constructor'] comes back with a truthy function instead
//of undefined.