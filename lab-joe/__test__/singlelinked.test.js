'use strict';

const SLL = require('../lib/sll');

describe('SLL Module', () => {
  describe('constructor', () => {
    it('should return back a singly linked singlyLinkedList objectwhen the constructor is called', () => {
      let singlyLinkedList = new SLL();
      expect(singlyLinkedList).toBeInstanceOf(SLL);
      expect(singlyLinkedList.head).toBe(null);
      expect(singlyLinkedList.length).toBe(0);
    });

    it('return a SLL object that is also an object', () => {
      let singlyLinkedList = new SLL();
      expect(typeof singlyLinkedList).toBe('object');
    });

  });

  describe('insertHead', () => {
    it('should have value 1 in the first node, 2 in the second node, and 3 in the third node', () => {
      let singlyLinkedList = new SLL();
      singlyLinkedList.insertHead(2);
      singlyLinkedList.insertHead(1);

      expect(singlyLinkedList.head.value).toEqual(1);
      expect(singlyLinkedList.head.next.value).toEqual(2);
    });

    it('should incrrease the length of the singlyLinkedList when a node is inserted', () => {
      let singlyLinkedList = new SLL();
      expect(singlyLinkedList.length).toBe(0);
      singlyLinkedList.insertHead(100);
      expect(singlyLinkedList.length).toBe(1);
    });


  });

  describe('insertEnd', () => {
    it('insert a value into the end and it becomes the head if empty', () => {
      let singlyLinkedList = new SLL();
      singlyLinkedList.insertEnd(1);
      expect(singlyLinkedList.head.value).toEqual(1);

    });

  });

  describe('reverse', () => {
    it('reverse the singlyLinkedList containing 1, 2 properly', () => {
      let singlyLinkedList = new SLL();
      singlyLinkedList.insertEnd(1);
      singlyLinkedList.insertEnd(2);
      singlyLinkedList.reverse();

      expect(singlyLinkedList.head.value).toEqual(2);
      expect(singlyLinkedList.head.next.value).toEqual(1);
    });

  });

  describe('remove', () => {
    it('should decrement the length of the singlyLinkedList', () => {
      let singlyLinkedList = new SLL();
      singlyLinkedList.insertHead(1);
      singlyLinkedList.insertHead(2);
      singlyLinkedList.insertHead(3);
      singlyLinkedList.remove(1);

      expect(singlyLinkedList.length).toEqual(2);
    });

    it('should remove the node so it no longer exists in the singlyLinkedList', () => {
      let singlyLinkedList = new SLL();
      singlyLinkedList.insertHead(1);
      singlyLinkedList.insertHead(2);
      singlyLinkedList.insertHead(3);
      singlyLinkedList.remove(1);

      expect(singlyLinkedList.head.next.value).not.toBe(2);
    });


  });

});