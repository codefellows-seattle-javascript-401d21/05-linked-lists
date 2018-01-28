># Lab 05 - Singly Linked List Data Structure

This module implements a singularly linked list as a class with a constructor and four methods.  The linked list is built with nodes that have a value and next property.  The linked list is an object that contains a head property with nested nodes.

>## Install

  Run

```BASH
    npm i
```

There are no production dependencies for this module and only one dependency for development.

```JSON
  "devDependencies": {
    "jest": "^22.1.4"
  }
```


>## Structure

Node

```JSON
    { value: null next: null }
```

Linked List

```JSON
  { head: null }
```

Example

```JSON
    { head: { value: 7, next: { value: 37, next: { value: 2: next: null } } } }
```


>## Methods

### insertHead(val)

- Create a new node at the beginning of the linked list  with the given value

```JAVASCRIPT
'use strict';

const SLL = require('../lib/sll');

let list = new SLL();   //  { head: null }

list.insertHead(88); // { head: { value: 88, next: null} }
list.insertHead(29); // { head: { value: 29, next: { value: 88, next: null } } }

```

### insertEnd(val) 

- Create a new node at the end of the linked list with the given value

```JAVASCRIPT
const SLL = require('../lib/sll');

let list = new SLL();   //  { head: null }

list.insertEnd(88); //  { head: { value: 88, next: null} }
list.insertEnd(29); //  { head: { value: 88, next: { value: 29, next: null } } }
```

### reverse()

- reverse the order of the linked list

```JAVASCRIPT
'use strict';

const SLL = require('../lib/sll');

let list = new SLL();   //  { head: null }

list.insertHead(88); // { head: { value: 88, next: null} }
list.insertHead(29); // { head: { value: 29, next: { value: 88, next: null } } }
list.reverse(); //  { head: { value: 88, next: { value: 29, next: null } } }
```

### remove(offset) 

- Remove the nth node from the the beginning of the linked list

```JAVASCRIPT
'use strict';

const SLL = require('../lib/sll');

let list = new SLL();   //  { head: null }

list.insertHead(88); // { head: { value: 88, next: null} }
list.insertHead(29); // { head: { value: 29, next: { value: 88, next: null } } }
list.insertHead(154); //  { head: { value: 29, next: { value: 88, next: { value: 154, next: null } } } }
list.remove(2); //  { head: { value: 29, next: { value: 154, next: null } } } 
```

### findNthNodeFromEnd(n)

- Return the nth node from the the end of the linked list

```JAVASCRIPT
const SLL = require('../lib/sll');

let list = new SLL();   //{ head: null }

list.insertHead(88); // { head: { value: 88, next: null} }
list.insertHead(29); // { head: { value: 29, next: { value: 88, next: null } } }
list.insertHead(154); //  { head: { value: 29, next: { value: 88, next: { value: 154, next: null } } } }
list.insertHead(17); // { head: { value: 29, next: { value: 88, next: { value: 154, next: { value: 17, next: null } } } } }
list.findNthNodeFromEnd(1); //  { head: { value: 154, next: { value: 17, next: null } } }  
```

## Tests

Run the tests

```BASH
    npm test
```

  ###  insertHead

  - Test to validate the addition of a new node to the head of the link list

  - Test to validate the return of null when adding an undefined value to the head of the link list

  - Test to validate the ability to add null, false or 0, as a value when adding to the head of the link list

  ### insertEnd 

  - Test to validate the addition of a new node to the end of the link list

  - Test to validate the return of null when adding an undefined value to the end of the link list

  - Test to validate the ability to add null, false or 0, as a value when adding to the end of the link list

  ### reverse

  - Test to validate the linked list was reversed.

  - Test to validate that a short linked list can be reversed

  - Test to validate the that reverse will not mutate a new instance of a linked list with no data

 
  ### remove

  - Test to validate the removal of the node at the offset

  - Test to validate a return of null if the offset is not a number

  - Test to validate a return null if the given offset is out of range
 
  
  ### findNthNodeFromEnd

  - Test to validate a return of null if the given offset is not a number

  - Test to validate a return of null if the given offset is out of range

  - Test to validate that the node at a given offset from the end of a link list was found


  ### NODE

  - Test to validate the creation of new node object

  - Test to validate the creation of a new node with a value

  - Test to validate the creation of a new node with a value of null if the value is undefined
