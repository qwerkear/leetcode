/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let left = 0;
    let right = 0;
    let minValue = Infinity;
    let subarraySum = nums[0];

    while(left <= right && right < nums.length){
        if(subarraySum >= target){
            minValue = Math.min(minValue, right-left+1);
            subarraySum -= nums[left];
            left++;
        } else {
            right++;
            subarraySum += nums[right];

        }
    }
    return minValue === Infinity ? 0 : minValue;
};

console.log(minSubArrayLen(4, [1,4,4]))