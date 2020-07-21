/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ret = 0;
    for (const num of nums) {
        ret ^= num
    }
    return ret
};