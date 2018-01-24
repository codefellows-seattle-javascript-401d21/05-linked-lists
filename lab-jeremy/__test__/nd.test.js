'use strict';

const nd = require('../lib/nd.js');

describe('It should: return a node', function() { // node only with constructor
  it('It should: return a node', function() {
      expect(new nd(2)).toEqual({value: 2, next: null});
    })
});

describe('It should: return a node', function() { // node only with constructor (word value)
    it('It should: return a node', function() {
        expect(new nd('hello world')).toEqual({value: 'hello world', next: null});
      })
  });

describe('It should: return a node', function() { // throw an error
    it('It should: return a node', function() {
        function throwMyError () {
            new nd();
        }

        expect(throwMyError()).toThrowError('Not a valid value');
      })
  });

