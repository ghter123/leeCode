/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1
    return n > 0 ? quickPow(x, n) : 1 / quickPow(x, -n)
};

function quickPow(x, n) {
    if (n === 1) return x
    const half = myPow(x, parseInt(n / 2))
    return n % 2 === 0 ? half * half : half * half * x
}