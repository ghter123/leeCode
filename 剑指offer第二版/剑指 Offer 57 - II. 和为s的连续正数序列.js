/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    if (target === 1) return []
    const result = []
    for (let n = 2; n <= target; n++) {
        let a1 = (2 * target + n - n * n) / (2 * n)
        if (a1 <= 0) break
        if (a1 % 1 !== 0) continue
        result.push(range(a1, a1 + n - 1, 1))
    }
    return result.reverse()
};

function range(start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))
}
