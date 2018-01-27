'use strict';

const Nd = require('../lib/nd');

class SLL {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //O(1)
  insertHead(val) {
    if(typeof val !== 'number') return 'ERROR: non-numerical input';
    let node = new Nd(val);
    node.next = this.head;
    this.head = node;
    this.length += 1;
    return this;
  }
  
  //O(n)
  insertEnd(val) {
    if (typeof val !== 'number') return 'ERROR: non-numerical input';
    let node = new Nd(val);
    if(!this.head) {
      this.head = node;
      this.length += 1;
      return this;
    }
    for(var i = this.head; i.next; i = i.next);
    i.next = node;
    this.length += 1;
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
      this.head = result;
      return this;
    }
  }

  //O(n)
  remove(offset) {
    if(this.length === 0) return 'ERROR: No nodes to delete';
    if(offset === 1) { //if first node is the node to be deleted
      let current = this.head; //create temporary var current, assigned value of the head
      current = current.next; //current reassigned to value of current.next
      this.head = current; //head reassigned value of current, which has been linked to the node after the one to be deleted
      this.length--; //decrements length of SLL
      return this;
    } else {
      let previous; //declaring temp var previous
      let current = this.head; //declaring temp var current and assigning value of head
      let counter = 0; //declaring counter to track offset
      while (counter < offset - 1) { //while the counter is less than the offset
        previous = current; //assign value of current node (initially head) to previous, then the value of next nodes index as while loop continues
        current = current.next; //assign value of currents next to current
        counter++; //increment counter for while loop stop condition
      }
      previous.next = current.next; //previous (node prior to one being deleted) is assigned value of node to be deleted's next, essentially unlinking the node to be deleted
      this.length--; //decremend SLL length

      return this; //return SLL without deleted node
    }
  }
}

module.exports = SLL;