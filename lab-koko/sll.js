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

  remove(val) {
    if (this.head.value === val) {
      this.head = this.head.next;
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

  findNthNode() {

  }
}

var list = new SLL();
console.log(list);

module.exports = SLL;