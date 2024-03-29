var generateParenthesis = function (n) {
    let result = new Set()
    let left = 0
    let right = 0
    const backtrackParentheses = (left, right, current) => {
        if (left == n && right == n) {
            result.add(current)
            return
        }

        if (left > right) {
            current = current + ")"
            backtrackParentheses(left, ++right, current)
        }

        while (left < n) {
            current = current + "("
            backtrackParentheses(++left, right, current)
        }
    }

    if (n) {
        backtrackParentheses(left, right, "")
    }

    return Array.from(result)

};

console.log(generateParenthesis(3))
