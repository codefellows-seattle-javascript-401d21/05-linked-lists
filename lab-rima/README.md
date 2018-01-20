## Synopsis

This is an implementation for Slingly Linked List. It has five methods besides a constructor.

#### insertHead function - To insert a node at the  head of list
##### Parameters
* One value (no limitation of type)
##### Return value
* An instance of SLL class

#### isnertEnd function - To insert a node at the end of list
##### Parameters
* One value (no limitation of type)
##### Return value
* An instance of SLL class

#### reverse function - To reverse the order of list
##### Parameters
* None
##### Return value
* An instance of SLL class

#### remove function
##### Parameters
* Valid input: one index (type number)
* Invalid input: less/more than length of linked list
##### Return value
* Valid input: an instance of SLL class
* Invalid input: null

#### findNthNode function
##### Parameters
* Valid input: one index (type number)
* Invalid input: less/more than length of linked  list
##### Return value
* Valid input: an instance of SLL class
* Invalid input: null


## Code Example
```
'use strict'
 
const sll = require('./lib/sll');

// create a sll object of three nodes
var s = new sll();

// insert head
s.insertHead(1);

// insert two more nodes in end
s.insertEnd(2);
s.insertEnd(3);

/*
Now s looks like this
s = {head: {value: 1, next: {value: 2, next: {value: 3, next: null}}}} 
*/

// remove 1st node
s.remove(1);

/*
Now s looks like this
s = {head: {value: 2, next: {value: 3, next: null}}} 
*/

// find 2nd node
s.findNthNode(2);

/*
the findNthNode(2) returns 2nd node
s.findNthNode(2) = {value: 3, next null}
*/

// reverse s
s.reverse();

/*
Now s looks like this
s = {head: {value: 3, next: {value: 2, next: null}}}
*/
```

## Installation
git clone this repo
move all files to your desire location
in a module,
```
const sll = require('file path');
```

## Tests

