/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.min.length===0 || x<=this.min[this.min.length-1]) { // has to be <= because of cases like [0,1,0]
        this.min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let a = this.stack.pop();
    if (a===this.min[this.min.length-1]) {
        this.min.pop();
    }
    return a;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
