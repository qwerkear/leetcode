/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []

    const backtrack = (currentIndex, currentNums) =>{
        if(!result.includes(currentNums)){
            result.push([...currentNums])
            console.log(result)
        }

        for(let i = currentIndex; i < nums.length; i++){
            if(currentNums.includes(nums[i])){
                return
            }
            currentNums.push(nums[i])
            backtrack(currentIndex + 1, currentNums)
            currentNums.pop()
        }

    }

    backtrack(0,[])
    return result
};

subsets([1,2,3])