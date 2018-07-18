'use strict';

const sll = require('../lib/sll');
const nd = require('../lib/nd');


describe('Sll module', function(){

  describe('constructor function', function(){

    test(
      'should create an empty instance of class sll', () => {
        // create a sll obj
        let validSll = new sll();

        expect(validSll.head).toBe(null);
      });
  });

  describe('insertHead function', function(){

    test(
      'should insert head into empty sll', () => {
        // create a sll obj
        let validSll = new sll();
        validSll.insertHead(1);

        expect(validSll.head).toEqual(new nd(1));
        expect(validSll.head.next).toBe(null);
      });

    test(
      'shuold insert head into existing nodes sll', () => {
        let validSll = new sll();
        validSll.insertHead(1);
        validSll.insertHead(2);

        expect(validSll.head.value).toEqual(2);
        expect(validSll.head.next).toEqual(new nd(1));
      });

    test(
      'shuold insert head with array value into existing nodes sll', () => {
        let validSll = new sll();
        validSll.insertHead(1);
        validSll.insertHead([1,2,3]);

        expect(validSll.head.value).toEqual([1,2,3]);
        expect(validSll.head.next).toEqual(new nd(1));
      });
  });

  describe('insertEnd function', () => {

    test(
      'should insert as head into empty sll', () => {
        // create a sll obj
        let validSll = new sll();
        validSll.insertEnd(1);

        expect(validSll.head).toEqual(new nd(1));
        expect(validSll.head.next).toBe(null);
      });

    test(
      'shuold insert to end into existing nodes sll', () => {
        let validSll = new sll();
        validSll.insertHead(1);
        validSll.insertEnd(3);

        expect(validSll.head.value).toEqual(1);
        expect(validSll.head.next).toEqual(new nd(3));
      });

    test(
      'shuold insert to end with object value into existing nodes sll', () => {
        let validSll = new sll();
        validSll.insertHead(1);
        validSll.insertEnd({});

        expect(validSll.head.value).toEqual(1);
        expect(validSll.head.next.value).toEqual({});
      });
  });

  describe('reverse function', function(){

    test(
      'should reverse singly linked list with multiple nodes', () => {
        // create a sll obj
        let validSll = new sll();
        validSll.insertHead(1);
        // insert node in end os all
        for(let i = 2; i < 11; i++){
          validSll.insertEnd(i);
        }

        // reverse
        validSll.reverse();

        let currentNode = validSll.head;
        let v = 10;
        while(currentNode){
          expect(currentNode.value).toEqual(v);
          v--;
          currentNode = currentNode.next;
        }
      });

    test(
      'should reverse singly linked list with only head', () => {
        // create a sll obj
        let validSll = new sll();
        validSll.insertHead(1);

        // reverse
        validSll.reverse();

        expect(validSll.head.value).toEqual(1);
      });

    test(
      'should return obj itself if it is empty', () => {
        // create an empty sll obj
        let emptySll = new sll();

        // reverse
        emptySll.reverse();

        expect(emptySll.head).toEqual(null);
      });
  });
		
  describe('remove function', function(){
    describe('valid input', function(){

      test(
        'should remove Nth node if an instance of class Sll has multiple nodes', () => {
          // create a sll obj
          let validSll = new sll();
          validSll.insertHead(1);
          // insert node in end os all
          for(let i = 2; i < 11; i++){
            validSll.insertEnd(i);
          }
				
          // remove
          validSll.remove(7);

          let i = 1;
          let current = validSll.head;
          while(current){
            expect(current.value).toEqual(i);
            if(i === 6){
              i++;
            }
            i++;
            current = current.next;
          }
        });

      test(
        'should remove head from an instance of sll with multiple nodes', () => {
				
          // create a sll obj
          let validSll = new sll();
          validSll.insertHead(1);
          // insert node in end os all
          for(let i = 2; i < 11; i++){
            validSll.insertEnd(i);
          }
				
          // remove
          validSll.remove(1);
          expect(validSll.head.value).toEqual(2);
        });

      test(
        'should return head if an instance of class Sll has only head', () => {
				
          // create a sll obj
          let validSll = new sll();
          validSll.insertHead(1);
				
          // remove
          validSll.remove(1);
          expect(validSll.head).toBe(null);
        });
    });
	
    describe('invalid input', function(){

      // create a sll obj
      let validSll = new sll();
      validSll.insertHead(1);
      // insert node in end os all
      for(let i = 2; i < 11; i++){
        validSll.insertEnd(i);
      }

      test(
        'should return null if N is not number', () => {	
          expect(validSll.remove('')).toBe(null);
        });

      test(
        'should return null if N is 0', () => {
          expect(validSll.remove(0)).toEqual(null);
        });

      test(
        'should return null if N is negative', () => {
          expect(validSll.remove(-1)).toEqual(null);
        });
			
      test(
        'should return null if N is more than length of sll', () => {
          expect(validSll.remove(11)).toEqual(null);
        });
    });
  });

  describe('findNthNode function', function(){
    describe('valid input', function(){

      test(
        'should return Nth node if an instance of class Sll has multiple nodes', () => {
          // create a sll obj
          let validSll = new sll();
          validSll.insertHead(1);
          // insert node in end os all
          for(let i = 2; i < 11; i++){
            validSll.insertEnd(i);
          }
				
          expect(validSll.findNthNode(7).value).toEqual(7);
        });

      test(
        'should return null if an instance of class Sll is empty (head is null)', () => {
          let emptySll = new sll();
          expect(emptySll.findNthNode(9)).toEqual(null);
        });

      test(
        'should return head if an instance of class Sll has only head and 1 is passed', () => {
          // create a sll obj
          let headOnlySll = new sll();
          headOnlySll.insertHead(1);
          expect(headOnlySll.findNthNode(1).value).toEqual(1);
        });
    });
	
    describe('invalid input', function(){

      // create a sll obj
      let validSll = new sll();
      validSll.insertHead(1);
      // insert node in end os all
      for(let i = 2; i < 11; i++){
        validSll.insertEnd(i);
      }

      test(
        'should return null if N is not number', () => {	
          expect(validSll.findNthNode('')).toBe(null);
        });

      test(
        'should return null if N is 0', () => {
          expect(validSll.findNthNode(0)).toEqual(null);
        });

      test(
        'should return null if N is negative', () => {
          expect(validSll.findNthNode(-1)).toEqual(null);
        });
			
      test(
        'should return null if N is more than length of sll', () => {
          expect(validSll.findNthNode(11)).toEqual(null);
        });
    });
  });

  describe('findNthNodeFromEnd function', function(){
    describe('valid input', function(){

      test(
        'should return Nth node from tail node if an instance of class Sll has multiple nodes', () => {
          // create a sll obj
          let validSll = new sll();
          validSll.insertHead(1);
          // insert node in end os all
          for(let i = 2; i < 11; i++){
            validSll.insertEnd(i);
          }
				
          expect(validSll.findNthNodeFromEnd(7).value).toEqual(4);
        });

      test(
        'should return null if an instance of class Sll is empty (head is null)', () => {
          let emptySll = new sll();
          expect(emptySll.findNthNodeFromEnd(9)).toEqual(null);
        });

      test(
        'should return head if an instance of class Sll has only head and 1 is passed', () => {
          // create a sll obj
          let headOnlySll = new sll();
          headOnlySll.insertHead(1);
          expect(headOnlySll.findNthNodeFromEnd(1).value).toEqual(1);
        });
    });
	
    describe('invalid input', function(){

      // create a sll obj
      let validSll = new sll();
      validSll.insertHead(1);
      // insert node in end os all
      for(let i = 2; i < 11; i++){
        validSll.insertEnd(i);
      }

      test(
        'should return null if N is not number', () => {	
          expect(validSll.findNthNodeFromEnd('')).toBe(null);
        });

      test(
        'should return null if N is 0', () => {
          expect(validSll.findNthNodeFromEnd(0)).toEqual(null);
        });

      test(
        'should return null if N is negative', () => {
          expect(validSll.findNthNodeFromEnd(-1)).toEqual(null);
        });
			
      test(
        'should return null if N is more than length of sll', () => {
          expect(validSll.findNthNodeFromEnd(11)).toEqual(null);
        });
    });
  });
});
