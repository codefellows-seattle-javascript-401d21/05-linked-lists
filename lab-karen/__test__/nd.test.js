'use strict';

//should validate constructor function makes nodes for single linked list

const Nd = require('../lib/nd.js');
require('jest');

describe('Node Module', function() {

    it('should return undefined value if no argument passed', () => {
      expect(new Nd()).toEqual({value: undefined, next: null});
    });

    it('should return an object with a next value of null', () => {
      expect(new Nd(3)).toEqual({value: 1, next: null});
    });
  });
});
