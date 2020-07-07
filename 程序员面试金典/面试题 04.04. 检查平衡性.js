/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true
    if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false
    return isBalanced(root.right) && isBalanced(root.left)
};

function getDepth(root) {
    if (!root) return 0
    return Math.max(getDepth(root.right), getDepth(root.left)) + 1
}
