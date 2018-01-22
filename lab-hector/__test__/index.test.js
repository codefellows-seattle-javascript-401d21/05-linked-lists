'use strict';

const SLL = require('../lib/sll');
const Nd = require('../lib/nd');
require('jest');

let test1 = new SLL(), test2 = new SLL();

describe('constructor SLL', function () {
  describe('#SLL Head', function () {
    it('should...', function (){
      expect(test1).toBeInstanceOf(SLL);
      expect(test2).toBeInstanceOf(SLL);
    });
    it('should init head as null', function(){
      expect(test1.head).toBeNull();
      expect(test2.head).toBeNull();
    });
    it('should initialixe listLength as numeric 0', function() {
      expect(test1.listLength).toBe(0);
      expect(test2.listLength).toBe(0);
    });
  });
  // describe('reader module', function () {
  //   describe('#insert Head', () => {
  //     it('should...', () => {});
  //     it('should...', () => {});
  //     it('should...', () => {});
  //   });
  //   describe('#insert tail', () => {
  //     it('should...', () => { });
  //     it('should...', () => { });
  //     it('should...', () => { });
  //   });
  //   describe('#remove', () => {
  //     it('should...', () => { });
  //     it('should...', () => { });
  //     it('should...', () => { });
  //   });
  //   describe('#reverse', () => {
  //     it('should...', () => { });
  //     it('should...', () => { });
  //     it('should...', () => { });
  //   });
  //   describe('#findNthNode', () => {
  //     it('should...', () => { });
  //     it('should...', () => { });
  //     it('should...', () => { });
  //   });
  // });
});