// problem 1 : swap pairs in the linked list
// Given a linked list, swap every two adjacent nodes and return its head.
// time and space complexity: O(n) and O(1)
var swapPairs = function(head) {
    length = 0; 
    let curr = head;
    while (curr){
        curr = curr.next;
        length++;
    }
    if (!head || length === 1 ) return head;
    let prev = new ListNode(); let copyPrev = prev;
    let pos = head;
    for (let i=0; i < Math.floor(length/2); i++){
        prev.next = pos.next;
        let temp = pos.next;
        pos.next = pos.next.next;
        temp.next = pos;
        prev = pos;
        pos = pos.next;
    }
    return copyPrev.next;
};

// OR 
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let dummy = new ListNode();
    dummy.next = head;
    let p = dummy;
    let c = head;
    let n = head.next;

    while (c && n) {
        p.next = n;
        c.next = n.next;
        n.next = c;

        p = c;
        c = p.next;
        n = c && c.next;
    }
    
    return dummy.next;
}

// problem in the recursive approach 
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let l = head;
    let r = head.next;
    l.next = swapPairs(r.next);
    r.next = l;

    return r;
};