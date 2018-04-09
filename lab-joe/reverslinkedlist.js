'use strict';

function LinkedList () {
    this.head = null;
}

LinkedList.prototype.reverseLinkedList = function () {

  // Empty or a single element Linked List
  if (!this.head || !this.head.next) {
    console.log('No duplicates were found. Empty or a single element Linked List.');
    return;
  }

  var p1 = null;
  var p2 = this.head;
  var p3;

  while (p2) {
    p3 = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p3;
  }

  this.head = p1;
}

// Base case : Zero nodes
var L1 = new LinkedList();

L1.reverseLinkedList();
console.log(L1);

// Single node
var L2 = new LinkedList();
L2.insertNodeAtTail(5);

L2.reverseLinkedList();
console.log(L2);

// Two nodes
var L3 = new LinkedList();
L3.insertNodeAtTail(5);
L3.insertNodeAtTail(6);

L3.reverseLinkedList();
console.log(L3);

// Generic case
var L4 = new LinkedList();
L4.insertNodeAtTail(5);
L4.insertNodeAtTail(6);
L4.insertNodeAtTail(7);
L4.insertNodeAtTail(8);
L4.insertNodeAtTail(5);

L4.reverseLinkedList();
console.log(L4);