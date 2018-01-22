'use strict'

const ND = require('./lib/nd');
const SLL = require('./lib/sll');

let sll = new SLL();
let house2 = new ND();


sll.insertHead(1)
console.log(sll);

sll.insertEnd(1)
console.log(sll);

sll.reverse()
console.log(sll);

sll.remove(1)
console.log(sll);


