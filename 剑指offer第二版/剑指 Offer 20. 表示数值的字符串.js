/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    s = s.trim()
    const isNum = (num) => { return /^[0-9]+$/.test(num) }
    if (s[0] === '+' || s[0] === '-' || s[0] === '.') {
        if (!isNum(s[1])) return false
    } else {
        if (!isNum(s[0])) return false
    }
    for (i = 1; i < s.length - 1; i++) {
        const next = s[i + 1]
        const cur = s[i]
          
            if (isNum(cur)) continue
            else if (cur === '.') {
                if (!isNum(s.slice(i + 1) || 0)) return false
            }
            else if (cur === 'e') {
                if ((!isNum(next) || next === '0') || !isNum(s.slice(i + 1) || 0)) return false
            }
            else return false
        
    }
    return true
};