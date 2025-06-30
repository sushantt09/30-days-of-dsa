// problem 1 : palindrome linked list
// easiest way using array (not recommended for interviews)
// time complexity: O(n) and space complexity: O(n)
var isPalindrome = function(head) {
    let curr = head;
    let arr = [];
    while (curr){
        arr.push(curr.val);
        curr = curr.next;
    }
    let mid = Math.floor(arr.length/2);
    for (let i=0; i < mid; i++){
        if (arr[i] !== arr[arr.length - i - 1]){
            return false;
        }
    }
    return true;
};

// problem 2 : palindrome linked list
// using two pointers
// time complexity: O(n) and space complexity: O(1)     
    var isPalindrome = function(head) {
        if (!head || !head.next) return true;

        let slow = head, fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null, curr = slow;
        while (curr) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }

        let left = head, right = prev;
        while (right) {
            if (left.val !== right.val) return false;
            left = left.next;
            right = right.next;
        }
        
        return true;
    };

    // problem 3 : intersection of two linked lists
    // time complexity: O(n) and space complexity: O(n)
    var getIntersectionNode = function(headA, headB) {
        // put all nodes of head b inside a set 
        let seen = new Set(); let curr = headB;
        while (headB){
            seen.add(headB);
            headB = headB.next;
        }
    
        // check for elements of headA present inside headB
        while (headA) {
            if (seen.has(headA)){
                return headA;
            }
            headA = headA.next;
        }
        return null;
    };
    // another approach using two pointers
    var getIntersectionNode = function(headA, headB) {
        if (!headA || !headB) return null;

        let a = headA, b = headB;
        while (a !== b) {
            a = a ? a.next : headB; //iterating headA then move to headB 
            b = b ? b.next : headA; // iterating headB then move to headA as to meet at a common point
        }
        return a;
    };