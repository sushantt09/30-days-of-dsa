// problem 1: cycle in a linked list
// time complexity: O(n) and space complexity: O(n)
var hasCycle = function(head) {
    let curr = head;
    let seen = new Set();
    while (curr) {
        if (seen.has(curr)){ return true};
        seen.add(curr);
        curr = curr.next;
    }
    return false;
};

// Floyd's cycle detection algorithm
// time complexity: O(n) and space complexity: O(1)
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};