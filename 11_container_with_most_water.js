/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1
    while (left !== right) {
        maxArea = Math.max(Math.min(height[left], height[right]) * (right - left), maxArea)
        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }
    return maxArea
};

const Assert = require('assert')
Assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)