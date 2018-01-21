'use strict';

const SLL = require('../lib/link.js');
require('jest');

describe('Link', function() {
  describe('#insertHead', function() {
    it('On an empty linklist should make a new head', function() {
      let test = new SLL;
      test.insertHead(1);
      let expected ={ head: { value: 1, next: null } };
      expect(expected).toEqual(test);
    });
    it('If head exists should replace head', function() {
      let test = new SLL;
      test.insertHead(1);
      test.insertHead(2);
      let expected ={ head: { value: 2, next: { value: 1, next: null } } };
      expect(expected).toEqual(test);
    });
    it('the head value should equal the value we input', function() {
      let test = new SLL;
      test.insertHead(1);
      let expected = 1;
      expect(expected).toEqual(test.head.value);
    });
  });
  describe('#insertEnd', function() {
    it('On an empty linklist should make a new head', function() {
      let test = new SLL;
      test.insertEnd(1);
      let expected ={ head: { value: 1, next: null } };
      expect(expected).toEqual(test);
    });
    it('If head exists should append new sll to the end', function() {
      let test = new SLL;
      test.insertEnd(1);
      test.insertEnd(2);
      let expected ={ head: { value: 1, next: { value: 2, next: null } } };
      expect(expected).toEqual(test);
    });
    it('the tail value should equal the value we input', function() {
      let test = new SLL;
      test.insertEnd(1);
      test.insertEnd(2);
      let expected = 2;
      expect(expected).toEqual(test.head.next.value);
    });
  });
  describe('#reverse', function() {
    it('should reverse the order of an sll', function() {
      let test = new SLL;
      test.insertEnd(1);
      test.insertEnd(2);
      test.insertEnd(3);
      test.reverse();
      console.log(test);
      let expected = { head: {value: 3, next: { value: 2, next: { value: 1, next: null } } } };
      expect(expected).toEqual(test);
    });
    it('return the same list if the linked lists length is 1', function() {
      let test = new SLL;
      test.insertEnd(1);
      test.reverse();
      let expected = { head: {value: 1, next: null}};
      expect(expected).toEqual(test);
    });
    it('should still reverse even if someone inserts an argument', function() {
      let test = new SLL;
      test.insertEnd(1);
      test.insertEnd(2);
      test.insertEnd(3);
      test.reverse(123455678);
      console.log(test);
      let expected = { head: {value: 3, next: { value: 2, next: { value: 1, next: null } } } };
      expect(expected).toEqual(test);
    });
  });
  describe('#removeOffset', function() {
    it('if the offset is zero the head should be removed', function() {
      let test = new SLL;
      test.insertEnd(1);
      test.insertEnd(2);
      test.insertEnd(3);
      test.remove(0);
      let expected = {head: {value: 2, next: {value: 3, next: null}}};
      expect(expected).toEqual(test);
    });
    it('the node located at the offset should be removed', function() {
      let test = new SLL;
      test.insertEnd(1);
      test.insertEnd(2);
      test.insertEnd(3);
      test.remove(1);
      let expected = {head: {value: 1, next: {value: 3, next: null}}};
      expect(expected).toEqual(test);
    });
    it('should not delete anything if no parameters are entered', function() {
      let test = new SLL;
      test.insertEnd(1);
      test.insertEnd(2);
      test.insertEnd(3);
      test.remove();
      let expected = {head: {value: 1, next: {value: 2, next: {value: 3, next: null}}}};
      expect(expected).toEqual(test);
    });
  });
});