/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map = new Map()
    const result = []
    for (const num of nums1) {
        map.set(num, map.has(num) ? map.get(num) + 1 : 1)
    }
    for (const num of nums2) {
        if (map.has(num)) {
            const count = map.get(num)
            if (count <= 0) {
                map.delete(num)
                continue
            }
            result.push(num)
            map.set(num, count - 1)
        }
    }
    return result
};