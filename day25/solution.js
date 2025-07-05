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

// problem 2 : implement a queue using two stacks

var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.s2.length === 0) {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
    } 
    return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.s2.length === 0) {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length -1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s2.length === 0 && this.s1.length === 0;
};

// problem 3 : valid parentheses
// time complexity: O(n) and space complexity: O(n)
var isValid = function(s) {
    let stack = [];
    let map = {"}": "{", "]": "[", ")": "("};    
    for (let i=0; i<s.length; i++){
        if (["(", "{", "["].includes(s[i])) {
            stack.push(s[i]);
        } else if (stack.length > 0 && map[s[i]] == stack[stack.length - 1]){
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0 ? true : false;
};

// problem 4 : implement a minStack 
// time complexity: O(1) for all operations and space complexity: O(n)

var MinStack = function() {
    this.s = [];  
    this.minStack = [];
  };
  
  /** 
   * @param {number} val
   * @return {void}
   */
  MinStack.prototype.push = function(val) {
      this.s.push(val);
      if (this.minStack.length === 0 || val <= this.getMin()){
          this.minStack.push(val);
      } else {
          this.minStack.push(this.getMin());
      }
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function() {
      this.s.pop();
      this.minStack.pop();
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function() {
      return this.s[this.s.length -1];
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function() {
      return this.minStack[this.minStack.length -1];
  };
