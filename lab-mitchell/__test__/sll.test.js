'use strict';

const SLL = require('../lib/sll');

describe('sll.js', () => {
  describe('sll.insertHead()', function() {
    let test = new SLL();
    
    it('should insert node directly after head, with next of null', (done) => {
      test.insertHead(5);
      expect(test).toEqual({head: { value: 5, next: null}});
      done();
    });

    it('should insert something before the previously node with a value of 5 created earlier, with next equal to the previously created node', (done) => {
      test.insertHead(2);
      expect(test).toEqual({head: { value: 2, next: { value: 5, next: null}}});
      done();
    });

    it('should return a descriptive error string with non-numerical input', (done) => {
      expect(test.insertHead('three')).toEqual('ERROR: non-numerical input');
      done();
    });
  });

  describe('sll.insertEnd()', function() {
    let test = new SLL();

    it('should insert node at end of list, with given value and next of null', (done) => {
      test.insertEnd(20);
      expect(test).toEqual({ head: { value: 20, next: null } });
      done();
    });

    it('should insert node at end of list, with given value and next of null', (done) => {
      test.insertEnd(40);
      
      expect(test).toEqual({ head: { value: 20, next: { value: 40, next: null}}});
      done();
    });

    it('should return a descriptive error string with non-numerical input', (done) => {
      expect(test.insertEnd('six')).toEqual('ERROR: non-numerical input');
      done();
    });
  });

  describe('sll.reverse()', function() {
    let test = new SLL(), test3 = new SLL();

    it('should insert node at end of list, with given value and next of null', (done) => {
      let test2 = test.insertHead(1).insertEnd(2).insertEnd(3);
      expect(test2.reverse()).toEqual({ head: { value: 3, next: { value: 2, next: { value: 1, next: null}}}});
      done();
    });
    
    it('should return ', (done) => {
      expect(test3.insertEnd(1).reverse()).toEqual('ERROR: Empty or single element linked list, nothing to reverse');
      done();
    });

    it('should return error string if no nodes', (done) => {
      expect(test.reverse()).toEqual('ERROR: Empty or single element linked list, nothing to reverse');
      done();
    });
  });

  // describe('sll.delete()', function() {
  //   let test = new SLL().insertHead(1).insertEnd(2).insertEnd(3);

  //   it('should', function(done) {
  //     expect(test.remove(2)).toEqual({ head: { value: 1, next: { value: 3, next: null}}});
  //     done();
  //   });

    // it('should', function(done) {

    //   done();
    // });

    // it('should', function(done) {

    //   done();
    // });
  });

  // it('should ', (done) => {
  //   expect(test.insertEnd(10)).toEqual(null);
  //   done();
  // });

  // it('should ', (done) => {
  //   done();
  // });
// });