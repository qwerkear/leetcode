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


// The lastValue variable is not necessary because you can always compare nums[i] with nums[validIndex - 1].
// Also, the valueCount variable can be replaced with a check of validIndex > 1 and nums[validIndex - 2] != nums[i].
// This way, you ensure that each unique element appears at most twice.

// Here is an optimized solution:

var removeDuplicatesClean = function(nums) {
    let validIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (validIndex < 2 || nums[i] != nums[validIndex - 2]) {
            nums[validIndex++] = nums[i];
        }
    }
    return validIndex;
};

removeDuplicatesClean([1,1,1,2,2,3])
