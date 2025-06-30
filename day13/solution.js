// implementation of linked list in js
var Node = function (val){
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
}
/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i=0; i < index; i++){
        curr = curr.next;
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if (this.head === null) {
        this.head = newNode;
    } else {
        // reach the last element
        let curr = this.head;
        while (curr.next !== null ){
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let newNode = new Node(val);
  if (index < 0 || index > this.size) return;
  if (index === 0){
    this.addAtHead(val);
    return;
  } else if (index === this.size) {
    this.addAtTail(val);
    return;
  } else {
    let curr = this.head;
    for (let i=0; i < index-1; i++){
        curr = curr.next;
    }  
    newNode.next = curr.next;
    curr.next = newNode;
  }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let curr = this.head;
        for (let i=0; i< index -1; i++){
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--;
};

// problem 2 : find the middle of the linked list
MyLinkedList.prototype.findMiddle = function() {
    if (this.size === 0) return null;
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {//or while (fast && fast.next){}  // fast pointer moves twice as fast as slow pointer
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.val;
};

// problem 3 : reverse the linked list
var reverseList = function(head) {
    let temp; 
    let prev = null;
    let curr = head;
    while (curr) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    head = prev;
    return head;  
  };