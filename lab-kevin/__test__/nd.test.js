
'use strict';

const Nd = require('../lib/nd');

describe('#Node', () =>{
  it('Should create new node', () => {
    let node = new Nd(7);
    expect(node).toBeInstanceOf(Object);
  });
});