/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let i = 0
    let j = nums.length - 1
    while (i <= j) {
        if (nums[i] + nums[j] === target) return [nums[i], nums[j]]
        while (nums[i] + nums[j] > target) j--
        while (nums[i] + nums[j] < target) i++
    }
    return []
};