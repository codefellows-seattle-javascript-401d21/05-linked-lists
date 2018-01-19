'use strict';

import Nd from './nd';

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertHead(val) {
        let nd = new Nd(val, this.head);
        this.head = nd;
        return this;
    }

    insertEnd(val) {
        let nd = new Nd(val);
        if (!this.head) this.head = nd;
        if (this.tail) this.tail.next = nd;
        this.tail = nd;
        return this;
    }

    reverse() {
        
    }

    remove(offset) {

    }

    findNthNodeFromEnd(n) {

    }
}