'use strict'

const Nd = require('./nd')
// import Nd from './nd'

class SLL {
  constructor() { // Big-O runtime:  O(1)
    this.head = null
  }

  insertHead(val) { // Big-O runtime:  O(1)
    let nd = new Nd(val)

    nd.next = this.head
    this.head = nd
    return this
  }

  insertEnd(val) { // Big-O runtime:  O(1) if no head, O(n) if there is a head
    let nd = new Nd(val)

    if(!this.head) {
      this.head = nd
      return this
    }

    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd
    return this
  }

  remove(offset) { // Big-O runtime:  O(1) if no head, O(n) otherwise
      if (this.head === null) return null;

      let temp = this.head;

      if (offset === 0) // if head needs to be removed
      {
          this.head = temp.next;
          return this;
      }

      for (let i = 0; temp != null && i < offset - 1; i++) { // find the node prev to one to be deleted
          temp = temp.next;
      }

      if (temp === null || temp.next === null) {
          return null;
      }

      //node temp.next is the node to be deleted
      //we need to store a pointer to next node after
      let next = temp.next.next;

      temp.next = next; // unlink node from list
      return this;
  }

  reverse() { // Big-O runtime:  O(n)
      let prevNode = null;
      let currNode = this;
      let nextNode = null;

      while (currNode !== null)
      {
          nextNode = currNode.next;
          currNode.next = prevNode;
          prevNode = currNode;
          currNode = nextNode;
      }
      this.head = prevNode;
      return this;
  }

  findNthNodeFromEnd(n) {
    // not implemented
  }
}

module.exports = SLL