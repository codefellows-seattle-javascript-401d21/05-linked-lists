'use strict';

const nd = require('../lib/nd');
const sll = require('../lib/sll');
require('jest');

describe('SLL', () => {
    describe('#sll', () => {
        let list = new sll;
                
        it('should check if list is empty', () => {
            expect(list.head).toBeNull();
        });
        it('should create and instance of sll', () => {
            expect(list).toBeInstanceOf(sll);
        });
    });
    describe('#insertHead', () => {
        let list = new sll;
        
        it('should create a node at the beginning of the list', () => {
            list.insertHead(10);
            expect(list.head.value).toEqual(10);
        });
    });
    describe('#insertEnd', () => {
        let list = new sll;
        let second = new nd(20);
        let third = new nd(30);
        let fourth = new nd(40);

        it('should check length of list after adding new nodes', () => {
            list.insertHead(10);
            list.insertEnd(second);
            list.insertEnd(third);
            list.insertEnd(fourth);
            expect(list.length).toEqual(4);
            expect(list.head.next.value).toEqual(second);
        });
    });
    describe('#reverse', () => {
        let list = new sll;
        let second = new nd(20);
        let third = new nd(30);
        let fourth = new nd(40);

        list.insertHead(10);
        list.insertEnd(second);
        list.insertEnd(third);
        list.insertEnd(fourth);

        it('should move the head node to the last position in the list', () => {
            expect(list.reverse().head.value).toEqual(10);            
        });
    });
    describe('#remove', () => {
        let list = new sll;
        let second = new nd(20);
        let third = new nd(30);
        let fourth = new nd(40);

        list.insertHead(10);
        list.insertEnd(second);
        list.insertEnd(third);
        list.insertEnd(fourth);
        
        it('should remove a node', () => {
            expect(list.remove(4).length).toBe(3);
        });
    });
});