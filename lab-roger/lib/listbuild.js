'use strict';

const Nb = require('./nodebuild');

class NewList {
  constructor() {
    this.head = null;
  }

  createHeadNode(value) {
    if(!value) return null;
    let newNode = new Nb(value);

    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  createTailNode(value) {
    if(!value) return null;
    let newNode = new Nb(value);
    if(!this.head) {
      this.head = newNode;
      return this;
    }

    let testNode = this.head;

    while(testNode.next != null) {
      testNode = testNode.next;
    }
    testNode.next = newNode;
    return this;
  }

  removeNode(value) {
    if(!value) return null;
    if(!this.head) {
      return this;
    }
    let testNode = this.head;
    while(testNode.next.value != value) {
      testNode = testNode.next;
    }
    testNode.next = testNode.next.next;
    return this;

  }
  // reverse() {
  //   if(!this.head) {
  //     return this;
  //   }
  //
  //   let currentNode = this.head;
  //   let previous = null;
  //
  //   while(currentNode) {
  //     let saved;
  //     console.log('_____________________');
  //     if(currentNode.next != null) {
  //       let saved = currentNode.next;
  //     } else {
  //       saved = currentNode;
  //     }
  //     console.log('saved', saved)
  //     currentNode.next = previous;
  //     console.log('current.next', currentNode.next);
  //     previous = currentNode;
  //     console.log('previous', previous);
  //     currentNode = saved;
  //     console.log('currentNode', currentNode);
  //     console.log('___________________');
  //
  //   }
  //
  //   return this;
  //
  // }
  removeOffSet(offSet) {
    if(!offSet) return null;
    if(!this.head) {
      return this;
    }
    let currentNode = this.head;
    if (offSet === 0) {
      this.head = currentNode.next;
      return this;
    }
    let counter = 0;
    while(counter < offSet-1) {
      currentNode = currentNode.next;
      counter ++;
    }

    currentNode.next = currentNode.next.next;
    return this;
  }

}

module.exports = NewList;
