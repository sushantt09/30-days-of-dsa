// problem 1 : add two numbers in linked list and list is in reverse order and return the sum in linked list in reverse order
// Example: l1 = [2,4,3], l2 = [5,6,4] => return [7,0,8] (because 342 + 465 = 807)
// time and space complexity is O(n) where n is the length of the longest linked list
var addTwoNumbers = function(l1, l2) {
    // create a dummy node , while loop adding vals and passing carry , and adding digit to the dummy node, once loop ends return copyof headnode
    let ans = new ListNode();
    let copyAns = ans;
    let carry = 0;
    while (l1 || l2 || carry){
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
        carry = Math.floor(sum/10);
        digit = sum%10;
        let newDigit = new ListNode(digit);
        ans.next = newDigit;
        ans = ans.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next; 
    }
    return copyAns.next;
};

// problem 2 : merge two sorted linked lists and return the merged list
var mergeTwoLists = function(l1, l2) {
    let start = new ListNode(); // create a dummy node to start the merged list
    let curr = start;
    while (l1 && l2){
        if (l1.val <= l2.val){
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if (!l1){
        curr.next = l2;
    } 
    if (!l2){
        curr.next = l1;
    }
    return start.next;
};

// problem 3 : rotate linked list by k places
// time complexity is O(n) and space complexity is O(1)
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    let length = 0;
    let curr = head;
    while (curr){
        curr = curr.next;
        length++;
    }
    let s = head; 
    let f = head;
    k = k % length;
    for (let i=0; i < k; i++){
        f = f.next;
    }

    while (f.next){
        s = s.next;
        f = f.next;
    }

    f.next = head;
    let newHead = s.next;
    s.next = null;
    return newHead;
};