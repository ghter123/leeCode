/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0
    let j = 0
    let i = 0
    while (i < nums.length && j < nums.length) {
        while (nums[i] ^ 1 && i < nums.length) i++
        j = i
        while (nums[j] & 1 && j < nums.length) j++
        if (j - i > max) max = j - i
        i = j
    }
    return max;
};

findMaxConsecutiveOnes([0])