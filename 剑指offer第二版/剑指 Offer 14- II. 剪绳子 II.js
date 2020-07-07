/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    const dp = [0, 1, 1, 2, 4, 6, 9]
    for (let i = 7; i <= n; i++) {
        dp[i] = dp[i - 3] * 3 % 1000000007
    }
    return dp[n]
};