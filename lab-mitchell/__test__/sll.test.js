'use strict';

const SLL = require('../lib/sll');

describe('sll.js', () => {
  let test = new SLL();
  it('new SLL constructor should create a new head node, with no value or next', (done) => {
    expect(test.head).not.toBe(null);
    done();
  });

  it('should insert something in the head area oyoyooyaoy', (done) => {
    let node = test.insertHead(5);
    console.log(node);
    expect(node).toEqual({head: { value: 5, next: null }});
    done();
  });

  // it('should ', (done) => {
  //   expect(test.insertEnd(10)).toEqual(null);
  //   done();
  // });

  // it('should ', (done) => {
  //   done();
  // });
});