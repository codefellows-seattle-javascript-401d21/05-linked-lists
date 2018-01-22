'use strict';

const SLL = require('../lib/sll.js');
const ND = require('../lib/nodeBuilder.js')


describe('instertHead function', function() {
  //these are complete
  it('checks to see if the node was made', function() {
    let test = new SLL();
    test.insertHead(9);
    expect(test.head).toBeInstanceOf(ND);
  });
  it('checks to see if nothing is passed in', function() {
    let test = new SLL();
    expect(test.insertHead()).toBe(null);
  });
  it('checks to see if 5 was passed in LL', function() {
    let test = new SLL();
    test.insertHead(4);
    expect(test.insertHead(5).head.value).toBe(5);
  });
});

//insertEnd is complete
describe('insertEnd function', function() {
  it('checks to see if node was made', function() {
    let test = new SLL();
    test.insertEnd(9);
    expect(test.head).toBeInstanceOf(ND);
  });
  it('checks to see if nothing is passed in', function() {
    let test = new SLL();
    expect(test.insertEnd()).toBe(null);
  });
  it('checks to see if nothing is passed in is correct', function() {
    let one = new SLL();
    one.insertEnd(4);
    one.insertEnd(5);
    expect(one.insertEnd(6).head.next.next.value).toBe(6);
  });
});

describe('reverseSLL function', function() {
  it('test to see if it reverse only one node SLL', function() {
    let test = new SLL();
    test.insertHead(1);
    test.insertEnd(5);
    expect(test.reverseSLL()).not.toBeNull();
  });
  it('test to see if it reverse only one node SLL', function() {
    let one = new SLL();
    one.insertHead(4);
    one.reverseSLL();
    expect(one.reverseSLL().head.value).toBe(4);
  });
  it('checks to see if it reverse the SLL to what i need it to be', function() {
    let one = new SLL();
    one.insertHead(4);
    one.insertHead(5);
    one.reverseSLL();
    expect(one.head.value).toBe(4);
  });
});

describe('removeNode function', function() {
  it('checks to see if nothing is passed in, if not return null', function() {
    let test = new SLL();
    test.insertHead(1);
    expect(test.removeNode()).toBe(null);
  });
  it('checks to see if nothing is passed in, if not return null', function() {
    let test = new SLL();
    expect(test.removeNode('pizza')).toBe(null);
  });
  it('checks to see if it reverse the SLL to what i need it to be', function() {
    let one = new SLL();
    one.insertHead(1);
    one.insertEnd(5);
    one.insertEnd(9);
    one.insertEnd(12);
    expect(one.removeNode(1).head.value).toBe(5);
  });
});

describe('nodeBuilder function', function() {
  it('checks to see if nothing is passed in, if not return null', function() {
    let test = new ND();
    expect(test).toEqual({'next': null, 'value': undefined});
  });
  it('checks to see if the node has the value that was passed in', function() {
    let test = new ND(1);
    expect(test).toEqual({'next': null, 'value': 1});
  });
  it('checks to see if an array will pass in', function() {
    let test = new ND([1,3,4]);
    expect(test.value).toEqual([1, 3, 4]);
  });
});
