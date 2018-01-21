'use strict';

const SLL = require ('../lib/sll');
const ND = require('../lib/nd');


describe('SLL module', function() {
  describe('#head', () => {
    let test = new SLL();
    it('should add node', () => {
      test.insertHead('insert-node-1');
      expect(test.head).toBeInstanceOf(ND);
    });

    it('should add node to the beginning of the list', () => {
      test.insertHead('insert-head-test');
      expect(test.head.value).toBe('insert-head-test');
    });

    it('sll module should set head to null', () => {
      expect(test).toBeInstanceOf(SLL);
    });

    describe('#end', () => {
      let test = new SLL();
      it('should add node', () => {
        test.insertEnd('insert-node-2');
        expect(test.head).toBeInstanceOf(ND);
      });

      it('should add node to the end of the list', () => {
        test.insertEnd('insert-end-test');
        expect(test.head.next.value).toBe('insert-end-test');
      });

      it('should be the correct value', () => {
        expect(test.head.value).toBe('insert-node-2');
      });

    });



  });

});