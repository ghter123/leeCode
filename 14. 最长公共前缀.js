/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length <= 0) return ""
    let result = strs.pop()
    while (strs.length > 0) {
        const temp = strs.pop()
        for (let i = 0; i < result.length; i++) {
            if (result[i] !== temp[i]) {
                result = result.slice(0, i)
                break
            }
        }
    }
    return result
};