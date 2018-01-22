'use strict'

const Nd = require('./nd')

class SLL {
  constructor() {
    this.head = null
  }

  insertHead(val) {
    // O(1)
    let nd = new Nd(val)
    nd.next = this.head
    this.head = nd
    return this
  }

  insertEnd(val) {
    // O(1)
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
    // O(log n)
    if (!offset) return null
    if (offset === 0) return null
    if (this.head.next === null) return null
    
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

  reverse() {
    // O(log n)
    if (this.head.next === null) return null
    
    let thisOne = this.head
    this.head = null
    let next = null
    let lastOne = null
    
    while (!this.head) {
      if (thisOne.next) {
        next = thisOne.next
      } else {
        next = null
      }
      if (lastOne) {
        thisOne.next = lastOne
      } else {
        thisOne.next = null
      }
      lastOne = thisOne
      if (next) {
        thisOne = next
      } else {
        this.head = thisOne
      }
    }
    return this
  }
}
module.exports = SLL