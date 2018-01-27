'use strict';

let SLL = require('../lib/sll.js');
let testList = new SLL;

describe('SLL module', function () {
  describe('#insert head', function () {
    it('should return a linked list with a new node in front', function () {
      expect( testList.insertHead(2) ).toEqual( {head: {value: 2, next: null}} );
      // testList: [2] ->
    });
    it('should return null if the value passed in is null', function () {
      expect( testList.insertHead(null) ).toEqual( null );
    });
    it('should put the head at the start of the list', function () {
      expect( testList.head ).toEqual( {value: 2, next: null} );
      testList.insertHead(1);
      // testList: [1] -> [2] ->
      expect( testList.head ).toEqual( {value: 1, next: {value: 2, next: null}} );
    });
  });
  describe('#insert end', function () {
    it('should return a linked list with a new node at the end', function () {
      expect( testList.insertEnd(3) ).toEqual( {head: {value: 1, next: {value: 2, next: {value: 3, next: null}}}} );
      // testList: [1] -> [2] -> [3] ->
    });
    it('should return null if the value passed in is null', function () {
      expect( testList.insertEnd(null) ).toEqual( null );
    });
    it('should retain the head at the start of the list', function () {
      expect( testList.head ).toEqual( {value: 1, next: {value: 2, next: {value: 3, next: null}}} );
      testList.insertEnd(4);
      // testList: [1] -> [2] -> [3] -> [4] ->
      expect( testList.head ).toEqual( {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}} );
    });
  });
  describe('#reverse', function () {
    it('should return an object', function () {
      expect( typeof testList.reverse() ).toEqual( 'object' );
      // testList [4] -> [3] -> [2] -> [1] ->
    });
    it('should return the original list, reversed', function () {
      expect( testList.reverse() ).toEqual( {head: {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}}} );
      // testList: [1] -> [2] -> [3] -> [4] ->
    });
    it('should place the head at the new beginning of the list', function () {
      expect( testList.head ).toEqual( {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}} );
      testList.reverse();
      // testList: [4] -> [3] -> [2] -> [1] ->
      expect( testList.head ).toEqual( {value: 4, next: {value: 3, next: {value: 2, next: {value: 1, next: null}}}} );
    });
  });
  describe('#find nth node from end', function () {
    it('should return an object', function () {
      expect( typeof testList.findNthNodeFromEnd(2) ).toEqual( 'object' );
    });
    it('should return null if n is outside of the list', function () {
      expect( testList.findNthNodeFromEnd(7) ).toEqual( null );
    });
    it('should return the exact object at the offset from the end', function () {
      expect( testList.findNthNodeFromEnd(0) ).toEqual( {value: 1, next: null} );
      expect( testList.findNthNodeFromEnd(1) ).toEqual( {value: 2, next: {value: 1, next: null}} );
      expect( testList.findNthNodeFromEnd(2) ).toEqual( {value: 3, next: {value: 2, next: {value: 1, next: null}}} );
      expect( testList.findNthNodeFromEnd(3) ).toEqual( {value: 4, next: {value: 3, next: {value: 2, next: {value: 1, next: null}}}} );
    });
  });
  describe('#remove from offset', function () {
    it('should return null if the offset is greater than the length of the list', function () {
      expect( testList.remove(7) ).toEqual( null );
    });
    it('should retain the position of head even if the first node is removed', function () {
      expect( testList.head ).toEqual( {value: 4, next: {value: 3, next: {value: 2, next: {value: 1, next: null}}}} );
      testList.remove(0);
      // testList: [3] -> [2] -> [1] ->
      expect( testList.head ).toEqual( {value: 3, next: {value: 2, next: {value: 1, next: null}}} );
    });
    it('should return the list with the selected object removed', function () {
      expect( testList.remove(2) ).toEqual( {head: {value: 3, next: {value: 2, next: null}}} );
      // testList: [3] -> [2] ->
      expect( testList.remove(1) ).toEqual( {head: {value: 3, next: null}} );
      // testList: [3] ->
      expect( testList.remove(0) ).toEqual( {head: null} );
      // testList:
    });
  });
});
