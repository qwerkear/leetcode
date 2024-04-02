/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []

    const backtrack = (currentIndex, currentNums) =>{
        result.push(currentNums)

        for(let i = currentIndex; i < nums.length; i++){
            let tempNums = [...currentNums]
            tempNums.push(nums[i])
            backtrack(i + 1, tempNums)
        }

    }

    backtrack(0,[])
    return result
};

console.log(subsets([1,2,3]))