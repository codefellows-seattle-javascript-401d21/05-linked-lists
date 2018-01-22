'use strict';

const SLL = require('../lib/sll.js');

describe ('Solution Module', () => {
  describe ('SLL', () => {
    it ('should check for an object', () => {
      var list1 = new SLL();
      
      list1.insertEnd(2);
      list1.insertEnd(4);
      list1.insertEnd(6);
      list1.insertEnd(8);
      list1.insertEnd(10);
      expect (list1.reverse()).toBeInstanceOf();
    });
  });
});