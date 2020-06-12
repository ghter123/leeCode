/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (!root) return []
    const cacheQueue = new CacheQueue()
    cacheQueue.push(root)
    while (!cacheQueue.isEmpty()) {
        const curNode = cacheQueue.pop()
        if (curNode.left != null) cacheQueue.push(curNode.left)
        if (curNode.right != null) cacheQueue.push(curNode.right)
    }
    return cacheQueue.toArray().map(o => o.val)
};

class CacheQueue {
    constructor() {
        this.nodes = []
        this.start = 0
        this.end = 0
    }

    push(node) {
        this.nodes[this.end++] = node
    }

    pop() {
        if (this.isEmpty()) throw new Error()
        return this.nodes[this.start++]
    }

    isEmpty() {
        return this.start >= this.end
    }

    toArray() {
        return this.nodes
    }
}
