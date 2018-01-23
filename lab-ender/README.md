# Singly Linked List

### Installation:

from your terminal, call:

``` $ npm i

$ node

$ const SLL = require('.lib/sll');
```

### Usage:

Your sll starts out as an object that looks like this:

`{ head: null }`

to add a node to the `head` of your list:

``` $ mySLL = mySLL.insertHead(2);
```

2 is the `value` of our new list node:

`{ head: { value: 2, next: null } }`

you can only pass numbers to the value field

the `next` field is `null`, meaning there's nothing in it.

let's fix that with:

``` $ mySLL = mySLL.insertEnd(5);
```

again, the number we pass in (5) is the value of the next node:

`{ head: { value: 2, next: { value: 5, next: {null} } } }`

to remove a node from your list, use:

``` $ mySLL = mySLL.remove(1);
```

this time, the number we pass in is the index of the node we want to remove.

remember, we're counting up from 0, so the 1 node is actually the second in sequence:

`{ head: { value: 2, next: null } }`

so we're back down to only one item

let's fill it out by calling a few of our functions again:

``` $ mySLL = mySLL.insertEnd(3);

$ mySLL = mySLL.insertHead(1);
```

which gives us:

`{ head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }`

to reverse our list, simply call:

``` $ mySLL = mySLL.reverse();
```

which gives us:

`{ head: { value: 3, next: { value: 2, next: { value: 1, next: null } } } }`

### Testing:

simply call:

``` $ npm run test
```
