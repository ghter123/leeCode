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
    if (preorder.length <= 0) return null
    const rootIndex = inorder.findIndex(o => o === preorder[0])
    return {
        val: preorder[0],
        left: buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex)),
        right: buildTree(preorder.slice(rootIndex + 1, preorder.length), inorder.slice(rootIndex + 1, inorder.length))
    }
}