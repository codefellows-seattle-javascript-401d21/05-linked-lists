'use strict';

const Nd = require('./nd.js');

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

  reverse(sll) {
    //if only one node, return that node
    if(!sll.head || !sll.head.next) return sll;

    let nodes = [], current = sll.head;

    while(current){
      nodes.push(current);
      current = current.next;
    }

    let reversedLL = new Nd();

    reversedLL.head = nodes.pop();
    current = reversedLL.head;

    let node = nodes.pop();

    while(node){
      node.next = null;
      current.next = node;

      current = current.next;
      node = nodes.pop();
    }
    return reversedLL;
  }

  remove(offset) {

  }

  // findNthNode(val, n)
}
