/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    const left = new Map()
    const right = new Map()
    const count = new Map()
    let maxDegree = 0
    let minSubLen = 50000
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (!left.has(num)) left.set(num, i)
        right.set(num, i)
        const degree = count.has(num) ? count.get(num) + 1 : 1
        if (degree >= maxDegree) maxDegree = degree
        count.set(num, degree)
    }
    for (const pair of count) {
        if (pair[1] === maxDegree) {
            const subLen = right.get(pair[0]) - left.get(pair[0]) + 1
            if (minSubLen > subLen) minSubLen = subLen
        }
    }
    return minSubLen
}
findShortestSubArray([4,3,2,7,8,2,3,1])