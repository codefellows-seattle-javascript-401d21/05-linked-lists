'use strict';

//should validate each function works appropriately
// - makes head or tail node
// - removes a node
// - reverses a node
// - stretch goal: finds nth node

const Nd = require('../lib/nd.js');
const SLL = require('../lib/sll.js');

describe('Single Linked List Module', function() {
  describe('#Insert Head Node', () => {
    it('should create new node and place at beginning of linked list', () => {
      let list = new SLL();
      expect(list.insertHead('hello')).toEqual({head: {value: 'hello', next: null}});
    });
    it('should return null if no value passed', () => {
      let list = new SLL();
      expect(list.insertHead()).toBeNull();
    });
    it('should return a node', () => {
      let list = new SLL();
      expect(list.insertHead('hello')).not.toBeNull();
    });
  });
  describe('#Insert End Node', () => {
    it('should create a new node and place at end of linked list', () => {
      let list = new SLL();
      let a = list.insertHead('hello');
      expect(a.insertEnd('world')).toEqual({head: {value: 'hello', next: {value: 'world', next: null}}});
    });
  });
  describe('#Reverse', () => {
    it('should reverse linked list', () => {
      let list = new SLL();
      let a = list.insertHead('hello');
      let b = a.insertEnd('world');
      expect(b.reverse()).toEqual({head: {value: 'world', next: { value: 'hello', next:null}}});
      console.log(b.reverse());
    });
  });
  describe('#Remove', () => {
    it('should remove a node', () => {
      let list = new SLL();
      let a = list.insertHead('hello');
      expect(a.remove(1)).toEqual({head: null});
    });
  });
});
