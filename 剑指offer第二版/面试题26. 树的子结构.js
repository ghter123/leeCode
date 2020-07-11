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
    return inorder(A).search(inorder(B)) != -1
};

function inorder(node) {
    return node ? '' + inorder(node.left) + node.val + inorder(node.right) : ''
}