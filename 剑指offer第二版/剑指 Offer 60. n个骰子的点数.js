/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function (n) {
    const result = [
        [1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6]
    ]
    for (i = 1; i < n; i++) {
        result.push([])
        for (j = i - 1; j < result[i - 1].length; j++) {
            for (m = 1; m <= 6; m++) {
                if (!result[i][j + m]) {
                    result[i][j + m] = result[i - 1][j] * 1 / 6
                } else {
                    result[i][j + m] += result[i - 1][j] * 1 / 6
                }
            }
        }
    }
    return result[n - 1].slice(n - 1, n * 6)
};
