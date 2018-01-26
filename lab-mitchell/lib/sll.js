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
  
  //O(n)
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
    if(!this.head || !this.head.next) return 'ERROR: Empty or single element linked list, nothing to reverse';
    if(this.head.next) {
      let result = null;
      let current = this.head;
      let temp;

      while(current) {
        temp = current.next; //temp reassigned value of current.next, initially whatever contained in head
        current.next = result; //current.next (initially head.next) reassigned to null;
        result = current; //result is reassigned the value of current
        current = temp; //the head becomes the new temp
      }
      return {head: result};
    }
  }

  //O(n)
  remove(offset) {
    if(!this.head) return this;

    //dissociating object from this list, hey previous your next is now the next value right here

    for(let i = -1; i < offset; i++) {
      this.head = this.head.next;
    }
    return;
  }
}

module.exports = SLL;