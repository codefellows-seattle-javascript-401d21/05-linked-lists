'use strict';

const Nd = require('./nd');

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
    //if this.head is undefined, set the new node to the head
    if(!this.head) {
      this.head = nd;
      return this;
    }

    //iterate the link list unto]il you find the end and addd the node
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }

  reverse() {
    let i = 0;
    let next_node = this.head;
    let prev = null;
    let curr_node;
    while(next_node){
      curr_node = next_node;
      next_node = next_node.next;
      curr_node.next = prev;
      prev = curr_node;
    }
    this.head = curr_node;
    return this;
  }

  remove(offset) {
    let node = this.head;
    let prev;
    while (offset) {
      prev = node;
      node = node.next;
      offset--;
    }
    prev.next = node.next;
    return  prev;
  }

  findNthNodeFromEnd(n) {
    let i = 0;
    let curr_node;
    for(var next_node = this.head; next_node.next; next_node = next_node.next){
      if(! (i % n)) curr_node = next_node;
      i++;
    }
    this.head = curr_node;
    return this;
  }
}

module.exports = SLL;