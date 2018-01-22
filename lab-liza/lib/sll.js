'use strict';

const Nd = require('../lib/nd');

class SLL {
  constructor() {
    this.head = null;
  }

  insertHead(val) {
    let nd = new Nd(val);

    nd.next = this.head;
    this.head = nd;
    return this;
  }
  // Big O run time: O(1)
  insertEnd(val) {
    let nd = new Nd(val);

    if(!this.head) {
      this.head = nd;
      return this;
      // Big O run time: O(1)
    }

    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
    // Big-O run time: O(n)
  }

  remove(offset) {
    let curr = this.head;
    let prev = null;

    while(offset !== 0){
      offset--;
      prev = curr;
      curr = curr.next;
      // Big-O run time: O(n)
    }
    prev.next = curr.next;
    curr.next = null;
    return this;
    // Big-O run time: O(1)
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;

    while(curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      // Big-O run time: O(n)
    }
    this.head = prev;
    return this;
    // Big-O run time: O(1)
  }
}

module.exports = SLL;