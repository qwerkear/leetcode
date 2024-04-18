/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let currentPosition = 0
    let jumps = 0

    while (currentPosition < nums.length - 1) {
        let localMax = 0
        let maxIndex = currentPosition
        for (let i = 1; i <= nums[currentPosition]; i++) {
            if (currentPosition + i >= nums.length - 1) {
                return jumps + 1
            }

            if (currentPosition + i + nums[i + currentPosition] > localMax) {
                localMax = currentPosition + i + nums[i + currentPosition]
                maxIndex = currentPosition + i
            }
        }
        currentPosition = maxIndex
        jumps++
    }
    return jumps
};

jump([2, 3, 1])