// problem 1 : Binary tree level order traversal
// Time Complexity: O(n) and Space Complexity: O(n)
var levelOrder = function(root) {
    if (!root) return [];
    let q = [root];
    let curr = null;
    let ans = [];
    while (q.length){
        let levelArr = [];
        let levelSize = q.length;
        for (let i=0; i < levelSize; i++){
            curr = q.shift();
            curr?.left && q.push(curr.left);
            curr?.right && q.push(curr.right);
            levelArr.push(curr?.val);
        }
        ans.push(levelArr);
    }
    return ans;
};

// using recursion
var levelOrder = function(root) {
    if (!root) return [];
    let ans = [];
    function traversal (curr, level){
        if (!ans[level]){
            ans[level] = [];
        };
        ans[level].push(curr?.val);
        curr?.left && traversal(curr.left, level+1);
        curr?.right && traversal(curr.right, level+1);
    }
    traversal(root, 0);
    return ans;
};

// problem 2 : Maximum Depth of Binary Tree
// Time Complexity: O(n) and Space Complexity: O(n)
var maxDepth = function(root) {
    // top down approach using recursion
    let maxDepth = 0;
    if (!root) return 0;
    const traversal = (curr, depth) => {
        maxDepth = Math.max(maxDepth, depth);
        curr.left && traversal(curr.left, depth + 1);
        curr.right && traversal(curr.right, depth + 1);
    }
    traversal(root, 1);
    return maxDepth;
};

// bottom up approach using recursion
var maxDepth = function(root) {
   if (!root) return 0;
   let leftMax = maxDepth(root.left);
   let rightMax = maxDepth(root.right);
   return 1 + Math.max(leftMax, rightMax);
};