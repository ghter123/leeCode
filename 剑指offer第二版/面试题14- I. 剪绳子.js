/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n === 2) return 1
    if (n === 3) return 2
    // 2和3情况特殊，作为部分和作为一截是最优不一样.
    const maxProduct = [0, 1, 2, 3]
    for (let i = 4; i <= n; i++) {
        maxProduct[i] = 0
        for (let j = 1; j < i; j++) {
            if (maxProduct[i] < j * maxProduct[i - j])
                maxProduct[i] = j * maxProduct[i - j]
        }
    }
    return maxProduct[n]
};