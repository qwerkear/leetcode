/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let result = []
    const nums = []
    for (let i = 1; i <= n; i++) {
        nums.push(i)
    }

    const backtrack = (currentIndex, currentCombo) => {
        if (currentCombo.length == k) {
            result.push([...currentCombo])
            return
        }
        for(let i = currentIndex; i < nums.length; i++){
            currentCombo.push(nums[i])
            backtrack(i + 1, currentCombo)
            currentCombo.pop()

        }

    }
    backtrack(0, [])
    return result
};

console.log(combine(4, 2))