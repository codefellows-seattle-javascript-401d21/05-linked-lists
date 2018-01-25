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

  // it('should ', (done) => {
  //   expect(test.insertEnd(10)).toEqual(null);
  //   done();
  // });

  // it('should ', (done) => {
  //   done();
  // });
});