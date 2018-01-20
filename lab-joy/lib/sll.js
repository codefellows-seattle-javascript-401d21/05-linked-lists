'use strict';

const Nd = require('./nd');

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertHead(val) {
        let nd = new Nd(val, this.head);
        this.head = nd;
        if (!this.tail) this.tail = nd;
        return this;
    }

    insertEnd(val) {
        let nd = new Nd(val);
        if (this.tail) this.tail.next = nd;
        if (!this.head) this.head = nd;
        this.tail = nd;
        return this;
    }

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