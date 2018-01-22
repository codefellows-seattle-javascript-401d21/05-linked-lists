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

  remove(offset) {
    let nd = new Nd(val);

    if (this.head.value === val) {
      this.head = this.head.next;
      return this;
    } else {
      let preNd = this.head;
      let curNd = preNd.next;
      while (curNd) {
        if (curNd.data === val) {
          preNd.next = curNd.next;
          curNd = curNd.next;
          return this;
        }
        else {
          preNd = curNd;
          curNd = curNd.next;
        }
      }
    }
  }
  
  reverse(val) {
    let nd = new Nd(val);
        
    while(nd) {
      if(thisNode.value === val) {
        return thisNode;
      }
        
      thisNode = thisNode.next;
    }
    
    return thisNode;
  }

}

var list = new SLL();
console.log(list);

module.exports = SLL;