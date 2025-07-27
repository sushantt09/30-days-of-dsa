// problem 1 : zigzag level order traversal of a binary tree in iterative way
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let q = [root];
    let level = 0;
    let ans = [];
    while (q.length){
        let levelArr = [];
        let levelSize = q.length;
        for (let i=0; i< levelSize; i++){
            let curr = q.shift();
            if (level%2 === 0){
                levelArr.push(curr.val);
            } else {
                levelArr.unshift(curr.val);
            }
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
        ans.push(levelArr);
        ++level;
    }
    return ans;
};

// problem 2 : check is subtree of another tree
var isSubtree = function(root, subRoot) {
    const tree = serialize(root);
    const subTree = serialize(subRoot);
    return tree.includes(subTree);
};

const serialize = (root) => {
    let hash = "";
    const traverse = (curr) => {
        if (!curr){
            hash = hash + "-#";
            return;
        }
        hash = hash + "-" + curr.val;
        traverse(curr.left);
        traverse(curr.right);
    }
    traverse(root);
    return hash;
}
// time complexity: O(n) and space complexity: O(n) where n is the number of nodes in the tree
// the time complexity is O(n) because we traverse each node once

// problem 3 : find the lowest common ancestor of a binary tree
var lowestCommonAncestor = function(root, p, q) {
    let lca = null;
    const traversal = (curr) => {
        let count = 0;
        if (!curr) return 0;
        let isLeftHasAns = traversal(curr.left);
        let isRightHasAns = traversal(curr.right);
        if (curr.val === p.val || curr.val === q.val){
            ++count;
        }
        count = count + isLeftHasAns + isRightHasAns;
        if (count === 2 && !lca){
            lca = curr;
        }
        return count;
    }; // bottom up approach will reach the bottom
    traversal(root);
    return lca;
};

// problem 4 : find the right side view of a binary tree
var rightSideView = function(root) {
    if (!root) return [];
    let ans = []; let q = [root];
    while (q.length) {
        let levelSize = q.length; 
        for (let i=0; i< levelSize; i++){
            let curr = q.shift();
            i== 0 && ans.push(curr?.val);
            curr?.right && q.push(curr.right);
            curr?.left && q.push(curr.left);
        }
    }
    return ans;
};

// problem 5 : count good nodes in a binary tree
var goodNodes = function(root) { // top down approach
    let maxCount = 0;
    const traversal = (curr, maxSeenSoFar) => {
        if (curr.val >= maxSeenSoFar){
            ++maxCount;
        }
        let maxNode = Math.max(maxSeenSoFar, curr.val);
        curr.left && traversal(curr.left, maxNode);
        curr.right && traversal(curr.right, maxNode);
    }
    traversal(root, -Infinity);
    return maxCount;
};

// problem 6 : populating next right pointers in each node
var connect = function(root) {
    if (!root) return root;
    const traversal = (curr) => {
        if (curr.left){
            curr.left.next = curr.right;
        }
        if (curr.right && curr.next){
            curr.right.next = curr.next.left;
        }
        curr.left && traversal(curr.left);
        curr.right && traversal(curr.right);
    };
    traversal(root);
    return root;
};

// problem 7 : find the maxPath sum in a binary tree
var maxPathSum = function(root) {
    let ans = root.val; // or -Infinity
    // bottom up approach
    let traversal = (curr) => {
        if (!curr) return 0;
        let left = Math.max(0,traversal(curr.left));
        let right = Math.max(0,traversal(curr.right));
        let currMax = curr.val + left + right;
        ans = Math.max(ans, currMax);
        let currReturn = curr.val + Math.max(left, right);
        return currReturn;        
    }
    traversal(root);
    return ans;
};