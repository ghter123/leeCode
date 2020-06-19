/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    return preorder(A).search(preorder(B)) != -1
};

function preorder(node) {
    if (!node) return '#'
    return '' + node.val + preorder(node.left) + preorder(node.right)
}