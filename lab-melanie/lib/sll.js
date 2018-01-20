'use strict';

const Nd = require('./lib/nd.js');

class SLL {
  constructor() {
    this.head = null
  }

  insert(val) {
    led nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    return this;
  }

  
}
