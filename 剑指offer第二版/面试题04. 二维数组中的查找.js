/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length <= 0) return false
    let i = matrix.length - 1
    const m = matrix[0].length
    let j = 0
    while (i >= 0 && j < m) {
        const cur = matrix[i][j]
        if (cur === target) return true
        if (cur < target) {
            j++
            continue
        }
        if (cur > target) i--
    }
    return false
};