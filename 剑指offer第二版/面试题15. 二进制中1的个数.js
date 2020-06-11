/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split('').reduce((total,cur)=> total+ parseInt(cur),0)
};