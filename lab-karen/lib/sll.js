'use strict'

const Nd = require('./nd');
// import Nd from './nd'

class SLL {
  constructor() {
    this_length = 0;
    this.head = null;
  }

  insertHead(val) {
    let nd = new Nd(val);

    nd.next = this.head;
    this.head = nd;
    return this;
  }

  insertEnd(val) {
    let nd = new Nd(val);

    if(!this.head) {
      this.head = nd;
      return this;
    }

    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currNode){
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.head = prevNode;
  }

  remove(offset) {

  }

  findNthNode(val) {

  }
}

module.exports = SLL;
