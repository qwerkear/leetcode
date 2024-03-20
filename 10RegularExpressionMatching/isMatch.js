/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    //Depth first search
    let dfs = (i, j) => {
        if (i >= s.length && j >= p.length) {
            return true
        }
        if (j >= p.length) {
            return false
        }
        let match = i < s.length && (s[i] == p[j] || p[j] == '.')
        if ((j + 1) < p.length && p[j + 1] == '*') {
            return dfs(i, j + 2) || (match && dfs(i + 1, j))
        }
        if (match) {
            return dfs(i + 1, j + 1)
        }
        return false
    }

    return dfs(0, 0)

};

console.log(isMatch('aab', 'c*a*b'))
//3/19: May need to rethink how this is done considering this test case

//3/20: So * indicates we may need some sort of logic/decision tree.
//      We can keep track of where we are in the two strings with pointers
//
//                                  s = aab | p = c*a*b
//                                      i         j
//                                              ''
//                                            */ \-       in this case, we would not use 'c*', adding a c creates 0 match in s.
//                                            c   _       we would not increment i, but j + 2 to get to 'a*'
//                                              */ \-
//                                              a   _
//       now we want to increment i + 1,      */ \-
//       but leave j. so i points to a        aa   a_
//       at index i + 1 = 1                  */ \- / \
//                                         aaa  aa_       since 'aaa' is not in s, stop using a*, proceed through p -> (i, j+2)
//                                                        j + 2 is 'b' (no *) so add b to the string and look for match

//The tree should indicate what to do with pointers: left(i + 1, j) & right(i, j + 2)

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
            console.log(cache)
            return cache.get(key)
        }
        return false
    }

    return dfs(0, 0)

};