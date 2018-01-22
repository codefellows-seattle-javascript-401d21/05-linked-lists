'use strict';

const Node = require('./node.js')

module.exports = class SLL {
  constructor () {
    this.head = null; // on a new linked list, there needs to be a head pointer, but there still aren't any nodes
  }

  insertHead (value) { // O(1)
    if (value === null) return null; // if the input is null, return null
    let newNode = new Node (value); // start by making a new node to add
    newNode.next = this.head; // place this node in front of the current head node
    this.head = newNode; // declare this node to be the head node now that it's in front
    return this; // return the linked list
  }

  insertEnd (value) { // O(1) -> O(n)
    if (value === null) return null; // if the input is null, return null
    let newNode = new Node (value); // start by making a new node to add
    if (this.head === null) { // if there is no head node (the list is empty)...
      this.head = newNode; // set this node to be the head
      return this; // return the linked list
    } // otherwise, because there IS a list head...
    let currentNode = this.head; // start by looking at the head of the list
    while (currentNode.next !== null) { // while the node you're looking at isn't null...
      currentNode = currentNode.next; // look at the next node in sequence
    } // once the next node is null, and you're looking at the last list item...
    currentNode.next = newNode; // chain the item you're looking at to the new node from before
    return this; // return the linked list
  }

  remove (offset) { // O(n)
    let currentNode = this.head; // start by looking at the head of the list
    let previousNode = null; // additionally, set a variable to look one node behind you
    while (offset > 0) { // while the offset still has a value...
      if (currentNode === null) { // if the offset has overshot the end of the list...
        return null; // return null
      } // otherwise, because the offset is still in the list...
      offset--; // reduce the offset by one. This uses it as a counter
      previousNode = currentNode; // move the variable looking at the node behind you to you
      currentNode = currentNode.next; // look at the next node in sequence
    } // once you have finished traversing using the offset...
    if (this.head === currentNode) { // if you're still at the start of the list...
      this.head = currentNode.next; // since you're removing the start, set the head to the next node
      currentNode.next = null; // remove the connection between the node you're looking at and the list
      return this; // return the linked list
    } // otherwise, because you're NOT at the start of the list...
    previousNode.next = currentNode.next; // connect the node bhind you to the node in front of you
    currentNode.next = null; // disconnect your node from the list
    return this; // return the linked list
  }

  reverse () { // O(n)
    let currentNode = this.head; // start by looking at the start of the list
    let previousNode = null; // set a variable to stay behind you, looking at null
    let nextNode; // set up a variable to stay ahead of you
    while (currentNode !== null) { // while you're still looking at a node that exists...
      nextNode = currentNode.next; // move the 'next node' variable to keep track of the next node
      currentNode.next = previousNode; // point your node behind you
      previousNode = currentNode; // bring the previous node pointer forward
      currentNode = nextNode; // move yourself forward in the list
    } // once you are looking at null...
    this.head = previousNode; // set the head of the list to be the last node you were looking at
    return this; // return the linked list
  }

  findNthNodeFromEnd (n) { // O(n)
    let currentNode = this.head; // start by looking at the start of the list
    let length = 0; // this will hold the length of the list
    while (currentNode.next !== null) { // while there still is a next node in the list...
      length++; // add one to the length
      currentNode = currentNode.next; // look at the next node in sequence
    } // once you have reached the end of the list and know the length...
    if (n > length) return null; // return null is n is not in the list
    currentNode = this.head; // go back to the beginning of the list
    let distance = length - n; // the distance needed to traverse is n from the end
    while (distance > 0) { // while distance still has a value
      distance--; // remove one from the distance
      currentNode = currentNode.next; // move to the next node in sequence
    } // once you have reached the node n from the end...
    return currentNode; // return that node
  }
}
