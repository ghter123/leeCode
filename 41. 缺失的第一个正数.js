/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) nums[i] = nums.length + 1
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums.length + 1) continue
        const newIndex = Math.abs(nums[i]) - 1
        if (nums[newIndex] > 0) {
            nums[newIndex] *= -1
        }
    }
    let i;
    for (i = 1; i <= nums.length; i++) {
        if (nums[i - 1] >= 0) {
            return i
        }
    }
    return i
};

const assert = require('assert')
assert.equal(firstMissingPositive([]), 1)
assert.equal(firstMissingPositive([1]), 2)
assert.equal(firstMissingPositive([0, 1, 2]), 3)