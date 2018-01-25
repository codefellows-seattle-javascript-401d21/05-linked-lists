'use strict';

const SinglyLinkedList = require('../lib/sll');
require('jest');

describe('SLL', () => {
    let list = null;
    it('should check if list is empty', () => {
        expect(list.isEmpty()).toEqual(null);
    });

    it('should create a node at the beginning of the list', (result) => {
        expect(SinglyLinkedList.insertHead(10)).toEqual(10);
        expect(result.next).toEqual(null);
    });
    it('should insert a node at the end of the linked list', (result) => {
        let list = new SinglyLinkedList(10);
        let second = new SinglyLinkedList(20);
        let third = new SinglyLinkedList(30);
      
        list.insertHead(second);
        list.insertHead(third);
        expect(list.insertEnd(40)).toEqual(40);
        expect(result.next).toEqual(null);
    });
    it('should remove a node from the list', () => {
        let list = new SinglyLinkedList(10);
        let second = new SinglyLinkedList(20);
        let third = new SinglyLinkedList(30);

        list.insertHead(second);
        list.insertHead(third);
        expect(list.value).toEqual(10);
        expect(list.next.value).toEqual(20);
        expect(list.next.next.value).toEqual(30);
        expect(list.next.next.next).toEqual(null);
    });
});