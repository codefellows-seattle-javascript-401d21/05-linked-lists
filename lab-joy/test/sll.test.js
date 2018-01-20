'use strict';

require('jest');
const sll = require('../lib/sll');

describe('#SLL', () => {
    let list = new sll();

    it('should be able to create an instance of the SLL class', () => {
        expect(list instanceof sll).toBe(true);
    });

    it('should be able to insert a new node at the head', () => {
        list.insertHead(1);

        expect(list.head.value).toBe(1);
        expect(list.head.next).toBeNull();
        expect(list.tail.value).toBe(1);
    });

    it('should be able to insert a new node at the tail', () => {
        list.insertEnd(2);

        expect(list.head.next.value).toBe(2);
        expect(list.head.next.next).toBeNull();
        expect(list.tail.value).toBe(2);
    });

    it('should be able to reverse the list', () => {
        list.insertEnd(3);
        list.insertEnd(4);
        list.reverseList();

        expect(list.head.value).toBe(4);
        expect(list.head.next).not.toBeNull();
        expect(list.head.next.value).toBe(3);
        expect (list.head.next.next).not.toBeNull();
        expect(list.head.next.next.value).toBe(2);
        expect(list.head.next.next.next).not.toBeNull();
        expect(list.head.next.next.next.value).toBe(1);
        expect(list.head.next.next.next.next).toBeNull();
        expect(list.tail.value).toBe(1);
    });

    it('should be able to remove the nth node from the head', () => {
        list.reverseList(); // reversing it back to right order - list is 1, 2, 3, 4
        list.remove(2); // remove 2nd node

        expect(list.head.next.value).toBe(3);

        list.insertEnd(5);
        list.insertEnd(6); // list is 1, 3, 4, 5, 6
        list.remove(3); // remove 4 so that list is 1, 3, 5, 6

        expect(list.head.next.value).toBe(3);
        expect(list.head.next.next.value).toBe(5);
        expect(list.tail.value).toBe(6);
    });

    it('should be able to find the nth node from the end', () => {
        list.insertEnd(7); // list is 1, 3, 5, 6, 7

        expect(list.findNthNodeFromEnd(2).value).toBe(6);

        list.insertEnd(8);
        list.insertEnd(9); // list is 1, 3, 5, 6, 7, 8, 9

        expect(list.findNthNodeFromEnd(4).value).toBe(6);
        expect(list.findNthNodeFromEnd(7).value).toBe(1);
        expect(list.findNthNodeFromEnd(9)).toBeNull();
    });
});