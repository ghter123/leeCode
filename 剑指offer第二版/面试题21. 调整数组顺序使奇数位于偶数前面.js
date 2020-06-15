/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let i = 0
    let j = nums.length - 1
    while (i != j) {
        while (nums[i] % 2 === 1) i++;
        while (nums[j] % 2 === 0) j--;

        if (i > j) break

        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    return nums
};