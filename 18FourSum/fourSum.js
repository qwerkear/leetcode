/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let result = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }
        for (let j = nums.length - 1; j > i; j--) {
            if (j < nums.length - 1 && nums[j] == nums[j + 1]) {

                continue
            }
            let left = i + 1
            let right = j - 1

            while (right > left) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum == target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]])

                    while (left < right && nums[left] == nums[left + 1]) left++; // skip duplicates
                    while (left < right && nums[right] == nums[right - 1]) right--; // skip duplicates
                }

                if (sum > target) {
                    right -= 1

                } else {
                    left += 1

                }
            }
        }


    }
    return result
};

fourSum([2, 2, 2, 2, 2], 8)