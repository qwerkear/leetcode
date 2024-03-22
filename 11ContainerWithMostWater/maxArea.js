/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let currentMaxArea = 0
    let left = 0
    let right = height.length - 1
    while(right != left){
        let minHeight = Math.min(height[left], height[right])
        let distance = right - left
        currentMaxArea = Math.max(currentMaxArea, distance * minHeight)
        if(height[right] > height[left]){
            left++
        } else {
            right--
        }
    }
    return currentMaxArea
    
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))