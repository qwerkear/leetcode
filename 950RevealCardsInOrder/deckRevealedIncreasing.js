/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck.sort((a, b) => a - b)
    let resultIndexes = [...Array(deck.length).keys()]
    let result = []
    while (resultIndexes[0] != undefined) {
        result[resultIndexes[0]] = deck.shift()
        resultIndexes.shift()
        resultIndexes.push(resultIndexes.shift())
    }

    return result
};

deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])

//Easier to keep track of indexes that have not been filled.
//We fill the result array by index using the sorted deck.
//We fill the result at the current index with the next highest value and then move the following index to the back