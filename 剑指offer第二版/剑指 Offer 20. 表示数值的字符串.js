/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * states
 * 0 开始
 * 1 sign
 * 2 .
 * 3 digit
 * 4 digitAfterDot
 * 5 e
 * 6 signAfterE
 * 7 digitAfterE
 * 8 dotAfterDigit
 * @param {*} s 
 */
var isNumber = function (s) {
    s = s.trim()
    const states = []
    states.push(new Map([['sign', 1], ['.', 2], ['digit', 3]]))         // 0
    states.push(new Map([['digit', 3], ['.', 2]]))                      // 1
    states.push(new Map([['digit', 4]]))                                // 2
    states.push(new Map([['digit', 3], ['e', 5], ['.', 8]]))            // 3 
    states.push(new Map([['e', 5], ['digit', 4]]))                      // 4
    states.push(new Map([['sign', 6], ['digit', 7]]))                   // 5
    states.push(new Map([['digit', 7]]))                                // 6
    states.push(new Map([['digit', 7]]))                                // 7
    states.push(new Map([['digit', 4], ['e', 5]]))                      // 8
    let p = 0
    let t;
    for (const c of s) {
        if (c >= '0' && c <= '9') t = 'digit'
        else if (c === '+' || c === '-') t = 'sign'
        else t = c
        if (!states[p].has(t)) return false
        p = states[p].get(t)
    }
    return p === 3 || p === 4 || p === 7 || p === 8
};

const assert = require('assert')

assert.equal(isNumber("+100"), true)
assert.equal(isNumber("5e2"), true)
assert.equal(isNumber("-123"), true)
assert.equal(isNumber("3.1416"), true)
assert.equal(isNumber("0123"), true)
assert.equal(isNumber("3."), true)
assert.equal(isNumber("+.8"), true)
assert.equal(isNumber("46.e3"), true)
assert.equal(isNumber("12e"), false)
assert.equal(isNumber("1a3.14"), false)
assert.equal(isNumber("1.2.3"), false)
assert.equal(isNumber("+-5"), false)
assert.equal(isNumber("-1E-16"), false)
assert.equal(isNumber("12e+5.4"), false)
assert.equal(isNumber("."), false)
assert.equal(isNumber(" -."), false)