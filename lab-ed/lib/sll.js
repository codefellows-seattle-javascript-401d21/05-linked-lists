'use strict'

const Nd = require('./nd')

class SLL {
  constructor() {
    this.head = null
  }

  insertHead(val) {
    let nd = new Nd(val)
    nd.next = this.head
    this.head = nd
    return this
  }

  insertEnd(val) {
    let nd = new Nd(val)
    if(!this.head) {
      this.head = nd
      return this
    }
    for(var itr = this.head; itr.next; itr = itr.next)
      ;itr.next = nd
    return this
  }

  remove(offset) {
    if (!offset) return null
    if (offset === 0) return null
    if (this.head.next === null) return null
    if(offset === 1) { 
      this.head = this.head.next
      return this
    }
    let thisOne = this.head
    let lastOne
    for(var itr = 1; itr <= offset; itr++) {
      if (itr === offset) {
        if (thisOne.next) {
          lastOne.next = thisOne.next
        } else {
          lastOne.next = null
        }
        return this
      }
      lastOne = thisOne
      thisOne = thisOne.next
    }
  }
}

//   reverse() {
  
// }

module.exports = SLL