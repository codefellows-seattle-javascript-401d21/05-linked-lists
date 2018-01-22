'use strict';

class Node {
  constructor(value) {
    if (value === undefined) value = null;
    this.value = value;
    this.next = null;
  }
}

module.exports = Node;

