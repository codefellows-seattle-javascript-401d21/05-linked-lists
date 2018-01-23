`use strict`;

const SLL = require('../lib/sll');
require('jest');

describe(`SLL`, function() {
  describe(`# constructor`, () => {
    const sllTest = new SLL();
    it(`should return an instance of SLL`, () => {
      expect(sllTest).toBeInstanceOf(SLL);
    });
    it(`instance of SLL should have a head of null`, () => {
      expect(sllTest.head).toBeNull();
    });
  });
  describe(`# insertHead(val)`, () => {
    it(`should add .head of null if no argument`, () => {
      const sllWithHead = new SLL;
      sllWithHead.insertHead();
      expect(sllWithHead.head).toBeNull();
    });
    it(`should be unchanged if argument not a number`, () => {
      const sllWithHead = new SLL;
      sllWithHead.insertHead('not numerical');
      expect(sllWithHead).toBe(sllWithHead);
    });
    it(`should set .head to node with the .value of value input`, () => {
      const sllWithHead = new SLL;
      sllWithHead.insertHead(5);
      expect(sllWithHead.head.value).toBe(5);
    });
  });
  describe(`# insertEnd(val)`, () => {
    it(`should set .head to null, if .head is null and there is no input`, () => {
      const sllWithEnd = new SLL;
      sllWithEnd.insertEnd();
      expect(sllWithEnd.head).toBeNull();
    });
    //it should set .next to null, if .head is not null and there is no input
    it(`should set .head to null, if .head is null and input is not a number`, () => {
      const sllWithEnd = new SLL;
      sllWithEnd.insertEnd('not numerical');
      expect(sllWithEnd.head).toBeNull();
    });
    // it should set .next to null if .head is not null and input is not a number
    it(`should set .head to the value input, if .head is null`, () => {
      const sllWithEnd = new SLL;
      sllWithEnd.insertEnd(5);
      expect(sllWithEnd.head.value).toBe(5);
    });
    it(`should set .head.next.value to value, if input is numerical, and .head.next is not null`, () => {
      const sllWithHeadAndEnd = new SLL;
      sllWithHeadAndEnd.head = {
        value: 3,
        next: null
      };
      sllWithHeadAndEnd.insertEnd(3);
      expect(sllWithHeadAndEnd.head.value);
    });
  });
  describe(`# reverse()`, () => {
    it(`should reverse the order of nodes in a linked list`, () => {
      const sll = new SLL;
      sll.head = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
      const sllReversed = sll.reverse();
      expect(sllReversed).toEqual( { head: { value: 3, next: { value: 2, next: { value: 1, next: null } } } });
    });
  });
  describe(`# remove(offset)`, () => {
    it(`should not change if offset is not a number`, () => {
      const sll = new SLL;
      sll.head = { value: 1, next: { value: 2, next: null } }
      expect(sll.remove('string')).toBe(sll);
    });
    it(`should remove the nth node`, () => {
      const sll = new SLL;
      sll.head = { value: 0, next: { value: 1, next: { value: 2, next: null } } };
      sll.remove(0);
      expect(sll).toEqual( { head: { value: 1, next: { value: 2, next: null } } } );
    });
    it(`should not change if offset is greater than the count of nodes`, () => {
      const sll = new SLL;
      sll.head = { value: 3, next: { value: 2, next: null } };
      sll.remove(99);
      expect(sll).toBe(sll);
    });
  });
});
