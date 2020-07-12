/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        const newIndex = Math.abs(nums[i]) - 1
        if (nums[newIndex] > 0) {
            nums[newIndex] *= -1
        } else {
            result.push(newIndex + 1)
        }
    }
    return result
};