/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
    if (a.length === 0) return [0]
    const b = [1]
    let tmp = 1
    for (let i = 1; i < a.length; i++) {
        b[i] = b[i - 1] * a[i - 1];
    }
    for (let i = a.length - 2; i >= 0; i--) {
        tmp *= a[i + 1];
        b[i] *= tmp;
    }
    return b
};