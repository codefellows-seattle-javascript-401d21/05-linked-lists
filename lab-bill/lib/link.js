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
  remove(offset) {
    let prev;
    let current = this.head;
    for(var i = 0; i <= offset + 1; i++) {
    //   console.log('offset',offset);
    //   console.log('i + 1',i + 1);
      prev = current;
    //   console.log('prev',prev);
      current = current.next;
    //   console.log('current',current);
      if (i  === offset - 1 ) {
        console.log('offset - 1 ',offset - 1);
        console.log('i',i);
        console.log('prev',prev);
        console.log('current',current);
        prev.next = current.next;
        
      }
    }
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
list.remove(1);
console.log('after',list);