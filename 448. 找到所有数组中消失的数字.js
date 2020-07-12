/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        const newIndex = Math.abs(nums[i]) - 1
        if (nums[newIndex] > 0) {
            nums[newIndex] *= -1
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1)
        }
    }
    return result
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])