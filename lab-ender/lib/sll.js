'use script';

const Node = require('./nd');

module.exports = class SLL {
  constructor() {
    this.head = null;
  };

  insertHead(value) {
    if (isNaN(value)) { return null };
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  };

  insertEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }

    for (let current = this.head; current.next; current = current.next);
    current.next = node;
    return this.head;
  };

  reverse() {
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

  };
};
