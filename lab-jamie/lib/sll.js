'use strict';

const Nd = require('./nd.js');

class SLL {
  constructor() { // Big-O = 0(1) 
    this.head = null;
  }
    
  insertHead(val) { // Big O = 0(1)
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    return this;
  }

  findNthNodeFromEnd(n) { // Big O = 0(n)
    let i = 0, cur;
    for(var nxt = this.head; nxt.next; nxt = nxt.next){
      (!(i % n)) ? cur = nxt : undefined;
      i++;
    }
    this.head = cur;
    return this;
  }

  insertEnd(val) { // Big O = 0(1)
    let nd = new Nd(val);
    (!this.head) ? this.head = nd : undefined;
    if(!this.head) return this;
    for(var itr = this.head; itr.next; itr = itr.next); 
    itr.next = nd;
    return this;
  }

  remove(offset) { // Big O = 0(n)
    let n = this.head, pre;
    do {
      pre = n;
      n = n.next;
      offset--;
    } while (offset);
    pre.next = n.next;
    return  pre;
  }

  reverse() { // Big O = 0(n)
    let nxt = this.head, pre = null, cur;
    do {
      cur = nxt;
      nxt = nxt.next;
      cur.next = pre;
      pre = cur;
    } while (nxt);
    this.head = cur;
    return this;
  }
}