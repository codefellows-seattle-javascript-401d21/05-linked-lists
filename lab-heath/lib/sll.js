'use strict';

// const SLL = module.exports = {};
const Nd = require('./nodeBuilder');


class SLL {
  constructor() {
    this.head = null;
  }

  insertHead(val) { //Big O is O(1). goes right to the front of the line
    if (!val) return null;
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    return this;
  }

  insertEnd(val) { //Big O is O(1) if just one Node, or O(n) if it has to iterates to find end.
    if (!val) return null;
    let nd = new Nd(val);
    if(!this.head) {
      this.head = nd;
      return this;
    }
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }

  reverseSLL() { //Big O is O(n). has to iterate over all of it.
    let current, next, prev;
    current = this.head;
    next = null;
    prev = null;
    this.head = null;

    while (!this.head) {
      if (current.next) {
        next = current.next;
      } else {
        next = null;
      }

      if (prev) {
        current.next = prev;
      } else {
        current.next = null;
      }

      prev = current;

      if (next) {
        current = next;
      } else {
        this.head = current;
      }
    }

    return this;
  }

  removeSLL(index) { //Big O of O(n). has to iterates of the SLL to fine that index.
    if(!index || typeof index !== 'number') return null;
    if(index === 1) {
      this.head = this.head.next;
      return this;
    }
    let current = this.head, prev;
    for(var itr = 1; itr <= index; itr++) {
      if (itr === index) {
        if (current.next) {
          prev.next = current.next;
        } else {
          prev.next = null;
        }
        return this;
      }
      prev = current;
      current = current.next;
    }
  }
}

module.exports = SLL;
