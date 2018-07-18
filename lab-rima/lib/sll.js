'use strict';

const Nd = require('./nd');


class SLL {
  // O(1)
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // O(1)
  insertHead(val) {
    let node = new Nd(val);
    node.next = this.head;
    this.head = node;
    // update this.length
    this.length++;
    return this;
  }

  // O(n)
  insertEnd(val) {
    let node = new Nd(val);
    // update this.length
    this.length++;
    if(!this.head) {
      this.head = node;
      return this;
    }
    
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;

    return this;
  }

  // O(n)
  reverse() {
    let newThis = new SLL();
    let current = this.head;
    while(current){
      newThis.insertHead(current.value);
      current = current.next;
    }

    this.head = newThis.head;
    return this;
  }

  // O(n)
  remove(n) {
    // invalid n
    if(n > this.length || n <= 0 || typeof n !== 'number'){
      return null;
    }

    // if n === 1 (remove head)
    if(n === 1){
      this.head = this.head.next;
      return this;
    }

    // find a node one before offset
    let pre = this.findNthNode(n-1);
    // point pre's next to offset's next node
    pre.next = pre.next.next;
    // update this.length
    this.length--;
    return this;
  }	

  // O(n)
  findNthNode(n) {
    // invalid n
    if(n > this.length || n <= 0 || typeof n !== 'number'){
      return null;
    }

    // traverse linked list
    let count = 1; // count this.head as first node
    let currentNode = this.head;

    while(count < n){
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // O(n)
  findNthNodeFromEnd(n) {
    // find(this.length - N + 1)thNode from head
    return this.findNthNode(this.length - n + 1);
  }
}

module.exports = SLL;

