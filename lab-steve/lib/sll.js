'use strict';

const Node = require('./nd');

class SLL {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertHead(value) {
    if (!value && value !== 0) return this;

    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  insertEnd(value) {
    if (!value && value !== 0) return this;
    // If the list was empty
    if (!this.length) {
      return this.insertHead(value);
    }

    let node = new Node(value);
    // Find the last node
    for (var itr = this.head; itr.next; itr = itr.next);

    itr.next = node;
    this.length++;

    return this;
  }

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

    // Finally, reassign the head
    this.head = prev;

    return this;
  }

  // offset is treated as an index (e.g. the list starts at 0)
  remove(offset) {
    let node;
    // Nothing to remove
    if (!this.length) return null;
    // It can't be removed if it doesn't exist
    if (offset > this.length - 1) return null;

    // When the node to remove is the head
    if (offset === 0) {
      node = this.head;
      this.head = this.head.next;
      this.length--;
      node.next = null;
      return node;
    }

    // Find the node before the one to remove
    for (var itr = this.head; offset - 1 > 0; itr = itr.next, offset--);

    // Remove it
    node = itr.next;
    itr.next = itr.next.next;
    this.length--;
    node.next = null;
    return node;
  }

  findNthNodeFromEnd(n) {
    // We can't find it if it doesn't exist
    if (n < 0 || n > this.length - 1) return null;

    // Find the node
    let x = this.length - n;
    for (var itr = this.head; x > 1; itr = itr.next, x--);

    return itr;
  }
}

module.exports = SLL;
