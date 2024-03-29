/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];
    const backtrackParentheses = (left, right, current) => {
        if (current.length == 2 * n) {
            result.push(current.join(''));
            return;
        }

        if (left < n) {
            current.push('(');
            backtrackParentheses(left + 1, right, current);
            current.pop();
        }

        if (right < left) {
            current.push(')');
            backtrackParentheses(left, right + 1, current);
            current.pop();
        }
    }

    backtrackParentheses(0, 0, []);
    return result;
};

console.log(generateParenthesis(3))
