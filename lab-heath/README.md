# 05 Lab: Linked Lists

### Data Structures

 in this setup. we have a constructor function that is building out our SLL for us to then use the methods that are attached to it. some of the methods that are attached are `insertHead`, `insertEnd`, `reverseSLL` and `removeNode`.

 ### SLL and Methods attached to it

 first we have the `SLL` and it does a function like this...

 ```constructor() {
   this.head = null;
 }
 ```
 from here we now have a SLL shell that we can use the methods that have been attached to it

 `insertHead`  lets us build a node that we will then install in the front of our SLL.

 ```let nd = new Nd(val);
 nd.next = this.head;
 this.head = nd;
 return this;
 ```

 `insertEnd` lets us build a node and then place that node at the end of our SLL. it will look for the last next that has the value of NULL and place it that next.

 ```let nd = new Nd(val);
 if(!this.head) {
   this.head = nd;
   return this;
 }
 for(var itr = this.head; itr.next; itr = itr.next);
 itr.next = nd;
 return this;
 ```

 `reverseSLL` lets us reverse the SLL and have the end of the node list to be the start of it and the start of it, be placed at the end.

 ```let current, next, prev;
 current = this.head;
 next = null;
 prev = null;
 this.head = null;

 while (!this.head) {
   if (current.next) {
     next = current.next;
   } else {
     next = null;
   }

   if (prev) {
     current.next = prev;
   } else {
     current.next = null;
   }

   prev = current;

   if (next) {
     current = next;
   } else {
     this.head = current;
   }
 }

 return this;
}
```

last is our `removeNode` function, this one goes in to the SLL and iterate over the every Node and when it gets to the number that it was told to look at, it then takes the the previous next and points it at the next node. by doing this, it cuts its self out of the SLL

```if(index === 1) {
  this.head = this.head.next;
  return this;
}
let current = this.head, prev;
for(var itr = 1; itr <= index; itr++) {
  if (itr === index) {
    if (current.next) {
      prev.next = current.next;
    } else {
      prev.next = null;
    }
    return this;
  }
  prev = current;
  current = current.next;
}
}
```

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `lab-heath`. once there, install NPM but typing in , `nmp install`, this will install all necessary dependencies that you will need to run this code.

To use the code, run `node` in your terminal and reference the SLL object with:
```
let SLL = require('./lib/sll.js');
```

You may now use any of the data structures.
```
sll.insertHead(1);
```
your SLL should be like this {head: {value:1, next: null}}

### Testing

To run the tests for the data structures, type `nmp run test` in your terminal.
