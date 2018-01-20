'use strict';

const Nd = require('./lib/nd.js');

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

  }

  remove(offset) {
    
  }

  findNthNode(val, n)
}
