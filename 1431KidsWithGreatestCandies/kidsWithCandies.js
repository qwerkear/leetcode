/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies)
    let result = []

    for (let i in candies) {
        if (candies[i] + extraCandies >= max) {
            result[i] = true
        } else {
            result[i] = false
        }
    }

    return result
};

//Using result.push() is noticably slower than just referencing the result array index