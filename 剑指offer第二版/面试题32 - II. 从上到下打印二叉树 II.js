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
    while (layersNode.length > 0) {
        const nextLayerNodes = []
        for (let i = 0; i < layersNode[layersNode.length - 1].length; i++) {
            const curNode = layersNode[layersNode.length - 1][i]
            layersNode[layersNode.length - 1][i] = curNode.val
            if (curNode.left) nextLayerNodes.push(curNode.left)
            if (curNode.right) nextLayerNodes.push(curNode.right)
        }
        if (nextLayerNodes.length <= 0) break
        layersNode.push(nextLayerNodes)
    }
    return layersNode
};