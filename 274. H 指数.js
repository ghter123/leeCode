/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations = citations.sort((a, b) => a - b)
    let maxH = 0
    for (let i = 0; i < citations.length; i++) {
        const temp = citations[i] <= citations.length - i ? citations[i] : citations.length - i
        if (maxH < temp) maxH = temp
    }
    return maxH
};