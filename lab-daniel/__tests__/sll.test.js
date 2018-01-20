'use strict';

const SLL = require('../lib/sll');
const ND = require('../lib/nd');
require('jest');

let test1 = new SLL(), test2 = new SLL();

describe('SLL Constructor', function () {
  describe('#SLL', function () {
    it('Should be a valid instance of an SLL object', function () {
      expect(test1).toBeInstanceOf(SLL);
      expect(test1).toBeInstanceOf(SLL);      
    });
    it('Should initialize "head" as "null"', function () {
      expect(test1.head).toBeNull();
      expect(test2.head).toBeNull();
    });
    it('Should initialize "llen" (list length) as numeric "0"', function () {
      expect(test1.llen).toBe(0);
      expect(test2.llen).toBe(0);
    });
  });
  test1.insertHead(1);
  test2.insertHead(2);
  describe('#insertHead', function () {
    it('Should Add Valid Node Object to list', function () {})
  });
});