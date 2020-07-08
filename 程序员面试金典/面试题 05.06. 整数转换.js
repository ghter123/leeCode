/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
    let diff = A ^ B
    let count = 0
    while (diff) {
        if (diff & 1) {
            count++
        }
        diff >>>= 1
    }
    return count
};


convertInteger(826966453, -729934991)