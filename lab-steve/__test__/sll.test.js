'use strict';

const SLL = require('../lib/sll');

describe('SLL Module', () => {
  describe('#constructor', () => {
    it('should return back a singly linked list objectwhen the constructor is called', () => {
      let list = new SLL();
      expect(list).toBeInstanceOf(SLL);
      expect(list.head).toBe(null);
      expect(list.length).toBe(0);
    });

    it('should return a SLL object that is also an object', () => {
      let list = new SLL();
      expect(typeof list).toBe('object');
    });

    it('should initially set head to null and length to 0', () => {
      let list = new SLL();
      expect(list.head).toBe(null);
      expect(list.length).toBe(0);
    });
  });

  describe('#insertHead', () => {
    it('should have value 1 in the first node, 2 in the second node, and 3 in the third node', () => {
      let list = new SLL();
      list.insertHead(3);
      list.insertHead(2);
      list.insertHead(1);

      expect(list.head.value).toEqual(1);
      expect(list.head.next.value).toEqual(2);
      expect(list.head.next.next.value).toEqual(3);
    });

    it('should increment the length of the list when a node is inserted', () => {
      let list = new SLL();
      expect(list.length).toBe(0);
      list.insertHead(100);
      expect(list.length).toBe(1);
    });

    it('should refuse to add null, undefined, or NaN to the list', () => {
      let list = new SLL();
      expect(list.insertHead(null).length).toBe(0);
      expect(list.insertHead(undefined).length).toBe(0);
      expect(list.insertHead(NaN).length).toBe(0);
    });
  });

  describe('#insertEnd', () => {
    it('should have value 1 in the first node, 2 in the second node, and 3 in the third node', () => {
      let list = new SLL();
      list.insertEnd(1);
      list.insertEnd(2);
      list.insertEnd(3);
      expect(list.head.value).toEqual(1);
      expect(list.head.next.value).toEqual(2);
      expect(list.head.next.next.value).toEqual(3);
    });

    it('should add the first item to the list in the event the list is empty', () => {
      let list2 = new SLL();
      list2.insertEnd(100);
      expect(list2.head.value).toBe(100);
      expect(list2.length).toBe(1);
    });

    it('should refuse to add null, undefined, or NaN to the list', () => {
      let list = new SLL();
      expect(list.insertEnd(null).length).toBe(0);
      expect(list.insertEnd(undefined).length).toBe(0);
      expect(list.insertEnd(NaN).length).toBe(0);
    });
  });

  describe('#reverse', () => {
    it('should reverse the list containing 1, 2, 3 properly', () => {
      let list = new SLL();
      list.insertEnd(1);
      list.insertEnd(2);
      list.insertEnd(3);
      list.reverse();

      expect(list.head.value).toEqual(3);
      expect(list.head.next.value).toEqual(2);
      expect(list.head.next.next.value).toEqual(1);
    });

    it('should return an empty list if the list is currently empty', () => {
      let list = new SLL();
      expect(list.reverse());
    });

    it('should return a list in the same order if only one item is present', () => {
      let list = new SLL();
      list.insertHead(1);
      expect(list.reverse().head.value).toBe(1);
    });
  });

  describe('#remove', () => {
    it('should decrement the length of the list', () => {
      let list = new SLL();
      list.insertHead(1);
      list.insertHead(2);
      list.insertHead(3);
      list.remove(1);

      expect(list.length).toEqual(2);
    });

    it('should remove the node so it no longer exists in the list', () => {
      let list = new SLL();
      list.insertHead(1);
      list.insertHead(2);
      list.insertHead(3);
      list.remove(1);

      expect(list.head.next.value).not.toBe(2);
    });

    it('should return null if remove is called on an empty list', () => {
      let list = new SLL();
      expect(list.remove(0)).toBe(null);
    });
  });

  describe('#findNthNodeFromEnd', () => {
    let list = new SLL();
    list.insertEnd(1);
    list.insertEnd(2);
    list.insertEnd(3);
    list.insertEnd(4);
    list.insertEnd(5);

    it('should return null if a negative offset is given number', () => {
      expect(list.findNthNodeFromEnd(-10)).toEqual(null);
    });

    it('should return null if an offset > list final list index is given', () => {
      expect(list.findNthNodeFromEnd(7)).toBe(null);
    });

    it('should return the nth from the last node (zero based index)', () => {
      expect(list.findNthNodeFromEnd(0).value).toBe(5);
      expect(list.findNthNodeFromEnd(2).value).toBe(3);
    });
  });
});
