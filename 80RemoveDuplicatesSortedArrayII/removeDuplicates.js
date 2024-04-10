/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let validIndex = 0
    let lastValue
    let valueCount = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != lastValue){
            nums[validIndex] = nums[i]
            lastValue = nums[i]
            validIndex += 1
            valueCount = 0 
        }else if(valueCount < 1){
            nums[validIndex] = nums[i]
            lastValue = nums[i]
            validIndex += 1
            valueCount += 1
        }
    }


    return validIndex
};

removeDuplicates([1,1,1,2,2,3])