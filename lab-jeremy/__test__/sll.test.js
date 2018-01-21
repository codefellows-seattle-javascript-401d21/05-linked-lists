'use strict';

const sll = require('../lib/sll.js');

describe('It should: return a head', function() { // head only with constructor
  it('It should: return a head', function() {
      expect(new sll()).toEqual({head: null});
    })
});

describe('It should: return a head and one value', function() { // head with one val from head
    it('It should: return a head and one value', function() {
        expect(new sll().insertHead(2)).toEqual({"head": {"next": null, "value": 2}});
    })
});

describe('It should: return a head and one value', function() { // head with one val from the end
    it('It should: return a head and one value', function() {
        expect(new sll().insertEnd(2)).toEqual({"head": {"next": null, "value": 2}});
    })
});