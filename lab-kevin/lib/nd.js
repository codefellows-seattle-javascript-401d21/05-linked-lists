'use strict';

class Node {
  constructor(value) {
    if (value === undefined) value = null;
    this.value = value;
    this.next = null;
  }
}
//Big-O 0(1)
module.exports = Node;

