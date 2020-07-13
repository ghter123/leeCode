/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    return (parseInt(A.join('')) + K).toString().split('').map(o => parseInt(o))
};