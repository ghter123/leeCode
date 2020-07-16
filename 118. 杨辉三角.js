/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return []
    const result = [[1]]
    for (let i = 1; i < numRows; i++) {
        result.push([])
        result[i][0] = 1
        result[i][i] = 1
        for (let j = 1; j < i; j++) {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
        }
    }
    return result
};