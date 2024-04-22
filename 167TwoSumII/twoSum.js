/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0
    let right = numbers.length - 1

    while (numbers[left] + numbers[right] !== target) {
        if (numbers[left] + numbers[right] > target) {
            right--
        } else {
            left--
        }
    }

    return [left + 1, right + 1]
};
//This had binary search as a tag, but I'm pretty sure you can't implement this such that it is optimal
twoSum([2, 7, 11, 15], 9)

