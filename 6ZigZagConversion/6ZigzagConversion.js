/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    
};

console.log(convert('PAYPALISHIRING', 3))

//numRows = 3
//P, skip 4, A, skip 4, H, skip 4, N ...
//A, skip 2, P, skip 2, L, skip 2, S ...
//Y, skip 4, I, skip 4, R

//P   A   H   N
//A P L S I I G
//Y   I   R

//numRows = 4
//P, skip 6, I, Skip 6, N...
//A, skip 4, L, skip 2, S, skip 4, I, skip 2, G
//Y, skip 2, A, skip 4, H, skip 2, R
//P, skip 5, I

//P     I     N
//A   L S   I G
//Y A   H R
//P     I

//numRows = 5
//P, Skip 8, H
//A, Skip 6, S, Skip 2, I
//Y, Skip 4, I, Skip 4, R
//P, Skip 2, L, Skip 6, N
//A, Skip 8, G

//P        H
//A      S I
//Y    I   R
//P  L     N
//A        G

//numRows = 6
//P, Skip 10, R
//A, Skip 8, I, Skip 2, I
//Y, Skip 6, H, Skip 4, N
//P, Skip 4, S, Skip 6, G
//A, Skip 2, I, Skip 8, !
//L, Skip 10, !

//P         R
//A       I I
//Y     H   N
//P   S     G
//A I       !
//L         !

//Row 1: Skip = (numRows - 1) * 2
//Row 2: Skip = (numRows - 1) * 2 - 2*1 and (numRows - 1) * 2
//Row 3: Skip = (numRows - 1) * 2 - 2*2 and (numRows - 1) * 2

//EXAMPLE: numRows = 6
//ROW 1 SKIP: (6 - 1) * 2 = 10 |
//ROW 2 SKIP: (6 - 1) * 2 - 2*1 = 8 | and | (6 - 1) * 2 = 10
//ROW 3 SKIP: (6 - 1) * 2 - 2*2 = 6 | and | (6 - 1) * 2 = 10
//Row 4 SKIP: (6 - 1) * 2 - 2*2 = 4 | and | (6 - 1) * 2 = 10