/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length == 1) {
        return true
    }
    let currentPosition = 0
    while (currentPosition !== nums.length - 1) {
        if (nums[currentPosition] == 0 || currentPosition > nums.length) {

            return false
        }

        let localMax = 0
        let localMaxIndex = 0
        for (let i = 1; i <= nums[currentPosition]; i++) {
            if (currentPosition + i == nums.length - 1) {
                return true
            }

            //need to re-read this 100 times
            if (currentPosition + i + nums[currentPosition + i] >= localMax) {
                localMax = currentPosition + i + nums[currentPosition + i]

                localMaxIndex = currentPosition + i
            }
        }
        if (localMaxIndex == 0) {
            return false
        }
        currentPosition = localMaxIndex

    }

    return true
};

console.log(canJump([4, 2, 0, 0, 1, 1, 4, 4, 4, 0, 4, 0]))
//The above solution has time complexity of O(n^2)

//Here is the optimal solution using greedy algorithm,

//This has time complexity of O(n)

var canJump = function(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }

    return false;
};