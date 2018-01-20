'use strict';

// const SLL = module.exports = {};
const Nd = require('./nodeBuilder');


class SLL {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  insertHead(val) {
    if (!val) return null;
    let newHead = new Nd(val);
    this.next = newHead;
    newHead.head = this;
    return this;
  }

  insertEnd(val){
    if (!val) return null;
    let nd = new Nd(val);
    if(!this.next) {
      this.next = nd;
    } else {
      return this;
    }
  }

  reverseSLL(arr) {
    if (!arr) return undefined;
    var node = arr;
    var lastOne = null;

    while(node) {
      // save next or you lose it!!!
      var save = node.next;
      // reverse pointer
      node.next = lastOne;
      // increment lastOne to current node
      lastOne = node;
      // increment node to next node or null at end of list
      node = save;
    }
    return lastOne;
  }

  removeSLL(index) {
    if (!index) return undefined;
    var current = this.head;
    //case-1
    if(current.value == index){
      this.head = current.next;
    }
    else{
      var previous = current;

      while(current.next){
        //case-3
        if(current.value == index){
          previous.next = current.next;
          break;
        }
        previous = current;
        current = current.next;
      }
      //case -2
      if(current.value == index){
        previous.next == null;
      }
    }
  }
}

module.exports = SLL;
