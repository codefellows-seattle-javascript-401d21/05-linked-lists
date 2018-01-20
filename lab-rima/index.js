'use strict';

const sll = require('./lib/sll');


function logNodes(sll){
  var current = sll.head;
  var i = 1;
  while(current){
    console.log('Node ' + i + ' value is ' + current.value);
    current = current.next;
    i++;
  }
}

// create a sll object of ten nodes
var s = new sll();
console.log('\nNew empty SLL object "s": s.head -> ' + s.head);

// insert head
s.insertHead(1);
console.log('\nInsert head node with value 1 to "s": s.head.value -> ' + s.head.value);

// insert more nodes in end
var i = 2;
while(i < 11){
  s.insertEnd(i);
  i++;
}
console.log('\nInsert more nodes in end -> ');
logNodes(s);

// remove 4th node
console.log('\nRemoved 4th node -> ');
s.remove(4);
logNodes(s);

// find 4th node
console.log('\nFind 4th node value is ' + s.findNthNode(4).value);

// reverse s
s.reverse();
console.log('\nReverse s -> ');
logNodes(s);
