/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let candy = new Array(ratings.length)
    candy.fill(1)
    //if your right neighbor has a higher rating than you, increment your neighbor
    for (let i = 0; i < ratings.length - 1; i++) {
        if (ratings[i] < ratings[i + 1]) {
            candy[i + 1] = candy[i] + 1
        }
    }

    console.log(candy)
    //if your left neighbor has a higher rating and less or equal candy
    //make sure they have more than you
    for (let j = ratings.length; j > 0; j--) {
        if (ratings[j - 1] > ratings[j] && candy[j - 1] <= candy[j]) {
            candy[j - 1] = candy[j] + 1
        }
    }

    return candy.reduce((a, b) => a + b)
};

console.log(candy([1, 2, 87, 87, 87, 2, 1]))