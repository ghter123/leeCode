/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    let i = 1
    let result = 0
    while (i <= n) {
        result = result + count(i++)
    }
    return result
};

function count(num) {
    return num.toString().split('').reduce((total, cur) => total + (cur === "1" ? 1 : 0) , 0)
}
