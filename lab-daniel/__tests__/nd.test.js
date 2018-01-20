'use strict';

let Node = require('../lib/nd');
require('jest');

let test1 = new Node(13), test2 = new Node('dog');

describe('Node Constructor', function () {
  describe('#node', function () {
    it('returns an instance of a Node', function () {
      expect(test1).toBeInstanceOf(Node);
      expect(test2).toBeInstanceOf(Node);
    });
    it('should return valid Node objects with number inputs', function () {
      expect(test1.value).toEqual(13);
      expect(test2.value).toEqual('dog');
    });
    it('should initialize each node with a next of "null"', function () {
      expect(test1.next).toBeNull();
      expect(test2.next).toBeNull();
    });
  });
});