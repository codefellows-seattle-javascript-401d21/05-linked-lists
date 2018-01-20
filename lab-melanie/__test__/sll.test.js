'use strict';

//should validate each function works appropriately
// - makes head or tail node
// - removes a node
// - reverses a node
// - stretch goal: finds nth node

const Nd = require('../lib/nd.js');
const sll = require('../lib/sll.js');

describe('Single Linked List Module', function() {
  describe('#Insert Head Node', () => {
    // let a = 'hello';
    it('should create new node and place at beginning of linked list', () => {
      expect(sll.SLL.insertHead('hello')).toEqual({value: 'hello', next: null});
      console.log(sll.SLL.insertHead('hello'));
    });
  });
});
