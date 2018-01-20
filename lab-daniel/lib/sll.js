'use strict';

import Nd from './nd'

class SLL {
  constructor (){
    this.head = null;
  }
  insertHead (val) {
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    return this
  }

  insertEnd (val) {
    let nd = new Nd(val);
    
    if (!this.head) {
      this.head = nd;
      return this;
    }

    for (var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this
  }
  remove (rem) {
    if (!rem) return null;
    if (rem = 1) { 
      this.head = this.head.next;
      return this;
    }
    let curNode = this.head, preNode = null;
    for (var loc = 0; loc < counter; loc++) {
      if (loc === rem - 1) {
        preNode.next = curNode.next;
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