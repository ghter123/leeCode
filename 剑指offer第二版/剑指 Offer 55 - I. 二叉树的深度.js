/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
    return DFS(root, 0, 0)
};

function DFS(root, depth, max) {
    if (!root) {
        if (depth > max) max = depth
        return max
    }
    depth++
    const maxLeft = DFS(root.left, depth, max)
    const maxRight = DFS(root.right, depth, max)
    return maxLeft > maxRight ? maxLeft : maxRight
}