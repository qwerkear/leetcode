/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let validIndex = 0
    let lastValue
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != lastValue) {
            nums[validIndex] = nums[i]
            lastValue = nums[i]
            validIndex += 1
        }
    }

    return validIndex
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])

// This is a cleaner implementation found doing remove duplicates II 
var removeDuplicates = function (nums) {
    let validIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[validIndex++] = nums[i]
        }
    }

    return validIndex
};