/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    return postorder(root)[k - 1]
};

function postorder(root) {
    return !root ? [] : postorder(root.right)
        .concat([root.val])
        .concat(postorder(root.left))
}