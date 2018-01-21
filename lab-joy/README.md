# Lab 05 - Singly Linked List
Joy Hou, Jan 19, 2018

## Problem Domain
I am creating a singly linked list (SLL) class that has a constructor for creating a new SLL and the capacity to add nodes to the SLL at either the head or the tail. I am also writing methods to remove nodes from the list, to find the nth node from the end of the list, and to remove the nth node from the beginning of the list.

## Data Structure
In my **Nd module**, the constructor allows a user to create a new node with a value and an optional next argument. If nothing is passed in for the next argument, the object's next key will be set to null. I am exporting the Nd module into my SLL module.

The **SLL module** has a constructor for creating a new SLL. When an object is created as an instance of this constructor, it is created with the properties head and tail, which are initially set to null.

```let list = new sll();```

The **insertHead method** takes in one argument, a value, and uses our Nd constructor to add a node to the head of our list. 

```insertHead(1);
console.log(list.head); // logs {value: 1, next: null}```

The **insertEnd method** also takes in an argument and adds a node to the tail of our list.

```insertEnd(2);
console.log(list.head.next); // logs {value: 2, next: null}
console.log(list.tail); // logs the same thing as above
console.log(list.head) // logs {value: 1, next: {value: 2, next: null}}```

The **reverseList method** reverses the order of the list, causing the tail node to become the head node and the head node to become the tail node.

```insertEnd(3);
list.reverseList();
console.log(this.head); // logs {value: 3, next: {value: 2, next: {value: 1, next: null}}};```

The **remove method** removes the nth node from the beginning of the list. It takes in one argument, the offset, where an offset of 1 means the first node / head of the list. 

```list.remove(3);
console.log(list.head); // logs {value: 3, next: {value: 2, next: null}}```

The **findNthNodeFromEnd method** also takes in one argument, which is the offset from the end of the list. It returns the node found at the nth position from the end.

```findNthNodeFromEnd(1); // returns {value: 2, next: null}```

** Installation and Testing
To install this data structure, you can [git clone](https://git-scm.com/docs/git-clone) this repository to your computer. In your terminal, navigate to the lab-joy folder within the cloned directory and use the command __npm install__. To run my tests for this data structure, use the command __npm run test__. To use the SLL class in your terminal, enter the command __node__ to initiate Node.js. Then enter:

```const sll = require('./lib/sll');```

You can now use all of the commands from the data structure section above in your terminal. 