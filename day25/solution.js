// problem 1 : implement a stack using one queue

var MyStack = function() {
    this.q1 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for (let i=0; i < n-1; i++){
        this.q1.push(this.q1.shift());
    }
    let removedTop = this.q1.shift();
    return removedTop;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;
    for (let i=0; i < n-1; i++){
        this.q1.push(this.q1.shift());
    }
    let top = this.q1[0];
    this.q1.push(this.q1.shift());
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};