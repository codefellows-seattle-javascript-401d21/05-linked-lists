'use strict';

const build = require('../lib/listbuild.js');
const arrayForTesting = [1, 5];
let testlist = new build();
let testlist2 = new build();
let testlist3 = new build();

arrayForTesting.map(x => testlist.createHeadNode(x));
arrayForTesting.map(x => testlist2.createHeadNode(x));
[3,4,5].map(x => testlist3.createHeadNode(x));


describe('list build module', function() {
  describe('create node at head of list', function(){
    it('should add a node at the head', () =>{
      expect(testlist.createHeadNode(3)).toEqual({head : {value: 3, next: { value: 5, next: { value: 1, next: null}}}});
    });
    it('should have a value to pass it', () =>{
      expect(testlist.createHeadNode()).toEqual(null);
    });



  });
  describe('create node at tail of list', function(){
    it('should add a node at the tail', () =>{
      expect(testlist2.createTailNode(3)).toEqual({head : {value: 5, next: { value: 1, next: { value: 3, next: null}}}});
    });
    it('should have a value to pass it', () =>{
      expect(testlist2.createTailNode()).toEqual(null);
    });



  });

  describe('Remove specific node from list', function(){
    it('should remove a node with value 1', () =>{
      expect(testlist2.removeNode(1)).toEqual({head : {value: 5, next: { value: 3, next: null}}});
    });
    it('should have a value to pass it', () =>{
      expect(testlist2.removeNode()).toEqual(null);
    });



  });

  describe('Remove node at specified offset from list', function(){
    it('should remove a node with offset of 1', () =>{
      expect(testlist3.removeOffSet(1)).toEqual({head : {value: 5, next: { value: 3, next: null}}});
    });
    it('should have an offset value passed in', () =>{
      expect(testlist3.removeOffSet()).toEqual(null);
    });



  });



});
