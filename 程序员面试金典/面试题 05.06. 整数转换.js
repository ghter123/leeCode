/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
    if (B > A) {
        const temp = B
        B = A
        A = temp
    }
    A = A.toString(2)
    B = B.toString(2).padStart(A.length, 0)
    let count = 0
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) count++
    }
    return count
};

convertInteger(826966453,-729934991)