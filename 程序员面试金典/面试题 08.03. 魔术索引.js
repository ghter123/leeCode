/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
    return nums.findIndex((value, index) => value === index)
};