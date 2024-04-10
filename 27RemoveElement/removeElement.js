/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};

removeElement([0,1,2,2,3,0,4,2], 2)

//this moves the indexes into the correct spot.

//index keeps track of occurences of val
//meaning, if nums[i] == val, index does not change; index keeps track of the next spot in the final array.
//when you find a non-val value, put it where index points to.