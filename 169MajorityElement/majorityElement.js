/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = {}
    let majorityMark = Math.ceil(nums.length / 2)
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1

        if (map[num] == majorityMark) {
            return num
        }
    }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))