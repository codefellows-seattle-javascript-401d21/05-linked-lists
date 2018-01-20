'use strict';

//should validate constructor function makes nodes for single linked list

const Nd = require('../lib/nd.js');
// const sll = require('../lib/sll.js');
require('jest');

describe('Node Module', function() {
  describe('#Node Constructor', () => {
    it('should create an object for linked list', () => {
      expect(new Nd('hello')).toEqual({value: 'hello', next: null});
      console.log(new Nd('hello'));
    });
  });
});
