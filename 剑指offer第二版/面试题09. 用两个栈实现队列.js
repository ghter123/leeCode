var CQueue = function () {
    this.appendStack = []
    this.deleteStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    while (this.deleteStack.length > 0) {
        this.appendStack.push(this.deleteStack.pop())
    }
    this.appendStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    while (this.appendStack.length > 0) {
        this.deleteStack.push(this.appendStack.pop())
    }
    if (this.deleteStack.length <= 0) return -1
    return this.deleteStack.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */