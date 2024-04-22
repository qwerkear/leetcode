/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0
    let right = height.length - 1
    //we want to keep track of the maximums because it defines the "peaks" in which water can rest
    //so the "previous" maximums are what determine the amount water at that space
    let maxLeft = height[left]
    let maxRight = height[right]
    let water = 0
    while (left < right) {
        if (maxRight > maxLeft) {
            left++
            if (maxLeft - height[left] > 0) {
                water += maxLeft - height[left]
            }

            if (height[left] > maxLeft) {
                maxLeft = height[left]
            }
        } else {
            right--
            if (maxRight - height[right] > 0) {
                water += maxRight - height[right]
            }

            if (height[right] > maxRight) {
                maxRight = height[right]
            }
        }
    }

    return water
};
//I wonder if there is a way to refactor this so it isn't a big if/else statement
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))