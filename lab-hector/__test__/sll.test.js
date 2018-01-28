'use strict';

const SLL = require('../lib/sll.js');
const ND = require('../lib/ndB.js');


describe('instertHead function', function () {
  //these are complete
  it('test to see if the node was created', function () {
    let test = new SLL();
    test.insertHead(12);
    expect(test.head).toBeInstanceOf(ND);
  });
  it('checks to see if nothing is passed in', function () {
    let test = new SLL();
    expect(test.insertHead()).toBe(null);
  });
});

//insertEnd is complete
describe('insertEnd function', function () {
  it('checks to see if node was made', function () {
    let test = new SLL();
    test.insertEnd(12);
    expect(test.head).toBeInstanceOf(ND);
  });
  it('checks to see if nothing is passed in', function () {
    let test = new SLL();
    expect(test.insertEnd()).toBe(null);
  });

});

describe('reverseSLL function', function () {
  it('test to see if it reverse only one node SLL', function () {
    let test = new SLL();
    test.insertHead(10);
    test.insertEnd(20);
    expect(test.reverseSLL()).not.toBeNull();
  });
 
  it('checks to see if it reverse the SLL to what i need it to be', function () {
    let one = new SLL();
    one.insertHead(10);
    one.insertHead(20);
    one.reverseSLL();
    expect(one.head.value).toBe(10);
  });
});

describe('removeSLL function', function () {
  it('checks to see if nothing is passed in, if not return null', function () {
    let test = new SLL();
    test.insertHead(1);
    expect(test.removeSLL()).toBe(null);
  });
  it('checks to see if nothing is passed in, if not return null', function () {
    let test = new SLL();
    expect(test.removeSLL('pizza')).toBe(null);
  });
  it('checks to see if it reverse the SLL to what i need it to be', function () {
    let one = new SLL();
    one.insertHead(10);
    one.insertEnd(20);
    one.insertEnd(30);
    one.insertEnd(40);
    expect(one.removeSLL(1).head.value).toBe(20);
  });
});

describe('nodeBuilder function', function () {
  it('checks to see if nothing is passed in, if not return null', function () {
    let test = new ND();
    expect(test).toEqual({ 'next': null, 'value': undefined });
  });
  
  it('checks to see if an array will pass in', function () {
    let test = new ND([10, 20, 30]);
    expect(test.value).toEqual([10, 20, 30]);
  });
});