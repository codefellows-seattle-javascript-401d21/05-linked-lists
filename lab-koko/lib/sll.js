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
  // remove(offset) {
  //   var curNd = this.head, count=0, prev;
  //   if(this._length===0) return;
  //   if(offset===0){
  //     this.head = curNd.next;
  //     this._length--;
  //   }else{
  //     while(count<offset-1){
  //       prev = curNd;
  //       curNd = curNd.next;
  //       count++;
  //     }
  //     prev.next = curNd.next;
  //     this._length--;
  //     return this.head;
  //   }
  // }
  // reverse(head) {
  //   var result = null;
  //   var stack = [];
  //   var curNd = head;
  //   while (curNd) {
  //     stack.push(curNd);
  //     curNd = curNd.next;
  //   }
  //   result = stack.pop() || [];
  //   curNd = result;
  //   while (curNd) {
  //     curNd.next = stack.pop();
  //     curNd = curNd.next;
  //   }
  // }
}

module.exports = SLL;