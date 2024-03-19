/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

    if (p == '.*') {
        console.log('default true')
        return true
    }

    let toCheckArray = p.split('')
    while (toCheckArray.indexOf('*') !== -1) {
        let astIndex = toCheckArray.indexOf('*')
        let char = toCheckArray[astIndex - 1]
        toCheckArray.splice(toCheckArray.indexOf('*') - 1, 2, `${char}*`)
    }
    let stringToCheck = s.split('')
    console.log('toCheckArray: ', toCheckArray)
    console.log('stringToCheck: ', stringToCheck)



    while (stringToCheck.length > 0 && toCheckArray.length > 0) {
        if (toCheckArray[0].length == 2) {
            let count = 0
            if (toCheckArray[0] == '.') {
                return true
            }
            while (stringToCheck[0] == toCheckArray[0][0]) {
                stringToCheck.splice(0, 1)
                console.log('toCheckArray: ' + toCheckArray + ' stringToCheck: ' + stringToCheck)
                count++
                console.log('count: ' + count)
            }
            toCheckArray.splice(0, 1)

        } else {
            if (toCheckArray[0] === stringToCheck[0] || toCheckArray[0] == '.') {
                stringToCheck.splice(0, 1)
                toCheckArray.splice(0, 1)
                console.log('toCheckArray: ' + toCheckArray + ' stringToCheck: ' + stringToCheck)
            } else {
                return false
            }
        }


    }


    return stringToCheck.length == 0 && toCheckArray.length == 0 ? true : false

};

console.log(isMatch('aaa', 'a*a'))
//May need to rethink how this is done considering this test case
