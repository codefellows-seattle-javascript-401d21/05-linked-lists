'use script';

const Node = require('./nd');

module.exports = class SLL {
  constructor() {
    // O(1)
    this.head = null;
  };

  insertHead(value) {
    // O(1)
    if (isNaN(value)) { return this };
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  };

  insertEnd(value) {
    // O(n)
    if (isNaN(value)) { return null };
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let current = this.head;
    for (current; current.next = null; current = current.next);
    console.log(node, this);
    current.next = node;
    console.log(this);
    return this;
  };

  reverse() {
    //O(n)
    let next;
    let prev = null;
    let current = this.head;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  };

  remove(offset) {
    // O(n)
    let prev;
    let current = this.head;
    if ( offset === 0 ) {
      this.head = this.head.next;
      return this;
    }
    for (let i = 0; i <= offset; i++) {
      prev = current;
      if (current.next === null && offset > 0) {
        return this;
      }
      current = current.next;
      if (i === offset - 1) {
        prev.next = current.next;
      }
    }
    return this;
  }
};
