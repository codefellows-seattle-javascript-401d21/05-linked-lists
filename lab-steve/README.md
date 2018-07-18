# Singly Linked List Data Structure

**Author**: Steve Carpenter
**Version**: 1.0.0

## Overview
This software is a proof of concept Singly Link List library.

## Getting Started
The user needs to do the following to get the code up and running:
-Clone the repository from github [here](https://github.com/stevegcarpenter/04-bitmap-project)
-Run `npm install` in the lab-steve directory to install all the Node packages
-If you want to use the singly linked list (SLL), you need to import the sll module using a `require('./path/to/sll')` statement
-To run all the unit tests run `npm run test`

## Architecture
-NodeJS
-npm
-JS
-Jest Test API

## Function signatures
```
  Node
    constructor(value=undefined)
  
  SLL
    constructor()
    insertHead(value)
    insertEnd(value)
    reverse()
    remove(offset)
    findNthNodeFromEnd(n)
```

## Change Log
2018-01-19 Scaffolded out the directory structure.
2018-01-19 Initialized npm package.json and installed modules
2018-01-20 Implemented Node class inside nd.js file
2018-01-20 Implemented several of the SLL methods (e.g. insertHead, insertEnd)
2018-01-21 Implemented and tested reverse method, findNthNodeFromEnd method
2018-01-21 Finished and implemented remaining tests

## Credits and Collaborations
[NodeJS](https://nodejs.org)
[npm](https://www.npmjs.com/)
[Jest](https://facebook.github.io/jest/)
[JavaScript](https://www.javascript.com/)

