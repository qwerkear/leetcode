/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let leftCount = 0
    let max = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ')') {
            --leftCount
            continue
        }

        if (s[i] == '(') {

            ++leftCount

            if (max < leftCount) {
                max = leftCount
            }
        }
    }
    return max
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))


//I originally wrote this, but I realized it can be optimized to above to be more performant.
//This one feels easier to read with less nesting and no continue.
var maxDepthNaive = function (s) {
    let leftCount = 0
    let max = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            ++leftCount
        }

        if (s[i] == ')') {
            --leftCount
        }

        if (max < leftCount) {
            max = leftCount
        }
    }
    return max
};