/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let inputString = x.toString().split('')

    let swap = (i, j) => {
        let temporary = inputString[i]
        inputString[i] = inputString[j]
        inputString[j] = temporary
        return true
    }

    if (inputString[0] == '-') {
        let j = inputString.length - 1
        for (i = 1; i < inputString.length / 2; i++) {
            swap(i, j)
            j--
        }
    } else {
        let j = inputString.length - 1
        for (i = 0; i < inputString.length / 2; i++) {
            swap(i, j)
            j--
        }
    }

    let result = parseInt(inputString.join(''))
    if (result > Math.pow(2, 31) || result < -Math.pow(2, 31)) {
        return 0
    }

    return result

};

console.log(reverse(-2147483648))

//I'm sure there's a simpler way to do this with math operators?
//Try n % 10 maybe?