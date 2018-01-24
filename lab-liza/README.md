# Lab 05 - Linked List

**Author**: Liza Oh

## Overview
This is a singly linked list data structure.

## Getting Started
The user must:
-Npm init their project
-Install Jest
-To run test they can enter 'npm test'
-To access each method the user can create a new SLL object, and run individual tests on each object by passing through the correct values.
Examples:
In the following example, test3 is a new instance of SLL. 1 is added to the head, then 2, 3, and 4 are added to the end. Creating a link-list 1-2-3-4. Then reverse is called on test3 which reverses the list to 4-3-2-1. Lastly, head value is changed back the beginning which is now 4.

```
let test3 = new SLL();
    test3.insertHead(1);
    test3.insertEnd(2);
    test3.insertEnd(3);
    test3.insertEnd(4);
    test3.reverse();
```

In the following example, test4 is a new instance of SLL. 1 is added to the head, then 2, 3, and 4 are added to the end. Creating a link-list 1-2-3-4. Then remove() is called with '2' as an argument. This will remove the third node from the list. So the list is now 1-2-4.

```
 let test4 = new SLL();
    test4.insertHead(1);
    test4.insertEnd(2);
    test4.insertEnd(3);
    test4.insertEnd(4);
    test4.remove(2);
```


## Architecture
Javascript
Node
Jest
