'use strict';

//should validate constructor function makes nodes for single linked list

const SLL = require('../lib/sll.js');
require('jest');

describe('SLL Module', function() {
  describe ('#SLL constructor', () => {
    it('should return head = null when called', () => {
      expect(new SLL()).toEqual({head: null});
    });
  });

  describe ('#insertHead function', () => {
    it('should insert a node at the beginning of the linked list')
  });

  describe ('#insertEnd function', () => {
    it('should add a node at the end of the linked list')
  });

  describe ('#reverse function', () => {
      it('should reverse the order of the linked list')
  });

  describe ('#remove function', () => {
      it('should remove a node at the given offset of the linked list')
  });

  describe ('#findNthNode function', () => {
      it('should return the node from the given position')
  });

    });
  });
});
