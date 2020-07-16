/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let count = 0
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] < nums[i - 1] || nums[i] > nums[i + 1]) {
            if (nums[i + 1] >= nums[i - 1]) count++
            else return false
        }
    }
    return count <= 1
};

const assert = require('assert')

assert.equal(checkPossibility([-1, 4, 2, 3]), true)
assert.equal(checkPossibility([4, 2, 3]), true)
assert.equal(checkPossibility([4, 2, 1]), false)
assert.equal(checkPossibility([3, 4, 2, 3]), false)
assert.equal(checkPossibility([2, 3, 3, 2, 4]), true)