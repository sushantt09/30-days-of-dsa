//problem 1: inorder traversal 
var inorderTraversal = function(root) {
    let ans = [];
    function traversal (curr) {
        if (!curr) return;
        traversal(curr.left);
        ans.push(curr.val);
        traversal(curr.right);
    }
    traversal(root);
    return ans;
};

// problem 2 : postorder traversal 
var postTraversal = function(root) {
    let ans = [];
    function traversal (curr) {
        if (!curr) return;
        traversal(curr.left);
        traversal(curr.right);
        ans.push(curr.val);
    }
    traversal(root);
    return ans;
};

// problem 3 : preorder traversal using iteration
var preorderTraversal = function(root) {
    if (!root) return [];
    let ans = [];
    let stack = [root];
    while (stack.length) {
        let curr = stack.pop();
        ans.push(curr.val);
        curr?.right && stack.push(curr.right);
        curr?.left && stack.push(curr?.left);
    }
    return ans;
};

// problem 4: inorder traversal using iteration
var inorderTraversal = function(root) {
    let curr = root;
    let ans = [];
    let stack = [];
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }
    return ans;
};

// problem 5 : postorder traversal using 2 stacks
var postorderTraversal = function(root) {
    let ans = [];
    let s1 = [root];
    let s2 = [];
    let curr;
    while (s1.length) {
        curr = s1.pop();
        curr?.val && s2.push(curr.val);
        curr?.left && s1.push(curr.left);
        curr?.right && s1.push(curr.right);
    }
    ans = s2.reverse();
    return ans;
};

// problem 6 : postorder traversal using 1 stack

var postorderTraversal = function(root) {
    let ans = [];
    let s1 = [];
    let curr = root;
    let lastVisited = null;
    while (s1.length || curr){
        while (curr){
            s1.push(curr);
            curr = curr.left;
        }
        let peekNode = s1[s1.length -1];
        if (peekNode?.right && peekNode.right != lastVisited ){
            curr = peekNode.right;
        } else {
            peekNode && ans.push(peekNode?.val);
            lastVisited = s1.pop();
        }
    }
    return ans;
};