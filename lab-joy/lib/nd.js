'use strict';

class Nd {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

module.exports = Nd;