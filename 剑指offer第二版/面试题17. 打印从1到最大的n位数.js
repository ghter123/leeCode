/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    const result = []
    for (i = 1; i <= maxNDigits(n); i++) {
        result.push(i)
    }
    return result
};

function maxNDigits(n) {
    return Math.pow(10, n) - 1
}