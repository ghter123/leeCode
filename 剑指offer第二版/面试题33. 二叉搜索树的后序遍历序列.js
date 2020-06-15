/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    if (postorder.length <= 1) return true
    const rootIndex = postorder.length - 1
    let rightStartIndex = 0
    let i = 0
    while (postorder[i] < postorder[rootIndex]) i++;
    rightStartIndex = i
    while (postorder[i] > postorder[rootIndex]) i++;
    return i === rootIndex
        && verifyPostorder(postorder.slice(0, rightStartIndex))
        && verifyPostorder(postorder.slice(rightStartIndex, rootIndex))
};