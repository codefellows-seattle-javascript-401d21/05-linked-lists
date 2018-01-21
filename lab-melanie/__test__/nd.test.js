'use strict';

//should validate constructor function makes nodes for single linked list

const Nd = require('../lib/nd.js');
// const sll = require('../lib/sll.js');
require('jest');

describe('Node Module', function() {
  describe('#Node Constructor', () => {
    it('should create an object for linked list', () => {
      expect(new Nd('hello')).toEqual({value: 'hello', next: null});
    });
    it('should return undefined value if no argument passed', () => {
      expect(new Nd()).toEqual({value: undefined, next: null});
    });
    it('should return an object with a next value of null', () => {
      expect(new Nd(1)).toEqual({value: 1, next: null});
    });
  });
});
