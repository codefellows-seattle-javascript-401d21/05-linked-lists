'use strict';

const SLL = require('../lib/sll');

describe('sll.js', () => {
  it('new SLL constructor should create a new head node, with no value or next', (done) => {
    let head = new SLL();
    expect(head.head).toEqual(null);
    expect(head.value).toEqual(undefined);
    expect(head.next).toEqual(undefined);
    done();
  });

  it('should ', (done) => {
    let node = new SLL();
    node.append(new SLL())

    expect(node.head).toEqual(null);
    done();
  });

  it('should ', (done) => {
    let node = new SLL();
    expect(node.head).toEqual(null);
    done();
  });

  it('should ', (done) => {
    let node = new SLL();
    expect(node.head).toEqual(null);
    done();
  });
});