'use strict';

const Nd = require('./nd.js');

class SLL {
  constructor() {
    this.head = null;
    // this.listLength = 0;
  }

  insertHead(val) {
    if(!val) return null;
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    // this.listLength ++;
    return this;
  }

  insertEnd(val) {
    let nd = new Nd(val);
    if(!this.head) {
      this.head = nd;
      this.listLength ++;
      return this;
    }
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    // this.listLength ++;
    return this;
  }

  reverse() {
    let curr, nxt, prev;
    curr = this.head; // points to head
    nxt = null; //represents next node
    prev = null; //represents previous node
    this.head = null; //setting up for while loop

    //while current node is not null
    while(!this.head){
      //step one, is there another node? next node is current.next
      curr.next ? nxt = curr.next : nxt = null;
      //step two, is there a previous node? current.next now points to previous
      prev ? curr.next = prev : curr.next = null;
      //step three, previous is now what was current node
      prev = curr;
      //step four, if next node is not null, current node is now next node, otherwise current node is now the head node
      nxt ? curr = nxt : this.head = curr;
    }
    //once current node is null, previous now represents the head node
    return this;
  }

  remove(offset) {
    //invalid if no offset
    if(!offset) return null;
    //invalid typeof offset
    if(typeof offset !== 'number') return null;
    //remove the head and make the next node the head, return new linked list
    if(offset === 1) {
      this.head = this.head.next;
      return this;
    }
    //current node starts first node, which implies there is no previous node
    let curr = this.head, prev;
    //for loop starting at first/head node
    for(var itr = 1; itr <= offset; itr++) {
      //if iterator is located at current node equal to offset
      if (itr === offset) {
        //check if the current node has a next, if it does, link the previous node to the one ahead of current node
        //otherwise previous node is last node and has no node after it
        curr.next ? prev.next = curr.next : prev.next = null;
        //then return new linked list
        return this;
      }
      //if the iterator is still less than offset, move the previous node forward one
      prev = curr;
      //and assign the current node to the next one
      curr = curr.next;
    }
  }

  //this function lead to building a counter in the constructor
  findNthNodeFromEnd(n) {

    //invalid n arguments
    if(!n) return null;
    if(typeof n !== 'number') return null;
    if(n > this.listLength || n < 0) return null;

    //current starts at head node
    let curr = this.head;
    //x marks the spot, list length represents number of last node
    let x = this.listLength - n;
    //iterate through nodes until iterator equals x
    for(let i = 1; i < x; i ++) {
      //assign current node to next node
      curr = curr.next;
    }
    //iterator is now at x, this is the nth node from last
    return curr;
  }
}

module.exports = SLL;
