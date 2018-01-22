
'use strict';

const Nd = require('../lib/nd');

describe('#Node', () =>{

  it('Should create new node object', () => {
    let node = new Nd('new');
    expect(node).toBeInstanceOf(Object);
  });

  it('Should create new node with a value', () => {
    let node = new Nd(7);
    expect(node.value).toEqual(7);
  });

  it('Should create new node with a value of null if the value is undefined', () => {
    let node = new Nd();
    expect(node.value).toBeNull();
  });

});