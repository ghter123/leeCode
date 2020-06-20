/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const countMap = {}
    const halfLenght = parseInt(nums.length / 2)
    for (let i = 0; i < nums.length; i++) {
        if (!countMap.hasOwnProperty(nums[i])) {
            countMap[nums[i]] = 1
        } else {
            countMap[nums[i]]++
        }
        if (countMap[nums[i]] > halfLenght) {
            return nums[i]
        }
    }
};
