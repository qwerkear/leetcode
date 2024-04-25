/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    flowerbed = [0, ...flowerbed, 0]
    for (let i = 1; i <= flowerbed.length - 2; i++) {
        if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
            flowerbed[i] = 1
            n--
        }
    }

    if (n > 0) {
        return false
    }

    return true
};
//spread operator makes this memory expensive

//we can forgo the creation of a new array by adjusting the if condition, but it looks nasty:
//if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0))