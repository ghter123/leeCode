/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let cur;
    for (let i = 0; i < nums.length; i++) {
        if (cur !== nums[i]) {
            cur = nums[i]
            continue
        }
        nums.splice(i, 1)
        i--
    }
    return nums.length
};