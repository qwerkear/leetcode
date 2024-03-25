/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    //This order actually matters because it is being iterated over in the for loop
    const romanSymbols = {
        'M': 1000,
        'CM': 900, 'D': 500, 'CD': 400, 'C': 100,
        'XC': 90, 'L': 50, 'XL': 40, 'X': 10,
        'IX': 9, 'V': 5, 'IV': 4, 'I': 1,
    }

    let result = ""

    for (const symbol in romanSymbols) {
        let currentSymbolValue = romanSymbols[symbol]
        let currentSymbolCount = Math.floor(num / currentSymbolValue)
        if (currentSymbolCount) {
            result += symbol.repeat(currentSymbolCount)
            num = num % currentSymbolValue
        }
    }
    return result
};

console.log(intToRoman(3))