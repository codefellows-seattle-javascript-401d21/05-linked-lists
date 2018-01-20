'use strict';

const sll = require('../lib/sll');
const findMid = require('../lib/solution');


describe('Solution module', function(){
  describe('findMid function', function(){

    describe('valid inputs', function(){

      // create a sll obj
      let validSll = new sll();
      validSll.insertHead(1);
      // insert node in end os all
      for(let i = 2; i < 11; i++){
        validSll.insertEnd(i);			
      }

      test(
        'even numbers of node: should return the Math.ceil(num of nodes/2)th node', () => {
          expect(findMid(validSll).value).toEqual(5);
        });

      // remove the last node
      validSll.remove(validSll.length);

      test(
        'odd numbers of node: should return the Math.ceil(num of nodes/2)th node', () => {
          expect(findMid(validSll).value).toEqual(5);
        });
    });
		
    describe('invalid input', function(){

      test(
        'should return false if not an instance of class Sll is passed', () => {
          expect(findMid('')).toEqual(false);
        });

      const emptySll = new sll();

      test(
        'should return null if an instance of class Sll is empty (head is null)', () => {
          expect(findMid(emptySll)).toEqual(null);
        });
    });
  });
});
