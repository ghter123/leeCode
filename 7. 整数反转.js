/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let sign = 0
    if (x < 0) {
        sign = 1
        x = -x
    }
    let num = parseInt(x.toString().split('').reverse().join(''))
    num = sign ? -num : num
    if (-2147483648 > num || num > 2147483647) num = 0
    return num
};