/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = []
    let findCombinations = (currentCandidatesIndex, currentCombi, total) => {
        if (total == target) {
            result.push([...currentCombi])
            return
        }
        if (currentCandidatesIndex >= candidates.length || total > target) {
            return
        }

        currentCombi.push(candidates[currentCandidatesIndex])
        findCombinations(currentCandidatesIndex, currentCombi, total + candidates[currentCandidatesIndex])
        currentCombi.pop()
        findCombinations(currentCandidatesIndex + 1, currentCombi, total)

    }

    findCombinations(0, [], 0)

    return result
};

console.log(combinationSum([2, 3, 6, 7], 7))
//[2,3,5], 8
//[2,3,6,7], 7

//This appears to be a bit slow