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
}
  //O(n)
//   remove(head, offset) {
//     if (offset === 0) return head.next;

//     head.next = remove(head.next, offset - 1);
//     return head;

//     if(!this.next) {
//       return this;
//     }

//     if(this === val) {
//       this.value = this.next.value;
//       this.next = this.next.next;
//     } else if (this.next === val) {
//       this.next = this.next.next;
//     } else {
//       this.next.remove(val);
//     }
//     return this;
//   }
// }

// Node Delete(Node head, int position) {
//   if (position == 0) { return head.next; }
//   head.next = Delete(head.next, position - 1);
//   return head;
// }
module.exports = SLL;