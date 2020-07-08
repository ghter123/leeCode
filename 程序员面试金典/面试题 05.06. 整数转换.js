/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {

    A = toBinaryString(A)
    B = toBinaryString(B)

    if (A.length > B.length) {
        B = B.padStart(A.length, '0')
    } else {
        A = A.padStart(B.length, '0')
    }

    let count = 0
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) count++
    }

    return count
};

function toBinaryString(num) {
    return num < 0 ? (~(-num) + 1).toString(2) : num.toString(2)
}

convertInteger(826966453, -729934991)