'use strict';

const Nd = require('./nd.js');

class SLL {
  constructor() {
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
    let curr, nxt, prev;
    curr = this.head; // points to head
    nxt = null; //represents next node
    prev = null; //represents previous node
    this.head = null; //setting up for while loop

    //while current node is not null
    while(!this.head){
      //step one, is there another node? next node is current.next
      curr.next ? nxt = curr.next : nxt = null;
      //step two, is there a previous node? current.next now points to previous
      prev ? curr.next = prev : curr.next = null;
      //step three, previous is now what was current node
      prev = curr;
      //step four, if next node is not null, current node is now next node, otherwise current node is now the head node
      nxt ? curr = nxt : this.head = curr;
    }
    //once current node is null, previous now represents the head node
    return this;
  }

  remove(offset) {


  }

  // findNthNode(val, n)
}

module.exports = SLL;
