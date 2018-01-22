'use strict';

const SLL = require('../lib/sll');
const ND = require('../lib/nd');
require('jest');

let test1 = new SLL(), test2 = new SLL();

describe('SLL Constructor', function () {
  describe('#SLL', function () {
    it('Should be a valid instance of an SLL object', function () {
      expect(test1).toBeInstanceOf(SLL);
      expect(test2).toBeInstanceOf(SLL);      
    });
    it('Should initialize "head" as "null"', function () {
      expect(test1.head).toBeNull();
      expect(test2.head).toBeNull();
    });
    it('Should initialize "lLen" (list length) as numeric "0"', function () {
      expect(test1.lLen).toBe(0);
      expect(test2.lLen).toBe(0);
    });
  });
  describe('#insertTail', function () {
    it('Should Add Valid Node Object to list', function () {
      test1.insertTail('tail-test1');
      test2.insertTail('tail-test2');
      expect(test1.head).toBeInstanceOf(ND);
      expect(test2.head).toBeInstanceOf(ND);
    });
    it('Should add an object with the correct value', function () {
      expect(test1.head.value).toBe('tail-test1');
      expect(test2.head.value).toBe('tail-test2');
    });
    it('Should increment the lLen value of the list when adding a new item', function () {
      expect(test1.lLen).toBe(1);
      expect(test2.lLen).toBe(1);
    });
    it('Should add an item to the end of the list', function () {
      test1.insertTail('tail2-test1');
      test2.insertTail('tail2-test2');
      expect(test1.head.next.value).toBe('tail2-test1');
      expect(test2.head.next.value).toBe('tail2-test2');
    });
  });
  describe('#insertHead', function () {
    it('Should Add Valid Node Object to list', function () {
      test1.insertHead('head-test1');
      test2.insertHead('head-test2');
      expect(test1.head).toBeInstanceOf(ND);
      expect(test2.head).toBeInstanceOf(ND);
    });
    it('Should add an object with a correct value', function () {
      expect(test1.head.value).toBe('head-test1');
      expect(test2.head.value).toBe('head-test2');
    });
    it('Should increment the lLen value of the list when adding a new item', function () {
      expect(test1.lLen).toBe(3);
      expect(test2.lLen).toBe(3);
    });
    it('Should add nodes to the Beginning of the list', function () {
      test1.insertHead('head2-test1');
      test2.insertHead('head2-test2');
      expect(test1.head.value).toBe('head2-test1');
      expect(test2.head.value).toBe('head2-test2');
    });
  });
  describe('#remove', function () {
    it('Should return null with any non-numeric input', function () {
      expect(test1.remove()).toBeNull();
      expect(test2.remove('')).toBeNull();
    });
    it('Should remove the correct Node from the list', function () {
      test1.remove(3);
      test2.remove(3);
      expect(test1.head.next.next.value).toBe('tail2-test1');
      expect(test2.head.next.next.value).toBe('tail2-test2');
    });
    it('Should alter the head object if the first item is removed', function () {
      test1.remove(1);
      test2.remove(1);
      expect(test1.head.value).toBe('head-test1');
      expect(test2.head.value).toBe('head-test2');
    });
    it('Should properly decrement the lLen value to reduce the list length', function () {
      expect(test1.lLen).toBe(2);
      expect(test2.lLen).toBe(2);
      test1.insertTail('reverse-test1');
      test2.insertTail('reverse-test2');
    });
  });
  describe('#reverse', function () {
    it('Should properly change the head object in the list item', function () {
      test1.reverse();
      test2.reverse();
      expect(test1.head.value).toBe('reverse-test1');
      expect(test2.head.value).toBe('reverse-test2');
    });
    it('Should set the last Node next value to "null"', function () {
      expect(test1.head.next.next.next).toBeNull();
      expect(test2.head.next.next.next).toBeNull();
    });
    it('Should properly move the first Node to the last item position', function () {
      expect(test1.head.next.next.value).toBe('head-test1');
      expect(test2.head.next.next.value).toBe('head-test2');
    });
  });
  describe('#findNthNode', function () {
    it('Should return null for any non numeric input', function () {
      expect(test1.findNthNode('')).toBeNull();
      expect(test2.findNthNode()).toBeNull();
    });
    it('Should return a valid node from the requested location', function () {
      expect(test1.findNthNode(2)).toBe(test1.head.next);
      expect(test2.findNthNode(2)).toBe(test2.head.next);
    });
    it('Should return null for a numeric input greater than the list length or less than one where one is the first node', function () {
      expect(test1.findNthNode(20)).toBeNull();
      expect(test2.findNthNode(0)).toBeNull();
    });
  });
  describe('#findNthFromLastNode', function () {
    it('Should return null for any non numeric input', function () {
      expect(test1.findNthFromLastNode('')).toBeNull();
      expect(test2.findNthFromLastNode()).toBeNull();
    });
    it('Should return a valid node from the requested location', function () {
      expect(test1.findNthFromLastNode(1)).toBe(test1.head.next);
      expect(test2.findNthFromLastNode(0)).toBe(test2.head.next.next);
    });
    it('Should return null for a numeric input greater than the list length or less than one where one is the first node', function () {
      expect(test1.findNthFromLastNode(20)).toBeNull();
      expect(test2.findNthFromLastNode(-1)).toBeNull();
    });
  });
});