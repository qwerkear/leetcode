/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let localMin = Infinity
    let total = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < localMin) {
            localMin = prices[i]
        }
        if (i !== 0 && prices[i - 1] < prices[i]) {
            localMin = prices[i]
            total += prices[i] - prices[i - 1]
            localMin = Infinity
        }
    }

    return total

};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))