/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    let zeroCount = 0
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0) {
            zeroCount++
        } else {
            const dif = nums[i + 1] - nums[i]
            if (dif === 0) return false
            zeroCount -= (dif - 1)
        }
        if (zeroCount < 0) return false
    }
    return true
};