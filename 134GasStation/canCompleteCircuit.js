/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    if (gas.reduce((a, b) => a + b) < cost.reduce((a, b) => a + b)) {
        return -1
    }

    let netGas = []

    for (let i = 0; i < gas.length; i++) {
        netGas.push(gas[i] - cost[i])
    }

    let gasTank = 0
    let currentTry = 0
    for (let i = 0; i < netGas.length; i++) {
        gasTank += netGas[i]
        if (gasTank < 0) {
            currentTry = i + 1
            gasTank = 0
        }
    }

    return currentTry

};

//you can do this without the netGas array, but honestly, this problem is obnoxious. Maybe later.

console.log(canCompleteCircuit([0, 0, 0, 0], [0, 0, 0, 0]))