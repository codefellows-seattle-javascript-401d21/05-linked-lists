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
    var node;
    let linkList = new SLL();
    it('Should reverse a link list', () => {
      let end = 9;
      [...Array(end + 1)].forEach((val, i) => linkList.insertEnd(i));
      for(node = linkList.head; node.next; node = node.next);
      expect(node.value).toEqual(end);
    });
  });

  describe('#ssl findNthNodeFromEnd', () =>{
    let linkList = new SLL();
    [...Array(10)].forEach((val, i) => linkList.insertEnd(i));
    console.log('begin findNthNodeFromEnd', linkList);
    it('Should reverse a link list', () => {
      expect(linkList.findNthNodeFromEnd(5)).toBeInstanceOf(Object);
      console.log('findNthNodeFromEnd', linkList);
    });
  });
});