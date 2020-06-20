/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const targetIndex = binarySearch(nums, target)
    if (targetIndex === -1) return 0
    let i = targetIndex
    let count = 1
    while (++i < nums.length && nums[i] === target) count++
    i = targetIndex
    while (--i >= 0 && nums[i] === target) count++
    return count
};

function binarySearch(nums, target) {
    let i = 0
    let j = nums.length - 1
    while (i <= j) {
        const binaryIndex = parseInt((i + j) / 2)
        if (nums[binaryIndex] === target) return binaryIndex
        if (nums[binaryIndex] < target) i = binaryIndex + 1
        if (nums[binaryIndex] > target) j = binaryIndex - 1
    }
    return -1
}