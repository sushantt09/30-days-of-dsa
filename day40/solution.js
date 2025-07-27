// problem 1 : path sum in a binary tree
var hasPathSum = function(root, targetSum) {
    // top down approach
    if (!root) return false;
    let ans = false;
    const traverse = (curr, currSum) => {
        let sum = curr.val + currSum;
        if (!curr.left && !curr.right) {
            if (sum === targetSum){
                ans = ans || true;
            }
        }
        curr.left && traverse(curr.left, sum);
        curr.right && traverse(curr.right, sum);
    }
    traverse(root, 0);
    return ans;
};

// bottom up approach
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right){
        if (root.val === targetSum){
            return true;
        }
    }
    let leftSideHasPathSum = hasPathSum(root.left, targetSum - root.val );
    let rightSideHasPathSum = hasPathSum(root.right, targetSum - root.val );
    return leftSideHasPathSum || rightSideHasPathSum;
};

// problem 2 : is symmetric tree
// bottom up approach
var isSymmetric = function(root) {
    const isMirror = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return left.val === right.val && 
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
    }
    return isMirror(root.left, root.right);
};
// iterative approach
var isSymmetric = function(root) {
    let q = [root.left, root.right];
    while (q.length) {
        let p1 = q.shift();
        let p2 = q.shift();
        if (!p1 && !p2) continue;
        if (!p1 || !p2) return false;
        if (p1.val !== p2.val) return false;
        q.push(p1.left, p2.right);
        q.push(p1.right, p2.left);
    }
    return true;
};

// problem 3 : Invert Binary Tree
var invertTree = function(root) {
    if (!root) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

// problem 4 : isSame Tree
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val &&
            isSameTree(p.left, q.left) &&
            isSameTree(p.right, q.right);  
};

// problem 5 : balanced binary tree if its height is balanced (depth of two subtrees differ by at most 1)
var isBalanced = function(root) {
    let ans = true;
    const calHeight = (curr) => {
        if (!curr) return 0;
        let leftHeight = calHeight(curr.left);
        let rightHeight = calHeight(curr.right);
        if (Math.abs(leftHeight - rightHeight) > 1){
            ans = ans && false;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }
    calHeight(root);
    return ans;
};

// problem 6 : find the diameter of a binary tree
// diameter is the length of the longest path between any two nodes in a tree
// the path may or may not pass through the root
// the length of a path is the number of edges between two nodes
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    const findDepth = (curr) => {
        if (!curr) return 0;
        let leftDepth = findDepth(curr.left);
        let rightDepth = findDepth(curr.right);
        let currDiameter = leftDepth + rightDepth;
        diameter = Math.max(diameter, currDiameter);
        return 1 + Math.max(leftDepth, rightDepth);
    }
    findDepth(root);
    return diameter;
}