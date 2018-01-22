'use strict';

const Nd = require('./nd');

class SLL {
  constructor() {
    this.head = null;
  }

  insertHead(val) {
    //if val is undefined then return null
    if(val === undefined) return null;
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    return this;
  }

  insertEnd(val) {
    //if val is undefined then return null
    if(val === undefined) return null;
    let nd = new Nd(val);
    //if this.head is undefined, set the new node to the head
    if(!this.head) {
      this.head = nd;
      return this;
    }
    //iterate the link list unto]il you find the end and addd the node
    for(var node = this.head; node.next; node = node.next);
    node.next = nd;
    return this;
  }

  reverse() {
    //if this head is null then there is nothing to reverse
    if(!this.head) return this;
    let curr_node;
    let next_node = this.head;
    let prev = null;
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
    if ( !offset || typeof offset !== 'number' ) return null;
    let cur_node = this.head;
    let prev_node = cur_node;
    let i = 1;

    //if the offset is 1 then reset the head to next
    if (offset === 1) {
      this.head = prev_node.next;
      return this;
    }

    //connect the previous and next when the off set is found
    while(cur_node){
      if( offset === i ){
        prev_node.next = cur_node.next;
        this.head = prev_node;
        return this;
      } 
      prev_node = cur_node; 
      cur_node = cur_node.next;
      i++;
    }
    return null;
  }


  findNthNodeFromEnd(n) {
    if( typeof n !== 'number' ) return null;
    let i = 0;
    let curr_node = this.head;
    for(let next_node = this.head; next_node.next; next_node = next_node.next){
      if((i > n)) curr_node = curr_node.next;
      i++;
    }
    curr_node = curr_node.next;
    if(i < n) curr_node = null;
    this.head = curr_node;
    return this;
  }
}

module.exports = SLL;