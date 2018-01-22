'use strict';

const Nd = require('../lib/nd');
const SLL = require('../lib/sll');

describe('#ssl tests' ,() => {
  describe('#ssl insertHead', () =>{
    let linkList = new SLL();
    it('Should add a new node to the head of the link list', () => {
      linkList.insertHead(7);
      expect(linkList.head.value).toEqual(7);
    });

    it('Should return null when adding an undefined value to the head of the link list', () => {
      expect(new SLL().insertHead()).toBeNull();
    });

    it('Should allow null, false and 0, to be added as a value when adding to the head of the link list', () => {
      linkList.insertHead(false);
      expect(linkList.head.value).toEqual(false);
      linkList.insertHead(0);
      expect(linkList.head.value).toEqual(0);
      linkList.insertHead(null);
      expect(linkList.head.value).toEqual(null);
    });
  });

  describe('#ssl insertEnd', () =>{
    let linkList = new SLL();
    [...Array(5)].forEach((val, i) => linkList.insertEnd(i));
    it('Should add a new node to the end of the link list', () => {
      linkList.insertEnd(6);
      for(var node = linkList.head; node.next; node = node.next);
      expect(node.value).toEqual(6);
    });

    it('Should allow null, false and 0, to be added as a value when adding to the end of the link list', () => {
      var node;
      linkList.insertEnd(false);
      for(node = linkList.head; node.next; node = node.next);
      expect(node.value).toEqual(false);
      linkList.insertEnd(0);
      for(node = linkList.head; node.next; node = node.next);
      expect(node.value).toEqual(0);
      linkList.insertEnd(null);
      for(node = linkList.head; node.next; node = node.next);
      expect(node.value).toEqual(null);
    });
  });

  describe('#ssl reverse', () =>{
    let linkList = new SLL();
    it('Should reverse a link list', () => {
      let end = 9;
      [...Array(end + 1)].forEach((val, i) => linkList.insertEnd(i));
      linkList.reverse();
      expect(linkList.head.value).toEqual(end);
    });

    it('Should reverse a short link list', () => {
      let end = 1;
      [...Array(end + 1)].forEach((val, i) => linkList.insertEnd(i));
      linkList.reverse();
      expect(linkList.head.value).toEqual(end);
    });

    it('Should return link list as is when reversing a link list when it is a new instance', () => {
      let linkList = new SLL();
      linkList.reverse();
      expect(linkList.head).toEqual(null);
    });
  });

  describe('#sll remove', () => {
    it('should remove the node at the offset', () => {
      let linkList = new SLL();
      let end = 2;
      [...Array(end + 1)].forEach((val, i) => linkList.insertEnd(i));
      linkList.remove(2);
      expect(linkList.head.next.value).not.toEqual(1);
    });
    
    it('should remove should return null if the offset is not a number', () => {
      let linkList = new SLL();
      expect(linkList.remove('x')).toBeNull();
    });

    it('Should return null if the given offset is out of range', () => {
      let linkList = new SLL();
      let end = 3;
      [...Array(end + 1)].forEach((val, i) => linkList.insertEnd(i));
      linkList.remove(5);
      expect(linkList.remove(5)).toBeNull();
    });

  });

  describe('#sll findNthNodeFromEnd', () => {

    it('Should return null if the given offset is not a number', () => {
      let linkList = new SLL();
      linkList.findNthNodeFromEnd(null);
      expect(linkList.head).toBeNull();
    });
 
    it('Should return null if the given offset is out of range', () => {
      let linkList = new SLL();
      let end = 9;
      [...Array(end + 1)].forEach((val, i) => linkList.insertEnd(i));
      let n = 14;
      linkList.findNthNodeFromEnd(n);
      expect(linkList.head).toBeNull();
    });

    it('Should find the node at a given offset from the end of a link list', () => {
      let linkList = new SLL();
      let end = 9;
      [...Array(end + 1)].forEach((val, i) => linkList.insertEnd(i));
      let n = 4;
      linkList.findNthNodeFromEnd(n);
      expect(linkList.head.value).toEqual(end - n);
    });

  });
});