'use strict';

const nd = require('../lib/nd');
require('jest');

let one = new nd('beer');
let two = new nd(1337);

describe('node module', () => {
    describe('#node)', () => {
        it('should test if it returns a node', () => {
            expect(one).toBeInstanceOf(nd);
            expect(two).toBeInstanceOf(nd);
        });
        it('should return the value of a new node', () => {
            expect(one.value).toEqual('beer');
            expect(two.value).toEqual(1337);
        });
        it('should initialize node with a value of null', () => {
            expect(one.next).toBeNull();
            expect(two.next).toBeNull();
        });
    });
});