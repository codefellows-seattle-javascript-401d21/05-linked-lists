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
  remove(offset) {
    let curr = this.head;
    let prev = null;
    while(offset !== 0){
      offset--;
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
    curr.next = null;
    return this;
  }
  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;
    while(curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return this;
  }
}

module.exports = SLL;