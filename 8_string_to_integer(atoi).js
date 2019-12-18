/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    if (!str) return 0
    let beginNumIndex = str.length

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            beginNumIndex = i
            break
        }
    }

    if (beginNumIndex === str.length) return 0

    const firstC = str[beginNumIndex]

    if (isNaN(firstC) && firstC !== '+' && firstC !== '-') {
        return 0
    }

    let sign = 1

    if (firstC === '+' || firstC === '-') {
        beginNumIndex++
    }

    if (firstC === '-') sign = -1

    let lastNumIndex = str.length

    for (let i = beginNumIndex; i < str.length; i++) {
        if (str[i] === '0') {
            beginNumIndex++
            continue
        } else {
            break
        }
    }

    for (let i = beginNumIndex; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9') {
            lastNumIndex = i
            break
        }
    }

    if (beginNumIndex === lastNumIndex) return 0

    const intMax = 2147483647
    const intMin = -2147483648

    if (lastNumIndex - beginNumIndex > 10) {
        return sign > 0 ? intMax : intMin
    }

    const num = sign * parseInt(str.slice(beginNumIndex, lastNumIndex))

    if (num > intMax) return intMax
    if (num < intMin) return intMin

    return num
};

console.log(myAtoi("010"))
console.log(myAtoi("    0000000000000   "))
console.log(myAtoi("-000000000000001"))
console.log(myAtoi("  0000000000012345678"))
console.log(myAtoi("+1"))
console.log(myAtoi("3.14159"))
console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))
