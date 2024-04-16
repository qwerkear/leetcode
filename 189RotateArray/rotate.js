/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (k == 0 || nums.length == 1) {
        return nums
    }
    let moves = k % nums.length
    if (moves > 0) {
        let spliced = nums.splice(-moves)
        nums.splice(0, 0, ...spliced)
    }

};

rotate([1, 2], 2)