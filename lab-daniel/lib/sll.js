'use strict';

const Nd = require('./nd');

class SLL {
  constructor (){
    this.head = null;
    this.llen = 0;
  }
  insertHead (val) {
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    this.llen++;
    return this;
  }

  insertEnd (val) {
    let nd = new Nd(val);
    
    if (!this.head) {
      this.head = nd;
      this.llen++;
      return this;
    }

    for (var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    this.llen++;
    return this;
  }
  remove (rem) {
    if (!rem) return null;
    if (rem === 1) { 
      this.head = this.head.next;
      this.llen--;
      return this;
    }
    let curNode = this.head, preNode = null;
    for (var loc = 0; loc < rem; loc++) {
      if (loc === rem - 1) {
        preNode.next = curNode.next;
        this.llen--;
        return this;
      }
      preNode = curNode;
      curNode = curNode.next;
    }
  }

  reverse () {
    let cur = this.head, pre = null, next = null;
    this.head = null;
    while (!this.head) {
      cur.next? next = cur.next : next = null;
      pre? cur.next = pre : cur.next = null;
      pre = cur;
      next? cur = next : this.head = cur;
    }
    return this;
  }

  findNthNode() {

  }
}

module.exports = SLL;