'use strict';

const SLL = require('../lib/sll.js');

describe('Single Linked List Module', function() {
  describe('#InsertHead', () => {
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
  describe('#InsertEnd', () => {
    it('should create a new node and place at end of linked list', () => {
      let list = new SLL();
      let a = list.insertHead('hello');
      expect(a.insertEnd('world')).toEqual({head: {value: 'hello', next: {value: 'world', next: null}}});
    });
    it('should return null if no value passed', () => {
      let list = new SLL();
      expect(list.insertEnd()).toBeNull();
    });
    it('should return a node', () => {
      let list = new SLL();
      expect(list.insertEnd('hello')).not.toBeNull();
    });
  });
  describe('#Reverse', () => {
    it('should reverse linked list', () => {
      let list = new SLL();
      let a = list.insertHead('hello');
      let b = a.insertEnd('world');
      expect(b.reverse()).toEqual({head: {value: 'world', next: { value: 'hello', next:null}}});
    });
    it('should return a linked list', () => {
      let list = new SLL();
      let a = list.insertHead('hello');
      let b = a.insertEnd('world');
      expect(b.reverse()).not.toBeNull();
    });
    it('should return the same node if only one node in linked list', () => {
      let list = new SLL();
      let a = list.insertHead('hello');
      expect(a.reverse()).toEqual({head: {value: 'hello', next: null}});
    });
  });
  describe('#Remove', () => {
    it('should remove a node', () => {
      let list = new SLL();
      let a = list.insertHead('hello');
      expect(a.remove(1)).toEqual({head: null});
    });
    it('should return null if no argument passed', () => {
      let list = new SLL();
      let a = list.insertHead('hello');
      expect(a.remove()).toBeNull();
    });
    it('should return null if argument passed is not a number', () => {
      let list = new SLL();
      let a = list.insertHead('hello');
      expect(a.remove('a')).toBeNull();
    });
  });
  describe('#findNthNodeFromEnd', () => {
    it('should return the specified node from end of list', () => {
      let list = new SLL();
      let a = list.insertEnd(1).insertEnd(2).insertEnd(3);
      expect(a.findNthNodeFromEnd(3).value).toBe(1);
    });
    it('should return invalid message if n is greater than list length', () => {
      let list = new SLL();
      let a = list.insertEnd(1).insertEnd(2).insertEnd(3);
      expect(a.findNthNodeFromEnd(4)).toBe('this node does not exist');
    });
    it('should return null if argument passed is not a number', () => {
      let list = new SLL();
      let a = list.insertEnd(1).insertEnd(2).insertEnd(3);
      expect(a.findNthNodeFromEnd('a')).toBeNull();
    });
  });
});
