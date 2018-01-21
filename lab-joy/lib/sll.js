'use strict';

const Nd = require('./nd');

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // insertHead: Insertion time is O(1) as the node is inserted directly to the list and the only modification would be to the current head of the list, if any.
    insertHead(val) {
        let nd = new Nd(val, this.head);
        this.head = nd;
        if (!this.tail) this.tail = nd;
        return this;
    }

    // insertEnd: Like the insertHead method, insertion time is also O(1).
    insertEnd(val) {
        let nd = new Nd(val);
        if (this.tail) this.tail.next = nd;
        if (!this.head) this.head = nd;
        this.tail = nd;
        return this;
    }

    // reverseList: This method has a O(n) runtime as it iterates through the entire list once.
    reverseList() {
        let current = this.head, prev = null;
        this.tail = this.head;
        while (current) {
            if (current.next) {
                let next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            else { 
                current.next = prev;
                this.head = current;
                return this;
            }
        }
    }

    // remove: This method has a Big O worst case runtime of O(n), as it iterates through the list until it reaches the offset.
    remove(offset) {
        if (!Number.isInteger(offset) || offset < 1) return null;
        let current = this.head;
        if (offset === 1) {
            if (current.next) {
                this.head = current.next;
            }
            else {
                this.head = null;
                this.tail = null;
            }
            return this;
        }
        for (let i = 1; i < offset - 1; i++) {
            if (!current.next.next) return null;
            current = current.next;
        }
        if (current.next.next) {
            current.next = current.next.next;
        }
        else {
            current.next = null;
            this.tail = current;
        }
        return this;
    }

    // findNthNodeFromEnd: The runtime of this method is O(n). It iterates through the list three times - twice via the reverseList method and once to find the nth node.
    findNthNodeFromEnd(n) {
        if (!Number.isInteger(n) || n < 1) return null;
        this.reverseList();
        let current = this.head;
        for (let i = 1; i < n; i++) {
            current = current.next;
            if (!current) break;
        }
        this.reverseList();
        return current;
    }

}

module.exports = SLL;