'use strict';

const Node = require('./nd');

class SLL {
  constructor() {
    this.head = null;
    this.length = 0;
  }


  // big o notation - O(1)
  insertHead(value) {
    if (!value && value !== 0) return this;

    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

    // big o notation - O(n)
  insertEnd(value) {
    if (!value && value !== 0) return this;
    if (!this.length) {
      return this.insertHead(value);
    }

    let node = new Node(value);
    for (var itr = this.head; itr.next; itr = itr.next);

    itr.next = node;
    this.length++;

    return this;
  }

      // big o notation - O(n)
  reverse() {
    if (!this.length) return this;

    let prev = null;
    let cur = this.head;
    let next;

    while (cur) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }

    this.head = prev;

    return this;
  }

    // big o notation - O(n)
  remove(offset) {
    let node;
    if (!this.length) return null;
    if (offset > this.length - 1) return null;
    if (offset === 0) {
      node = this.head;
      this.head = this.head.next;
      this.length--;
      node.next = null;
      return node;
    }


  for (var itr = this.head; offset - 1 > 0; itr = itr.next, offset--);
    node = itr.next;
    itr.next = itr.next.next;
    this.length--;
    node.next = null;
    return node;
  }

}

module.exports = SLL;