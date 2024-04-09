/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let ticketsNeeded = tickets[k]
    let ticketsNeededBehind = ticketsNeeded - 1 //Only need to wait for the n-1th ticket for people behind the nth person
    let time = 0

    for (let i = 0; i < tickets.length; i++) {
        if (i > k) {
            if (tickets[i] >= ticketsNeededBehind) {
                time += ticketsNeededBehind
            } else {
                time += tickets[i]
            }
        } else {
            if (tickets[i] >= ticketsNeeded) {
                time += ticketsNeeded
            } else {
                time += tickets[i]
            }
        }
    }



    return time
};

timeRequiredToBuy([5, 1, 1, 1], 0)
