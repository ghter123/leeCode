/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const binaryIndex = parseInt((left + right) / 2)
        if (nums[binaryIndex] === binaryIndex) left = binaryIndex + 1
        else right = binaryIndex - 1
    }
    return left
};