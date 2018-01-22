'use strict';

const SLL = require ('../lib/sll');
const ND = require('../lib/nd');


describe('SLL module', function() {
  describe('#head', () => {
    let test1 = new SLL();
    it('should add node', () => {
      test1.insertHead('insert-node-1');
      expect(test1.head).toBeInstanceOf(ND);
    });

    it('should add node to the beginning of the list', () => {
      test1.insertHead('insert-head-test');
      expect(test1.head.value).toBe('insert-head-test');
    });

    it('sll module should set head to null', () => {
      expect(test1).toBeInstanceOf(SLL);
    });
  });

  describe('#end', () => {
    let test2 = new SLL();
    it('should add node', () => {
      test2.insertEnd('insert-node-2');
      expect(test2.head).toBeInstanceOf(ND);
    });

    it('should add node to the end of the list', () => {
      test2.insertEnd('insert-end-test');
      expect(test2.head.next.value).toBe('insert-end-test');
    });

    it('should be the correct value', () => {
      expect(test2.head.value).toBe('insert-node-2');
    });
  });

  describe('#reverse', () => {
    let test3 = new SLL();
    test3.insertHead(1);
    test3.insertEnd(2);
    test3.insertEnd(3);
    test3.insertEnd(4);
    test3.reverse();

    it('should reverse linked list', () => {
      expect(test3.head.value).toBe(4);
      expect(test3.head.next.value).toBe(3);
    });

    it('should be the correct value', () => {
      expect(test3.head.next.next.value).toBe(2);
    });

    it('last value of reserve linked list should be null', () => {
      expect(test3.head.next.next.next.next).toBeNull();
    });
  });

  describe('#remove', () => {
    let test4 = new SLL();
    test4.insertHead(1);
    test4.insertEnd(2);
    test4.insertEnd(3);
    test4.insertEnd(4);
    test4.remove(2);

    it('should remove 3rd index from linked list', () => {
      expect(test4.head.value).toBe(1);
      expect(test4.head.next.value).toBe(2);
      expect(test4.head.next.next.value).toBe(4);
    });

    it('last value of the linked list should be null', () => {
      expect(test4.head.next.next.next).toBeNull();
    });

    it('should insert values to end, reverse and give correct values', () => {
      test4.insertEnd(5);
      test4.insertEnd(6);
      test4.reverse();
      test4.remove(3);
      expect(test4.head.value).toBe(6);
      expect(test4.head.next.value).toBe(5);
      expect(test4.head.next.next.value).toBe(4);
      expect(test4.head.next.next.next.value).toBe(1);
      expect(test4.head.next.next.next.next).toBeNull();
    });
  });
});
