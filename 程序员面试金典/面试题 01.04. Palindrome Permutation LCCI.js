/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
    return Object.values([...s].reduce((total, cur) => {
        if (!total.hasOwnProperty(cur)) {
            total[cur] = 1
        } else {
            total[cur]++
        }
        return total
    }, {})).reduce((total, cur) => {
        if (cur % 2 !== 0) total++
        return total
    }, 0) <= 1
};

console.log(canPermutePalindrome('aaabbs'))