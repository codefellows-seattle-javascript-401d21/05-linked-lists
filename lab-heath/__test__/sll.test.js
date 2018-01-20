'use strict';

const SLL = require('../lib/sll.js');
// const ND = require('../lib/nodeBuilder.js')


// let test = new SLL();  need to build something so the test can do the job.

describe('#sll instertHead module', function() {
  // let sampleObj = {value: 14, next:{value: 10, next: null}};
  // let sampleAns = {'head': {'next': null, 'value': {'next': {'next': null, 'value': 10}, 'value': 14}}};
  it('checks to see if this is a object', function() {
    let test = new SLL();
    expect(typeof test.insertHead(990)).toBe('object');
  });
  it('checks to see if nothing is passed in', function() {
    let test = new SLL();
    expect(test.insertHead()).toBe(null);
  });
  it.only('checks to see if i passed in new node, the ', function() {
    let one = new SLL(1);
    one.insertHead(4);
    console.log(one);
    expect(one.insertHead(4).next.value).toBe(4);
  });
});

//insertEnd is complete
describe('#sll insertEnd module', function() {
  it('checks to see if this new node head is set to null', function() {
    let test = new SLL(5);
    test.insertEnd(9);
    console.log(test);
    expect(test.insertEnd(9).next.value).toBe(9);
  });
  it('checks to see if nothing is passed in', function() {
    let test = new SLL(1);
    expect(test.insertEnd()).toBe(null);
  });
  it('checks to see if nothing is passed in is correct', function() {
    let one = new SLL(1);
    one.insertEnd(4);
    console.log(one);
    expect(one.insertEnd(4).next.value).toBe(4);
  });
});

describe('#sll reverseSLL module', function() {
  let sampleObj = {value: 14, next:{value: 10, next: null}};
  let sampleAns = {next: {next: null, value: 14}, value: 10};
  it('checks to see if this is a object', function() {
    let test = new SLL();
    expect(typeof test.reverseSLL({})).toBe('object');
  });
  it('checks to see if nothing is passed in, if not return null', function() {
    let test = new SLL();
    expect(test.reverseSLL()).toBe(undefined);
  });
  it('checks to see if it reverse the SLL to what i need it to be', function() {
    let test = new SLL(1);
    expect(test.reverseSLL(sampleObj)).toEqual(sampleAns);
  });
});

describe('#sll removeSLL module', function() {
  let sampleObj = {head: {value: 15, index: 1, next:{value: 10, index: 2, next:{value: 5, index: 3, next: {value: 1, index: 4, next: null}}}}};
  // let removeItem = {value: 5, next: {value: 1, next: null}}
  // let sampleAns = {next: {next: null, value: 14}, value: 10};
  // it('checks to see if this is a object', function() {
  //   let test = new SLL();
  //   expect(typeof test.removeSLL()).toBe('object');
  // });
  // it('checks to see if nothing is passed in, if not return null', function() {
  //   let test = new SLL();
  //   expect(test.removeSLL()).toBe(null);
  // });
  it('checks to see if it reverse the SLL to what i need it to be', function() {
    let one = new SLL(1);
    let two = new SLL(2);
    let three = new SLL(3);
    let four = new SLL(4);

    // one.insertHead(two);
    console.log(one);
    expect(one.insertHead(two).head.value.value).toBe(2);

    // expect(four.removeSLL(4)).toEqual();
    // expect(one.removeSLL(1)).toEqual();
    // expect(two.removeSLL(2)).toEqual();
    // expect(three.removeSLL(3)).toEqual();

  });
});

// it('checks to see if arr is an array', function() {
//   expect(test.readBook('string')).toBe(null);
// });
// it('checks to see if every array item is a string', function() {
//   expect(test.readBook(['test', 2, 3])).toBe(null);
// });
// it('checks to see if every array item is a string', function(done) {
//   test.readBook(path, (err, data) => {
//     expect(data.length).toBe(3);
//     done();
//   });
// });
// it('checks to see if the code is places in order in the array', function(done) {
//   test.readBook(path, (err, data) => {
//     let array = [];
//     array = [data[0].slice(0, 2), data[1].slice(0, 2), data[2].slice(0, 2)].join();
//     expect('-1,-3,-2').toEqual(array);
//     done();
//   });
// });

// let sample = {value: 1, next: null, head: Node { value: SLL {value: 2, next: null}, next: null}}
