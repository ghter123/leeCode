/**
 * @param {number} n
 * @return {number}
 */

const fibNums = [1,1,2]
for(let i=3;i<=100;i++) {
    fibNums[i] = (fibNums[i-1] + fibNums[i-2]) % 1000000007
}

var numWays = function (n) {
    return fibNums[n]
};