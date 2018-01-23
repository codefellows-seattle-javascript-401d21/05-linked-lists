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
  reverse() {

    let prev = null;
    let current = this.head;
    let saved;
    while (current.next != null) {
      saved = current.next;
      current.next = prev;
      prev = current;
      current = saved;
    }
    current.next = prev;
    this.head = current;
    return this;

  }
  removeOffSet(offSet) {
    console.log('inside removeoffset', offSet);
    if(!arguments.length) return null;
    if(!this.head) {
      return this;
    }
    let currentNode = this.head;


    if(offSet === 0) {
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
