'use strict';

const SLL = require('./lib/sll.js');

let list = new SLL();
let a = list.insertHead('hello');
let b = a.insertEnd('world');
console.log(b.reverse());

console.log(b.remove(1));
