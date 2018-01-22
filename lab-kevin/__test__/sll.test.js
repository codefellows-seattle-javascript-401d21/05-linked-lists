'use strict';

const Nd = require('../lib/nd');
const SLL = require('../lib/sll');

describe('#ssl tests' ,() => {
  let linkList = new SLL();
  describe('#ssl insertHead', () =>{
    it('Should add a new node to the head of the link list', () => {
      expect(linkList.insertHead(7)).toBeInstanceOf(Object);
      console.log('insert head', linkList);
    });

    describe('#ssl insertEnd', () =>{
      it('Should add a new node to the end of the link list', () => {
        expect(linkList.insertEnd(11)).toBeInstanceOf(Object);
        console.log('insert end', linkList);
      });
    });

    describe('#ssl reverse', () =>{
      let linkList = new SLL();
      [...Array(10)].forEach((val, i) => linkList.insertEnd(i));
      console.log('begin reverse', linkList);
      it('Should reverse a link list', (done) => {
        expect(linkList.reverse()).toBeInstanceOf(Object);
        console.log('reversed', linkList);
        done()
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

});