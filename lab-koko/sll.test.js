'use strict';

const SLL = require('../lib/sll.js');
// console.log('sll', SLL);
var list1 = new SLL();

list1.insertHead(25);
list1.insertEnd(1);
list1.insertEnd(15);

// make lists, empty list , already made append and prepend 
describe ('Solution Module', () => {
  // beforeEach ( () => {
  //   let emptyList, list1;
  //   emptyList = new SLL();
  //   list1 = new SLL();
  //   list1.insertHead(25);
  //   list1.insertEnd(1);
  //   list1.insertEnd(15);
  // });
  describe ('SLL', () => {
    it ('should check for an object', () => {
      expect (list1.insertHead(25).insertEnd(1)).toBeInstanceOf(Object);
    });
    // it ('should check for an object that has a property', () => {
    //   expect (list.)
    // )};
    // it ('should check for a return with the epected return', () => {
    // });
  });
});