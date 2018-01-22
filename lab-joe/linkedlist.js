'use strict';

function LinkedList () {
    this.head = null;
}


LinkedList.prototype.insertNodeAtTail = function (val) {


    var node = {
      data: val,
      next: null
    };

    if (!this.head){
      this.head = node;
    }else{
      var p1 = this.head;
      while (p1.next){
        p1 = p1.next;
      }
      p1.next = node;
    }

};

LinkedList.prototype.deleteNode = function (val) {

    if (this.head.data === val) {
        this.head = this.head.next;
    } else {
        var previousNode = this.head;
        var currentNode = previousNode.next;
        while (currentNode) {
            if (currentNode.data === val) {
                previousNode.next = currentNode.next;
                currentNode = currentNode.next;
                break;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
};

// Create an instance of a LinkedList class
var L1 = new LinkedList();

// Create a linked list with six elements
L1.insertNodeAtTail(5);
L1.insertNodeAtTail(6);
L1.insertNodeAtTail(7);
L1.insertNodeAtTail(8);
L1.insertNodeAtTail(9);
L1.insertNodeAtTail(10);
// console.log(L1);

// Delete a head and a tail node
L1.deleteNode(5);
// L1.deleteNode(10);
console.log(L1);

// Delete  an intermediate node
L1.deleteNode(7);
// console.log(L1);