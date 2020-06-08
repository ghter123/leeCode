/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const set = new Set()
    let repeater = 0
    for(const num of nums) {
        if(set.has(num)) {
            repeater = num
            break
        }
        set.add(num)
    }
    return repeater
};