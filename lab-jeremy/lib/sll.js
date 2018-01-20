'use strict'

const Nd = require('./nd')
// import Nd from './nd'

class SLL {
  constructor() {
    this.head = null
  }

  insertHead(val) {
    let nd = new Nd(val)

    nd.next = this.head
    this.head = nd
    return this
  }

  insertEnd(val) {
    let nd = new Nd(val)

    if(!this.head) {
      this.head = nd
      return this
    }

    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd
    return this
  }

  remove(offset) {
      if (this.head === null) return null;

      let temp = this.head;

      if (offset === 0) // if head needs to be removed
      {
          this.head = temp.next;
          return this;
      }

      for (let i = 0; temp != null i < position - 1; i++) { // find the node prev to one to be deleted
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

  reverse() {
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

  }
}

module.exports = SLL