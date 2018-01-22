'use strict'

const Nd = require('./nd');


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

    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd
    return this
  }




reverse(){

  // Empty or a single element Linked List
  if (!this.head || !this.head.next) {
    console.log('No duplicates were found. Empty or a single element Linked List.');
    return;
  }

  var p1 = null;
  var p2 = this.head;
  var p3;

  while (p2) {
    p3 = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p3;
  }

  this.head = p1;


}


// begin remove
// remove(val){
//     let nd = new Nd(val);
//     nd.next = this.head;



//   console.log(nd);

// for(let i = 0; i < val; i++){


// // if(i === val - 1){
// if(i === 0){
//   // console.log('you gotta hit here');

// // console.log('next.next')
// // console.log(nd.next.next)

// }

//   nd = nd.next;
//   // console.log(nd);
// }

// }
// end remove

  remove(val){

    if (this.head.value === val) {
        this.head = this.head.next;
    } else {
        var previousNode = this.head;
        var currentNode = previousNode.next;
        while (currentNode) {
            if (currentNode.value === val) {
                previousNode.next = currentNode.next;
                currentNode = currentNode.next;
                break;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }



}
}






module.exports = SLL