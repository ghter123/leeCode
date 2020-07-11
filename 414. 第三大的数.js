/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let f = -2147483649
    let s = -2147483649
    let t = -2147483649
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > f) {
            t = s
            s = f
            f = nums[i]
        }
        if (nums[i] < f && nums[i] > s) {
            t = s
            s = nums[i]
        }
        if (nums[i] < s && nums[i] > t) {
            t = nums[i]
        }
    }
    return t !== -2147483649 ? t : f
};