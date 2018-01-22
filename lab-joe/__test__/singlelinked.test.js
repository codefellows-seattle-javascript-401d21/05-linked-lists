'use strict';

const nd = require('../lib/nd');
const sll = require('../lib/sll');



let sll = new SLL();
let nd = new ND();


describe('sll.js module', () => {

  describe('sll methods', () => {
    test('test insert head', done => {
        expect(sll.insertHead(1)).toBe({ head: Node { value: 1, next: null } });
        done();
      });

    test('test insert end', done => {
        expect(sll.insertEnd(1)).toBe({head: Node { value: 1, next: Node { value: 1, next: null } } });
        done();
      });

    test('test reverse', done => {
        expect(sll.reverse()).toBe({head: Node { value: 1, next: Node { value: 1, next: null } } });
        done();
      });

    test('test remove', done => {
        expect(sll.remove(1)).toBe({ head: Node { value: 1, next: null } });
        done();
      });





    });





  });




});