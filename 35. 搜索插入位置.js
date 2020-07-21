/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i
    for (i = 0; i < nums.length; i++) {
        if (target <= nums[i]) return i
    };
    return i
}

const assert = require('assert')

assert(searchInsert([1,3,5,6], 5),2)
assert(searchInsert([1,3,5,6], 2),1)
assert(searchInsert([1,3,5,6], 7),4)