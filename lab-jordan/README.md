### INSTALLATION AND USE:

Run npm init to install the necessary dependencies before running the program. These should include jest and eslint.

This program can be used to create and manipulate linked lists.

### ACCESSING METHODS:

#### Making a new list
`new SLL` is a right hand side expression which will create a new linked list. The list is then returned.

Example:
```javascript
let list = new SLL;
// returns {head: null}
```

#### Adding a new head to the list
`list.insertHead(value)` is a method which will add a new node to the beginning of your list, setting its value property to the argument passed into the value parameter. The list is then returned.

Example:
```javascript
// list is currently {head: null}

list.insertHead(2);
// returns {head: {value: 2, next: null}}
list.insertHead(1);
// returns {head: {value: 1, next: {value: 2, next: null}}}
```

#### Adding a new end to the list
`list.insertEnd(value)` is a method which will add a new node to the end of your list, setting its value property to the argument passed into the value parameter. The list is then returned.

Example:
```javascript
// list is currently {head: {value: 1, next: {value: 2, next: null}}}

list.insertEnd(3);
// returns {head: {value: 1, next: {value: 2, next: {value: 3, next: null}}}}
list.insertEnd(4);
// returns {head: {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}}}
```

#### Finding a node that already exists in the list

`list.findNthNodeFromEnd(n)` is a method which will return the nth node from the end of the list.

Example:
```javascript
// list is currently {head: {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}}}

list.findNthNodeFromEnd(0);
// returns {value: 4, next: null}
list.findNthNodeFromEnd(1);
// returns {value: 3, next: {value: 4, next: null}}
list.findNthNodeFromEnd(2);
// returns {value: 2, next: {value: 3, next: {value: 4, next: null}}}
list.findNthNodeFromEnd(3);
// returns {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}}}
```

#### Reversing the list

`list.reverse()` is a method which will reverse the list. The list is then returned.

Example:
```javascript
// list is currently {head: {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}}}

list.reverse();
// returns {head: {value: 4, next: {value: 3, next: {value: 2, next: {value: 1, next: null}}}}}
```

#### Removing a node from the list

`list.remove(offset)` is a method which will remove the node at the passed in offset from the list. The list is then returned.

```javascript
// list is currently {head: {value: 4, next: {value: 3, next: {value: 2, next: {value: 1, next: null}}}}}

list.remove(2);
// returns {head: {value: 4, next: {value: 3, next: {value: 1, next: null}}}}
list.remove(0);
// returns {head: {value: 3, next: {value: 1, next: null}}}
list.remove(1);
// returns {head: {value: 3, next: null}}
list.remove(0);
// returns {head: null}
```
