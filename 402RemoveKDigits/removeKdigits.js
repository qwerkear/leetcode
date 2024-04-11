/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let stack = []
    let result = []
    for (let i = 0; i < num.length; i++) {
        let currentDigit = num[i]
        while (k > 0 && stack && stack[stack.length - 1] > currentDigit) {
            k -= 1
            stack.pop()
        }
        stack.push(currentDigit)

    }
    for (i = 0; i < stack.length - k; i++) {
        result.push(stack[i])
    }


    for (let i = 0; i < result.length; i++) {
        if (result[i] == '0') {
            result.splice(i, 1);
            i--;
        } else {
            break;
        }
    }

    if (!result[0]) {
        return "0"
    }

    return result.join('')

};

console.log(removeKdigits("10001", 1))

//rolling my eyes at this problem and problems like it