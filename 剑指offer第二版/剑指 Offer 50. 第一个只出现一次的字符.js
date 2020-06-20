/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    const charCountMap = new Map()
    for (const c of s) {
        charCountMap.set(c, !charCountMap.has(c))
    }
    for (const entry of charCountMap) {
        if (entry[1]) return entry[0]
    }
    return ' '
};