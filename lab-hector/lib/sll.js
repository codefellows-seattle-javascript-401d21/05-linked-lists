'use strict';

const Nd = require('./nd');
// import Nd from './nd'
//this is the constructor
class SLL {
  constructor() {
    this.head = null;
    this.listLength = 0; //this keeps count of the lenght of the node list
  }
  //inserts starting in first node
  insertHead(val) {
    let nd = new Nd(val);

    nd.next = this.head;
    this.head = nd;
    this.listLength++;
    return this;
  }

  //inserts at the end 
  insertEnd(val) {
    let nd = new Nd(val);

    if (!this.head) {
      this.head = nd;
      this.listLength++;
      return this;
    }

    for (var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    this.listLength++;
    return this;
  }

  remove(rem) {
    if(!rem) return null;
    if(!rem === 1) {
      this.head = this.head.next;
      this.listLength --;
      return this;
    }
    let curNode = this.head, preNode = null;
    for (var loc = 1; loc < rem; loc++) {
      if (loc === rem) {
        preNode.next = curNode.next;
        this.listLength--;
        return this;
      }
      preNode = curNode;
      curNode = curNode.next;
    }
  }

  reverse() {
    let cur = this.head, pre = null, next = null;
    this.head = null;
    while(!this.head) {
      cur.next? next = cur.next : next = null;
      pre? cur.next = pre : cur.next = null;
      pre = cur;
      next? cur = next : this.head = cur;
    }
    return this;
  }

  findNthNode(n) {
    if(!n || typeof n != 'number') return null;
    if(n > this.listLength || n < 1) return null;
    let curNode = this.head; 
    for (let i = 1; i < n; i++){
      curNode =curNode.next;
    }
    return curNode;
  }

} //this one closes class SLL

module.exports = SLL;