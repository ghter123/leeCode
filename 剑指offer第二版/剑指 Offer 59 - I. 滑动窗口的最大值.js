/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (!nums.length) return []
    const monotoneQueue = new MonotoneQueue((last, val) => last >= val)
    const res = []
    for (let i = 0; i < k; i++) {
        monotoneQueue.push(nums[i])
    }
    res.push(monotoneQueue.First)
    for (let i = k; i < nums.length; i++) {
        if (nums[i - k] === monotoneQueue.First) monotoneQueue.pop()
        monotoneQueue.push(nums[i])
        res.push(monotoneQueue.First)
    }
    return res
};

class MonotoneQueue {
    constructor(comparator) {
        this.queue = []
        this.comparator = comparator
    }

    push(val) {
        while (!this.isEmpty()) {
            if (this.comparator(this.Last, val)) break
            this.queue.pop()
        }
        this.queue.push(val)
    }

    pop() {
        return this.isEmpty() ? null : this.queue.shift()
    }

    isEmpty() {
        return this.queue.length <= 0
    }

    get First() {
        return this.isEmpty() ? null : this.queue[0]
    }

    get Last() {
        return this.isEmpty() ? null : this.queue[this.queue.length - 1]
    }
}