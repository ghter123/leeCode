/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const layersNode = root != null ? [[root]] : []
    let fromLeft = true
    while (layersNode.length > 0) {
        const nextLayerNodes = []
        const curLayerNodes = layersNode[layersNode.length - 1]
        const curLayerVal = []
        while (curLayerNodes.length > 0) {
            const curNode = curLayerNodes.shift()
            fromLeft ? curLayerVal.push(curNode.val) : curLayerVal.unshift(curNode.val)
            if (curNode.left) nextLayerNodes.push(curNode.left)
            if (curNode.right) nextLayerNodes.push(curNode.right)
        }
        layersNode[layersNode.length - 1] = curLayerVal
        if (nextLayerNodes.length <= 0) break
        layersNode.push(nextLayerNodes)
        fromLeft = !fromLeft
    }
    return layersNode
};