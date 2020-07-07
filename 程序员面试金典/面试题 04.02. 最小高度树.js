/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return inorder(nums)
};

function inorder(nums) {
    let node = {}
    if (!nums.length) return null
    if (nums.length === 1) return { val: nums[0], left: null, right: null }
    const binaryIndex = parseInt(nums.length / 2)
    node.val = nums[binaryIndex]
    node.left = inorder(nums.slice(0, binaryIndex))
    node.right = inorder(nums.slice(binaryIndex + 1))
    return node
}