'use strict';

const Node = require('../lib/nd');

describe('Node Module', () => {
  describe('#Node', () => {
    it('should return back a node object when the constructor is called', () => {
      expect(new Node()).toBeInstanceOf(Node);
    });

    it('should set the value property of the Node to the argument provided', () => {
      expect(new Node('foo').value).toBe('foo')
      expect(new Node(100).value).toBe(100);
    });

    it('should set the `value` variable to undefined if one is not provided', () => {
      expect(new Node().value).toBe(undefined);
    });
  });
});

