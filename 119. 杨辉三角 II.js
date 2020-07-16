/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const result = [1]
    let pre = 1
    for (let i = 1; i <= rowIndex; i++) {
        const cur = parseInt(pre * (rowIndex - i + 1) / i)
        result.push(cur)
        pre = cur
    }
    return result
};