/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    // 设移动后所有数位为 x ,可以知道移动次数 m = x-min.
    // sum(nums) = x*n - m(n-1)
    // m = sum(nums) - min*n
    return nums.reduce((sum, num) => sum += num) - Math.min(...nums) * nums.length
};