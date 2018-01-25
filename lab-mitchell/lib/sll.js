'use strict';

const Nd = require('../lib/nd');

class SLL {
  constructor() {
    this.head = null;
  }

  //O(1)
  insertHead(val) {
    if(typeof val !== 'number') return 'ERROR: non-numerical input';
    let node = new Nd(val);
    node.next = this.head;
    this.head = node;
    return this;
  }
  
  //O(1?)
  insertEnd(val) {
    if (typeof val !== 'number') return 'ERROR: non-numerical input';
    let node = new Nd(val);
    if(!this.head) {
      this.head = node;
      return this;
    }
    for(var i = this.head; i.next; i = i.next);
    i.next = node;
    return this;
  }

  //O(n)
  reverse() {
    if(!this.head || this.head.next) {
      return 'Empty or single element linked list, nothing to reverse';
    }

    let result = null;
    let current = this.head;
    let temp;

    while(current) {
      temp = current.next;
      current.next = result;
      result = current;
      current = temp;
    }
    return result;
  }

  remove(val) {
    if(!this.next) {
      return this;
    }
    if(this === val) {
      this.value = this.next.value;
      this.next = this.next.next;
    } else if (this.next === val) {
      this.next = this.next.next;
    } else {
      this.next.remove(val);
    }
    return this;
  }
}

module.exports = SLL;