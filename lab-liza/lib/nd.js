'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Big-O run time: O(1)
module.exports = Node;