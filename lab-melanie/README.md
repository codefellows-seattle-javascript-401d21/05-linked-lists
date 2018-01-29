# 05 Linked Lists

### Data Structures

The Nd module consists of a constructor function that creates a node with the passed in argument as the value and sets the next node value to null. This module is referenced in the SLL module.

```javascript
let a = new Nd('hello');
console.log(a); // {value: 'hello', next: null}
```

The SLL module has a constructor function that creates a singly linked list, it sets the head value to null.

```javascript
let list = new SLL();
console.log(list); // {head: null}
```

The `insertHead` method takes in a value, uses the Nd module to create a node with that value, and places that node at the **_beginning_** of a linked list.

```javascript
let list = new SLL();
let a = list.insertHead(2).insertHead(1);
console.log(a); // {head: {value: 1, next: { value: 2, next: null}}}
```

The `insertEnd` method takes in a value, uses the Nd module to create a node with that value, and places that node at the **_end_** of a linked list.

```javascript
let list = new SLL();
let b = list.insertEnd(1).insertEnd(2);
console.log(b); // {head: {value: 1, next: { value: 2, next: null}}}
```

The `reverse` method reverses the order of the linked list, this has an arity of 0 as it references `this` for the nodes in the linked list.

```javascript
let list = new SLL();
let c = list.insertEnd(1).insertEnd(2).reverse();
console.log(c); // {head: {value: 2, next: { value: 1, next: null}}}
```

The `remove` method has an arity of 1, it takes in a number as the argument, removes that node from the list and reassigns the previous node to reference the next node from the one that was removed.

```javascript
let list = new SLL();
let d = list.insertEnd(1).insertEnd(2).remove(2);
console.log(d); // {head: {value: 1, next: null}}
```

The `findNthNodeFromEnd` method has an arity of 1, it takes in a number as an argument, reverses the list, moves to the next node n times, assigns nth node to a variable, reverses the list back to it's original order, and returns the nth node.

```javascript
let list = new SLL();
let e = list.insertEnd(1).insertEnd(2).findNthNodeFromEnd(2).value();
console.log(e); // 1
```

### Installing and Using Data Structures

To install this application, fork and git clone this repository to your local computer. From your terminal, locate to the directory `lab-melanie` and install all npm packages, `nmp install`, this will install all necessary dependencies.

To access the data structures, run `node` in your terminal and reference the sll object with:
```javascript
let SLL = require('./lib/sll.js');
```
You may now use any of the data structures.
Example:
```javascript
let sll = new SLL();
sll.insertHead('hello');
```

### Testing

To run the tests for the data structures, type `nmp run test` in your terminal.
