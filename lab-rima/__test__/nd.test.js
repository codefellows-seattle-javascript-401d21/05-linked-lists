'use strict';

const node = require('../lib/nd');

describe('Nd module', function(){

  describe('constructor function', function(){

    test(
      'should create an instance of class Node with number value', () => {
        // create a Node obj
        let validNode = new node(1);

        expect(validNode.value).toEqual(1);
        expect(validNode.next).toEqual(null);
      });

    test(
      'should create an instance of class Node with null', () => {
        // create a Node obj
        let validNode = new node(null);

        expect(validNode.value).toEqual(null);
        expect(validNode.next).toEqual(null);
      });
		
    test(
      'should create an instance of class Node with array', () => {
        // create a Node obj
        let validNode = new node([1,2,3]);

        expect(validNode.value).toEqual([1,2,3]);
        expect(validNode.next).toEqual(null);
      });
  });
});
