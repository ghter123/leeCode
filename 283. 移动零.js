/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] === 0) {
            for (let j = i; j < nums.length - 1; j++) {
                if (nums[j + 1] !== 0) {
                    const temp = nums[j + 1]
                    nums[j + 1] = nums[j]
                    nums[j] = temp
                }
            }
        }
    }
    return nums
};