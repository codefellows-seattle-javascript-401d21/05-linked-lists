'use strict';

const Nd = require('./nd');

class SLL {
  constructor (){
    this.head = null;
    this.lLen = 0;
    return this;
    // Big O Notation: O(1) All Cases
  }
  insertHead (val) {
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    this.lLen++;
    return this;
    // Big O Notation: O(1) All Cases
  }

  insertTail (val) {
    let nd = new Nd(val);
    
    if (!this.head) {
      this.head = nd;
      this.lLen++;
      return this;
      // Big O Notation: O(1) Best Case
    }

    for (var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    this.lLen++;
    return this;
    // Big O Notation: O(n) Worst Case
  }
  remove (rem) {
    if (!rem) return null;
    if (rem === 1) { 
      this.head = this.head.next;
      this.lLen--;
      return this;
      // Big O Notation: O(1) Best Case
    }
    let curNode = this.head, preNode = null;
    for (var loc = 1; loc <= rem; loc++) {
      if (loc === rem) {
        preNode.next = curNode.next;
        this.lLen--;
        return this;
        // Big O Notation: O(n) Worst Case
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
    // Big O Notation: O(n) All Cases
  }

  findNthNode(n) {
    if (!n || typeof n !== 'number') return null;
    if (n > this.lLen || n < 1) return null;
    let curNode = this.head;
    for (let i = 1; i < n; i++) {
      curNode = curNode.next;
    }
    return curNode;
    // Big O Notation: O(n) All Cases
  }

  findNthFromLastNode(n) {
    if (n !== 0 && !n || typeof n !== 'number') return null;
    if (n > this.lLen || n < 0) return null;
    let curNode = this.head, nLoc = this.lLen - n;
    for (let i = 1; i < nLoc; i++) {
      curNode = curNode.next;
    }
    return curNode;
    // Big O Notation: O(n) All Cases
  }
}

module.exports = SLL;