/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const number = s.trim().match(/^[\+\-]?\d+/)?.[0] || 0
    if(number < -Math.pow(2,31)){
        return -Math.pow(2,31)
    }
    if(number >= Math.pow(2,31)){
        return Math.pow(2,31) - 1
    }
    return number

};

console.log(myAtoi('2147483648'))

//I don't really understand this one