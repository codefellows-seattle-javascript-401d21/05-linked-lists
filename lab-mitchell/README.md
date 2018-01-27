# Lab 5 Big O Notation & Linked Lists

**Author**: Mitchell
**Version**: 1.0.0

## Overview
In this lab, we were tasked to create and implement a Singly Linked List data structure. We were to include 4 methods, `insertHead(value)`, `insertEnd(value)`, `reverse()`, and `remove(offset)` on the SLL prototype. We were also tasked to analyze the Big-O runtime of each method, and include a comment above each with that information.

## Getting Started
First, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions.

## Description
To access the available methods, one would enter the following code to gain access in a newly created .js file located within the parent directory of lab-mitchell/: 
```
const Nd = require('../lib/nd');
const SLL = require('../lib/sll');

let test = new SLL(); //creates new SLL

test.insertHead(1); //adds node {value: 1, next: null} directly after head
test.insertEnd(2); //adds node {value: 2, next: null} to end of list
test.insertEnd(3); //adds node {value: 3, next: null} to end of list
test.reverse(); //reverses list such that {head: {value: 3 , next: {value: 2, next: {value:1, next: null}}}}
test.remove(3) //will remove the 3rd node in the list
```

*NOTE* Offset with respect to the `.remove(offset)` method refers to not the _index_ but of offset within the list from the head (i.e. as opposed to the index as used in array indices where index 0 is the first element in the array, _offset_ here refers to the position of the node in the list such that offset 1 is the first node in the SLL, whereas index 1 would commonly be the second node in the list).
