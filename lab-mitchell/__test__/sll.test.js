'use strict';

const SLL = require('../lib/sll');

describe('sll.js', () => {
  describe('sll.insertHead()', function() {
    let test = new SLL();
    
    it('should insert node directly after head, with next of null', (done) => {
      test.insertHead(5);
      expect(test).toEqual({length: 1, head: { value: 5, next: null}});
      done();
    });

    it('should insert something before the previously node with a value of 5 created earlier, with next equal to the previously created node', (done) => {
      test.insertHead(2);
      expect(test).toEqual({length: 2, head: { value: 2, next: { value: 5, next: null}}});
      done();
    });

    it('should return a descriptive error string with non-numerical input', (done) => {
      expect(test.insertHead('three')).toEqual('ERROR: non-numerical input');
      done();
    });
  });

  describe('sll.insertEnd()', function() {
    let test = new SLL();

    it('should insert node at end of list, with given value and next of null', (done) => {
      test.insertEnd(20);
      expect(test).toEqual({length:1 , head: { value: 20, next: null } });
      done();
    });

    it('should insert node at end of list, with given value and next of null', (done) => {
      test.insertEnd(40);
      
      expect(test).toEqual({length: 2, head: { value: 20, next: { value: 40, next: null}}});
      done();
    });

    it('should return a descriptive error string with non-numerical input', (done) => {
      expect(test.insertEnd('six')).toEqual('ERROR: non-numerical input');
      done();
    });
  });

  describe('sll.reverse()', function() {
    let test = new SLL(), test3 = new SLL();

    it('should reverse order of nodes in list', (done) => {
      let test2 = test.insertHead(1).insertEnd(2).insertEnd(3);
      expect(test2.reverse()).toEqual({length: 3, head: { value: 3, next: { value: 2, next: { value: 1, next: null}}}});
      done();
    });
    
    it('should return error message with singly linked list of only one node', (done) => {
      expect(test3.insertEnd(1).reverse()).toEqual('ERROR: Empty or single element linked list, nothing to reverse');
      done();
    });

    it('should return error string if no nodes', (done) => {
      let test4 = new SLL();
      expect(test4.reverse()).toEqual('ERROR: Empty or single element linked list, nothing to reverse');
      done();
    });
  });

  describe('sll.delete()', function() {
    let test = new SLL().insertHead(1).insertEnd(2).insertEnd(3);
    let test2 = new SLL().insertHead(1).insertEnd(2).insertEnd(3);
    let test3 = new SLL();

    it('should remove the first node from the list', function(done) {
      test.remove(1);
      expect(test).toEqual({length: 2, head: { value: 2, next: { value: 3, next: null}}});
      done();
    });

    it('should remove the third node with value of three from the list', function(done) {
      test2.remove(3);
      expect(test2).toEqual({ length: 2, head: { value: 1, next: { value: 2, next: null }}});
      done();
    });

    it('should return error string if no nodes to delete', function(done) {
      expect(test3.remove(3)).toEqual('ERROR: No nodes to delete');
      done();
    });
  });
});