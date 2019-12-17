/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0
    const window = new Set()
    let max = 0
    for (let i = 0; i < s.length; i++) {
        window.add(s[i])
        for (let j = i + 1; j < s.length; j++) {
            if (window.has(s[j])) {
                break
            }
            window.add(s[j])
        }
        if (max < window.size) {
            max = window.size
        }
        window.clear()
    }
    return max
};

console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring("aab"))