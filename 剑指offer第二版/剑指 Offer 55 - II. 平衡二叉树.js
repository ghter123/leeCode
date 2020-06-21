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
    return postorder(root) !== -1
};

// 后序遍历的方式求二叉树的深度。
function postorder(root) {
    // 如果是空树，则深度为0
    if (!root) return 0

    // 左子树的树深
    const left = postorder(root.left)
    // 如果深度为-1说明不是平衡二叉树，所以不用再统计深度，直接返回-1(false)即可。
    if (left === -1) return -1

    const right = postorder(root.right)
    if (right === -1) return -1

    // 如果此树是平衡二叉树，则返回树深，否则返回-1.
    return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : -1
}