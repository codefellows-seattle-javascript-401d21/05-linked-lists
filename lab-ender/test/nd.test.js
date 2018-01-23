'use strict';

const Node = require('../lib/nd');
require('jest');

describe(`nd`, function() {
  describe(`constructor()`, () => {
    const testNode = new Node(2);
    it(`should return an instance of nd`, () => {
      expect(testNode).toBeInstanceOf(Node);
    });
    it(`should have .value be input value`, () => {
      expect(testNode.value).toBe(2);
    });
    it(`should have .next be null`, () => {
      expect(testNode.next).toBeNull();
    })
  });
});
