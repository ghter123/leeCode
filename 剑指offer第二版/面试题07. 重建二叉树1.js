/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    const inorderIndexMap = inorder.reduce((total, curValue, curIndex) => {
        total[curValue] = curIndex
        return total
    }, {})

    function buildingTree(preorderStart, preorderEnd) {
        if (preorderEnd - preorderStart < 0) return null

        const rootValue = preorder[preorderStart]
        if (preorderEnd - preorderStart === 0) return {
            val: rootValue,
            left: null,
            right: null
        }

        const rootIndex = inorderIndexMap[rootValue]
        return {
            val: rootValue,
            left: buildingTree(preorderStart + 1, rootIndex),
            right: buildingTree(rootIndex + 1, preorderEnd)
        }
    }
    return buildingTree(0, preorder.length - 1)
};

const result = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
console.log(result)