'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    return this;
    // Big O Notation: O(1) All Cases
  }
}

module.exports = Node;