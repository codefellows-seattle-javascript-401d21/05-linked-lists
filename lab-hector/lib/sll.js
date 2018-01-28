'use strict';

const Nd = require('./ndB');

class SLL {
  constructor() {
    this.head = null;
  }
  insertHead(val) {
    if(!val) return null; //check if there is something in there first
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    return this;
  }
  insertEnd(val){
    if(!val) return null; //if there is no value break
    let nd = new Nd(val);
    if(!this.head) {
      this.head = nd;
      return this;
    }
    for (var itrtn = this.head; itrtn.next; itrtn= itrtn.next);
    itrtn.next = nd;
    return this;
  }

  reverseSLL(){
    let current, next, prev;
    current = this.head;
    next = null;
    prev = null;
    this.head = null;
    

    while(!this.head){
      if(current.next) {
        next = current.next;
      } else {
        next = null;
      }
      if(prev){
        current.next = prev;
      } else{
        current.next = null;
      }
      prev = current;
      if(next) {
        current = next;
      } else {
        this.head = current;
      }    
    }
    return this;
  }

  removeSLL(index){
    if(!index || typeof index !== 'number') return null;
    if(index === 1){
      this.head = this.head.next;
      return this;
    }
    let current = this.head, prev;
    for(var itrtn = 1; itrtn <= index; itrtn++){
      if (itrtn === index){
        if(current.next){
          prev.next= current.next;
        } else {
          prev.next = null;
        }
        return this;
      }
      prev = current;
      current = current.next;
    }
  }
}


module.exports = SLL;


