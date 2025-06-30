// problem 1 : remove the element from the linked list
// time complexity and space complexity= O(n) & O(1)
function ListNode (val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function removeElement (head, val) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;
    while (prev && prev.next) {
        if (prev.next.val === val){
            // remove element;
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }
    return sentinel.next;
}

// problem 2 : remove nth node from the end of the linked list
// time and space complexity = O(n) && O(1)
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let length = 0;
    while (head){
        head = head.next;
        length++;
    }
    let prevPos = length - n;
    let prev = sentinel;
    for (let i=0; i < prevPos; i++){
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
}; // here we are traversing the linked list two times 1. calculate the length 2. move to the prev position of the element to delete

// reduce the two pass into one pass solution 
// same problem with one pass solution best approach using two pointers
// same time complexity and space complexity as above

var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let s = sentinel;
    let f = sentinel;
    for (let i=0; i<n ; i++){
        f = f.next;
    }
    while (f && f.next){
        f = f.next;
        s = s.next;
    }
    s.next = s.next.next;
    return sentinel.next;
};

// problem 3 : remove duplicate elements
// time and space complexity : O(n) & O(1)
var deleteDuplicates = function(head) {
    let curr = head;
    while (curr && curr.next){
        if (curr.val === curr.next.val){
            curr.next = curr.next.next;
        } 
        else {
            curr = curr.next;
        }
    }
    return head;
};

// problem 4 : odd even position linked list
// time and space complexity : O(n) & O(1)
var oddEvenList = function(head) {
    if (!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenStart = even;
    while (odd.next && even.next){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenStart;
    return head;
}
