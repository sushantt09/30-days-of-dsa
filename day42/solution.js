// problem 1 : find is the tree valid BST or not
var isValidBST = function(curr, low, high) {
    if (!curr) return true;
    let isLeftBst = isValidBST(curr.left, curr.val, high);
    let isRightBst = isValidBST(curr.right, low, curr.val);
    if ((low !== null && curr.val >= low) || (high !== null && curr.val <= high)) return false;
    return isLeftBst && isRightBst;
};

// problem 2 : search in a BST
var searchBST = function(curr, val) {
    if (!curr) return null;
    if (curr.val === val){
        return curr;
    } else if (val < curr.val) {
        return searchBST(curr.left, val);
    } else {
        return searchBST(curr.right, val);
    }
};


// problem 3 : insert a node in a BST
var insertIntoBST = function(curr, val) {
    if (!curr) return new TreeNode(val);
    if (val < curr.val){
        curr.left = insertIntoBST(curr.left, val);
    } else {
        curr.right = insertIntoBST(curr.right, val);
    }
    return curr;
};

//problem 4 : return the kth smallest element in a BST
var kthSmallest = function(root, k) {
    let ans = null; let count = k
    const traversal = (curr) => {
        curr.left && traversal(curr.left);
        --count;
        if (count === 0){
            ans = curr.val;
        }
        curr.right && traversal(curr.right);
    } 
    traversal(root);
    return ans;
};

// problem 5 : find the lowest common ancestor in a BST
var lowestCommonAncestor = function(curr, p, q) {
    if (p.val < curr.val && q.val < curr.val){
        return lowestCommonAncestor(curr.left, p, q);
    } else if (p.val > curr.val && q.val > curr.val){
       return lowestCommonAncestor(curr.right, p, q);
    } else {
        return curr;
    }
};