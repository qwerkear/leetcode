/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let products = [1]

    for (let i = 1; i < nums.length; i++) {
        products.push(nums[i - 1] * products[i - 1])
    }

    let previous = 1

    for (let j = nums.length - 1; j >= 0; j--) {
        products[j] = previous * products[j]
        previous = nums[j] * previous
    }

    return products

};

productExceptSelf([1, 2, 3, 4])

//This is optimal, but it's a bit easier to understand with a more memory intensive solution:

var productExceptSelf = function (nums) {
    let productsOfLeft = [1]
    let productsOfRight = [1]

    for (let i = 1; i < nums.length; i++) {
        productsOfLeft.push(nums[i - 1] * productsOfLeft[i - 1])
    }

    for (let j = nums.length - 1; j > 0; j--) {
        productsOfRight.push(nums[j] * productsOfRight[nums.length - 1 - j])
    }

    productsOfRight.reverse()

    let result = []

    for (let k = 0; k < nums.length; k++) {
        result.push(productsOfLeft[k] * productsOfRight[k])
    }

    return result

};