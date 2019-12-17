/**
 * @param {string} s
 * @return {string}
 */

const isPalindromicString = (s) => {
    for (let i = 0; i < parseInt(s.length / 2); i++) {
        if (s[i] != s[s.length - i - 1]) {
            return false
        }
    }
    return true
}

var longestPalindrome = function (s) {
    let longest = ""
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length; j > 0; j--) {
            if (isPalindromicString(s.slice(i, j))) {
                if (longest.length < j - i) {
                    longest = s.slice(i, j)
                }
                break
            }
        }
    }
    return longest
};

console.log(longestPalindrome("abcba"))
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("a"))
console.log(longestPalindrome(""))