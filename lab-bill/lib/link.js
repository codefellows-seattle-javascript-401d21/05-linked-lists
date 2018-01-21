'use strict';


const Nd = require('./node.js');

class SLL {
  constructor() {
    this.head = null;
  }

  insertHead(val) {
    // O(1) because it will always insert at the first point no matter the size of the system. It would operate the same way with 1 node as it would with 1000.
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    return this;
  }

  insertEnd(val) {
    // O(n) because it involves a for loop that iterates through the entire list. As the list grows and grows it would take longer and longer to iterate to the end.
    let nd = new Nd(val);
    if(!this.head) {
      this.head = nd;
      return this;
    }

    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }
  reverse() {
    // O(n) A single while loop will iterate through each instance of the list one time. As the list grew longer this would take longer to complete in a linear fashion.
    let nxt;
    let prev = null;
    let current = this.head;
    while (current !== null){
      nxt = current.next,
      current.next = prev,
      prev = current,
      current = nxt;
    }
    this.head = prev;
  }
  remove(offset) {
    // O(n) Again a single for loop means the larger the data set the longer it will take to iterate through the items. The increase in processing time is linear to the length of the list.
    let prev;
    let current = this.head;
    if (offset === 0) {
      this.head = this.head.next;
    }
    for(var i = 0; i <= offset; i++) {
      prev = current;
      current = current.next;
      if (i  === offset - 1 ) {
        prev.next = current.next;
        
      }
    }
  }
}
module.exports = SLL;


