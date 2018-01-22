# Lab 05 Linked Lists

The insertHead function has an arity of 1. It expects to be passed a node value as it's argument and uses the Node object in Nd to create a new node at the head of the linked list.
Access the method by requiring in '/lib/sll' as a const and calling constName.insertHead.
To test using Jest, install jest from the command line if not already installed: 'npm i -D jest' to set it as a dev dependency or just 'npm i' to have npm read package.json for the jest dependency. To run the tests use the npm test command: 'npm run test'.

The insertEnd function has an arity of 1. It expects to be passed a node value as it's argument and uses the Node object in Nd to create a new node at the end of the linked list.
Access the method by requiring in '/lib/sll' as a const and calling constName.insertEnd.
To test using Jest, install jest from the command line if not already installed: 'npm i -D jest' to set it as a dev dependency or just 'npm i' to have npm read package.json for the jest dependency. To run the tests use the npm test command: 'npm run test'.

The remove function has an arity of 1. It expects to be passed an offset value as it's argument, 2 thru n, where 2 is the 2nd node as we will not remove the head if it's the only node.
Access the method by requiring in '/lib/sll' as a const and calling constName.remove.
To test using Jest, install jest from the command line if not already installed: 'npm i -D jest' to set it as a dev dependency or just 'npm i' to have npm read package.json for the jest dependency. To run the tests use the npm test command: 'npm run test'.

The reverse function has an arity of 0. It will reverse the nodes in the linked list. First node becomes last, 2nd node 2nd last, etc.
Access the method by requiring in '/lib/sll' as a const and calling constName.reverse.
To test using Jest, install jest from the command line if not already installed: 'npm i -D jest' to set it as a dev dependency or just 'npm i' to have npm read package.json for the jest dependency. To run the tests use the npm test command: 'npm run test'.