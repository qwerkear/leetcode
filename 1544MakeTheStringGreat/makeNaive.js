var makeNaive = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (!s) {
            return ''
        }
        let adjusted = false

        let lowerCase = s[i] == s[i].toLowerCase() ? true : false
        if (lowerCase) {
            let nextIsMatch = s[i + 1] == s[i].toUpperCase() ? true : false
            if (nextIsMatch) {
                s = s.slice(0, i) + s.slice(i + 2, s.length)
                adjusted = true
            }
        }
        if (!s) {
            return ''
        }
        let upperCase = s[i] == s[i].toUpperCase() ? true : false
        if (upperCase) {
            let nextIsMatch = s[i + 1] == s[i].toLowerCase() ? true : false
            if (nextIsMatch) {
                s = s.slice(0, i) + s.slice(i + 2, s.length)
                adjusted = true
            }
        }

        if (adjusted) {
            i = -1
        }
    }

    return s
};

makeNaive('abBAcC')