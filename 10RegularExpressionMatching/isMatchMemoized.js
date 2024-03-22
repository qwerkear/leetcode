//Below is a memoized version of the solution, but it is slower than the above.
//Most solutions submitted to leetcode are much faster than both of mine???
//TODO: understand why. Overhead? Special case?
//Very easy to see when s = aaaaaaaaaaaaaaaaaaab p = a*a*a*a*a*a*a*a*a*a* (remove cache console logs if testing this)

var isMatchMemoized = function (s, p) {
    //Depth first search
    let cache = new Map()
    let dfs = (i, j) => {
        let key = `${i},${j}`
        let cachedResult = cache.get(key)
        if (cachedResult) {
            return cachedResult
        }
        if (i >= s.length && j >= p.length) {
            return true
        }
        if (j >= p.length) {
            return false
        }
        let match = i < s.length && (s[i] == p[j] || p[j] == '.')
        if ((j + 1) < p.length && p[j + 1] == '*') {
            cache.set(key, dfs(i, j + 2) || (match && dfs(i + 1, j)))
            console.log(cache)
            return cache.get(key)
        }
        if (match) {
            cache.set(key, dfs(i + 1, j + 1))
            return cache.get(key)
        }
        cache.set(key, false)
        return false
    }

    return dfs(0, 0)

};
console.log(isMatchMemoized('aab', 'c*a*b'))