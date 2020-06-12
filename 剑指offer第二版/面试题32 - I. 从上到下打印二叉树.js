/**
 * @param {TreeNode} nodes
 * @return {number[]}
 */

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

var levelOrder = function (nodes) {
    const cacheQueue = new CacheQueue()
    cacheQueue.push(0)
    while (!cacheQueue.isEmpty()) {
        const curIndex = cacheQueue.pop()
        if (nodes[curIndex] === null) continue
        if (curIndex * 2 + 1 < nodes.length) cacheQueue.push(curIndex * 2 + 1)
        if (curIndex * 2 + 2 < nodes.length) cacheQueue.push(curIndex * 2 + 2)
    }

    return cacheQueue.toArray().reduce((total, cur) => {
        if (nodes[cur] != null) total.push(nodes[cur])
        return total
    }, [])
};

