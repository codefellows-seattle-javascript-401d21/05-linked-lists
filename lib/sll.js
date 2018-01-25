'use strict';

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
}

SinglyLinkedList.prototype.isEmpty = function() {
    return this.head === null;
};

SinglyLinkedList.prototype.sizeOfList = function() {
    let current = this.head;
    let count = 0;

    while(current !== null) {
        count++;
        current = current.next;
    }
    return count;
};

SinglyLinkedList.prototype.insertHead = function(val) {
    let newNode = {
        data: val,
        next: this.head,
    };
    this.head = newNode;
    return newNode;
};

SinglyLinkedList.prototype.insertEnd = function(val) {
    let newNode = {
        data: val,
        next: this.head,
    };

    if(this.isEmpty()) {
        this.head = newNode;
        return;
    }
    let current = this.head;

    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
    return newNode;
};

SinglyLinkedList.prototype.reverse = function(val) {
    if(this.head == val || this.head == null) {
        return this.head;
    }

    //let prev = this.head;
    //let curr = prev.next;

    while(this.head != null) {
        //Still working on this....
    }

};

SinglyLinkedList.prototype.remove = function(val) {
    if(this.head == null) {
        return;
    }

    if(this.head.data == val) {
        this.head = this.head.next;
        return;    
    }

    let curr = this.head;
    while(curr.next != null) {
        if(curr.next.data == val) {
            curr.next = curr.next.next;
            return;
        }
        curr = curr.next;
    }

};

SinglyLinkedList.prototype.print = function() {
    let output = '[';
    let current = this.head;

    while (current !== null) {
        output += current.data;
        if(current.next !== null) {
            output += ', ';
        }
    }
    output += ']';
    return output;
};

let list = new SinglyLinkedList();