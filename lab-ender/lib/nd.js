'use strict';

module.exports = class Node {
  constructor(value) {
    // O(1)
    this.value = value;
    this.next = null;
  }
}
