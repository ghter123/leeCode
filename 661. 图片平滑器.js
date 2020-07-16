/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    const dirX = [-1, -1, -1, 0, 1, 1, 1, 0]
    const dirY = [1, 0, -1, -1, -1, 0, 1, 1]
    const result = []
    for (let i = 0; i < M.length; i++) {
        result.push([])
        for (let j = 0; j < M[i].length; j++) {
            const sum = dirX.reduce((sum, x, index) => {
                const m = i + x
                const n = j + dirY[index]
                if (m < M.length && m >= 0 && n < M[i].length && n >= 0) {
                    sum[1]++
                    sum[0] += M[m][n]
                }
                return sum
            }, [0, 0])
            result[i][j] = parseInt((sum[0] + M[i][j]) / (sum[1] + 1))
        }
    }
    return result
};