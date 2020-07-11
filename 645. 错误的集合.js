/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const result = []
    const temp = []
    for (let i = 0; i < nums.length; i++) {
        if (temp[nums[i]] !== undefined) {
            result[0] = nums[i]
        } else {
            temp[nums[i]] = nums[i]
        }
    }
    for (let i = 1; i <= temp.length; i++) {
        if (temp[i] === undefined) {
            result[1] = [i]
            break
        }
    }
    return result
};