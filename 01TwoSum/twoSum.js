/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let remainder = 0
    let result = {}
    for(let i = 0; i <= nums.length; i++){
        remainder = target - nums[i]
        if(remainder in result){
            return [i, result[remainder]]
        }
        result[nums[i]] = i
    }
};

console.log(twoSum([2,7,11,15], 9))