'use strict';

const Nd = require('./lib/nd');

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
    
    // for(var i = this.head; i.next; i = i.next);
    // i.next = nd;
    // return this;
  }

  reverse() {

  }

  remove(offset) {

  }
}