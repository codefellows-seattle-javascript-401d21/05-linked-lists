'use strict';

const SLL = require('../lib/sll');
const Nd = require('../lib/nd');
require('jest');

let test1 = new SLL(), test2 = new SLL();

describe('constructor SLL', function () {
  describe('#SLL constructor', function () {
    it('should test to see if there is a list...', function (){
      expect(test1).toBeInstanceOf(SLL);
      expect(test2).toBeInstanceOf(SLL);
    });
    it('should init head as null', function(){
      expect(test1.head).toBeNull();
      expect(test2.head).toBeNull();
    });
    it('should initialize listLength as numeric 0', function() {
      expect(test1.listLength).toBe(0);
      expect(test2.listLength).toBe(0);
    });
  });
});

// This check if something was inserted in the HEAD
describe('This checks the HEAD', function () {
  describe('#SSL Head', function () {
    it('should check if anything is in Head', function () {
      expect(test1.head).toBeNull();
      expect(test2.head).toBeNull();
    });
    it('should check if list is undefined', function () {
      expect(test.listLength).toBe();
      expect(test.listLength).toBe();
    });
    it('should...', function () {
      expect().toBe();
      expect().toBe();
    });
  });
});

//this is the test to check if inserted at TAIL

// describe('This checks the TAIL', function () {
//   describe('#SSL Tail', function () {
//     it('should...', function () {
//       expect().toBeInstanceOf();
//       expect().toBeInstanceOf();
//     });
//     it('should...', function () {
//       expect().toBeNull();
//       expect().toBeNull();
//     });
//     it('should...', function () {
//       expect().toBe();
//       expect().toBe();
//     });
//   });
// });


// check if reversed
// describe('This checks if it was reversed', function () {
//   describe('#Reversed', function () {
//     it('should...', function () {
//       expect().toBeInstanceOf();
//       expect().toBeInstanceOf();
//     });
//     it('should...', function () {
//       expect().toBeNull();
//       expect().toBeNull();
//     });
//     it('should...', function () {
//       expect().toBe();
//       expect().toBe();
//     });
//   });
// });

// this one checks to findNthNode

// describe('This finds the NthNode', function () {
//   describe('#SLL NthNode', function () {
//     it('should...', function () {
//       expect().toBe();
//       expect().toBe();
//     });
//     it('should...', function () {
//       expect().toBeNull();
//       expect().toBeNull();
//     });
//     it('should...', function () {
//       expect().toBe(0);
//       expect().toBe(0);
//     });
//   });
// });