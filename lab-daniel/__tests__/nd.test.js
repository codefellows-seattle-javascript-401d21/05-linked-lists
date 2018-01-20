'use strict';

let nd = require('../lib/nd');
require('jest');

describe('Node Constructor', function () {
  describe('#node', function(){
    expect(new nd(13)).toEqual({value: 13, next: null});
    expect(new nd('dog')).toEqual({value: 'dog', next: null});
  });
});