/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    const maxHeap = new MaxHeap(arr.slice(0, k))
    for (let i = k; i < arr.length; i++) {
        if (arr[i] < maxHeap.maxValue) {
            maxHeap.insteadMax(arr[i])
        }
    }
    return maxHeap.toArray()
};

class MaxHeap {

    constructor(nums) {
        this.nodes = []
        this.maxLenght = nums.length
        nums.forEach(n => this.push(n))
    }

    get maxValue() {
        return this.nodes[0]
    }

    push(val) {
        this.nodes.push(val)
        let i = (this.nodes.length - 1)
        while (i > 0) {
            let root = parseInt((i - 1) / 2)
            if (this.nodes[i] > this.nodes[root]) {
                let temp = this.nodes[i]
                this.nodes[i] = this.nodes[root]
                this.nodes[root] = temp
            }
            i = root
            if (i === 0) break
        }
    }

    insteadMax(val) {
        this.nodes[0] = val
        this.rebuild(0)
    }

    rebuild(cur) {
        const left = cur * 2 + 1
        const right = cur * 2 + 2
        let nextRoot = left
        if (left >= this.maxLenght && right >= this.maxLenght) return
        if ((this.nodes[nextRoot] || 0) < (this.nodes[right] || 0)) {
            nextRoot = right
        }
        if (this.nodes[cur] < (this.nodes[nextRoot] || 0)) {
            const temp = this.nodes[nextRoot]
            this.nodes[nextRoot] = this.nodes[cur]
            this.nodes[cur] = temp
            this.rebuild(nextRoot, this.nodes[nextRoot])
        }
    }

    toArray() {
        return this.nodes
    }
}