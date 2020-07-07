/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
    let max = 0
    let left = 0
    let right = 0
    const binaryString = num.toString(2) + '0'
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            if (max < left + right + 1) max = left + right + 1
            left = right
            right = 0
        } else {
            right++
        }
    }
    return max
};