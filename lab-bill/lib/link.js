'use strict';


const Nd = require('./node.js');

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
    let nxt;
    let prev;
    let current = this.head;
    while (current !== null){
      nxt = current.next,
      current.next = prev,
      prev = current,
      current = nxt;
    }
    this.head = prev;
  }

}
module.exports = SLL;
let list = new SLL;

list.insertEnd(1);
list.insertEnd(2);
list.insertEnd(3);
list.insertEnd(4);
list.insertEnd(5);
console.log('before',list);
list.reverse();
console.log('after',list);