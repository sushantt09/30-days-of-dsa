// problem 1: remove the outer parentheses from the expression - using stack
// time complexity: O(n) and space complexity: O(n)
// my approach 
var removeOuterParentheses = function(s) {
    let arr = []; let stack = []; 
    let map = {
        "(" : ")"
    }
    for (let i=0; i < s.length; i++){
        if (stack.length !== 0 && !(stack.length === 1 && map[stack[0]] === s[i])) {
            arr.push(s[i]);
        }
        if (Object.keys(map).includes(s[i])){
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }
    return arr.join('');
};

// solving the same problem without using stack
// time complexity: O(n) and space complexity: O(1)
var removeOuterParentheses = function(s) {
    let level = 0; 
    let ans = "";
    for (let i=0; i<s.length; i++){
        if ("(" === s[i]){
            ++level;
            ans += ((level > 1) ? s[i] : "");
        } else {
            ans += ((level > 1) ? s[i] : "");
            --level;
        }
    }
    return ans;
};

// problem 2 : reverse polish notation - using stack
// time complexity: O(n) and space complexity: O(n)
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
var evalRPN = function(tokens) {
    let ans; let stack = [];
    for (let i=0; i<tokens.length; i++){
        if (["+","-","*","/"].includes(tokens[i])){
            let b = stack.pop();
            let a = stack.pop();
            ans = Math.trunc(eval(`${a} ${tokens[i]} ${b}`));
            stack.push(ans);
            console.log({ans :stack[stack.length -1]})
        } else {
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop());
};

// best approach without using eval 
var evalRPN = function(tokens) {
    let stack = [];
    let map = {
        "+" : (a,b) => (a+b),
        "-" : (a,b) => (a-b),
        "*" : (a,b) => (a*b),
        "/" : (a,b) => Math.trunc(a/b)
    }
    for (let i=0; i<tokens.length; i++){
        if (map[tokens[i]]){
            let b = stack.pop();
            let a = stack.pop();
            let ans = map[tokens[i]](Number(a),Number(b));
            stack.push(ans);
        } else {
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop());
};

// problem 3 : find the next greater element in an array - using stack
// time complexity: O(n) and space complexity: O(n)
// Input: nums = [1,2,1]
// Output: [2,-1,-1]
var nextGreaterElement = function(nums1, nums2) {
    let map = {}; let stack = []; let finalArr = []; let top;
    for (let i = nums2.length -1; i >= 0; i--){
        top = stack[stack.length -1];
        if (nums2[i] < top) {
            map[nums2[i]] = top;
        } else if ( nums2[i] > top) {
            while (stack.length){
                if (stack[stack.length -1] < nums2[i]){
                    stack.pop();
                } else {
                    map[nums2[i]] = stack[stack.length -1];
                    break;
                }
            }  
            if (stack.length === 0){
                map[nums2[i]] = -1;
            }
        } else {
            map[nums2[i]] = -1;
        }
        stack.push(nums2[i]);
    }
    for (let i=0; i<nums1.length; i++){   // or return nums1.map(num => map[num]); no need to loop again
        finalArr.push(map[nums1[i]]);
    }
    return finalArr;
};

// or optimized approach
var nextGreaterElement = function(nums1, nums2) {
    let map = {}; 
    let stack = []; 
    let n = nums2.length;
    stack.push(nums2[n -1]);
    map[nums2[n -1]] = -1;
    for (let i = n - 2; i >= 0; i--){
        while (stack.length){
            if (stack[stack.length -1] < nums2[i]){
                stack.pop();
            } else {
                map[nums2[i]] = stack[stack.length -1];
                break;
            }
        }  
        if (stack.length === 0){
            map[nums2[i]] = -1;
        }
        stack.push(nums2[i]);
    }
    return nums1.map((x)=> map[x]);
};