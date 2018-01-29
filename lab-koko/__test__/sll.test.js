'use strict';

const SLL = require('../lib/sll.js');

describe ('Solution Module', () => {
  describe ('head', () => {
    let list1 = new SLL;
    it ('should return an empty value if head is empty', () => {
      expect(list1.insertHead()).toEqual({'head': {'next': null, 'value': undefined}});
    });
    it ('should return a the value of head as 3', () => {
      expect(list1.insertHead(3)).toEqual({'head': {'next': {'next': null, 'value': undefined}, 'value': 3}});
    });
  });
  describe ('end', () => {
    let list2 = new SLL;
    it ('should have a value of null when there is no arguemnt', () => {
      expect(list2.insertEnd()).toEqual({'head': {'next': null, 'value': undefined}});
    });
    it ('', () => {
      expect(list2.insertHead(7)).toEqual({'head': {'next': {'next': null, 'value': undefined}, 'value': 7}});
    });
  });
  describe ('remove', () => {
    let list3 = new SLL;

    list3.insertHead(2);
    list3.insertEnd(5);
    list3.insertEnd(7);
    list3.insertEnd(12);
    list3.insertEnd(20);

    // it ('should remove the object at value 7', () => {
    //   expect(list3.remove(7)).toEqual();
    // });
    it ('should require a value to remove', () => {
      expect(list3.remove()).toBeNull();
    });
  });
  describe ('reverse', () => {
    let list4 = new SLL;

    list4.insertHead(2);
    list4.insertEnd(5);
    list4.insertEnd(7);
    list4.insertEnd(12);
    list4.insertEnd(20);

    it ('should return the reverse order of the linked list', () => {
      expect(list4.reverse()).toEqual({'head': {'next': {'next': {'next': {'next': {'next': null, 'value': 2}, 'value': 5}, 'value': 7}, 'value': 12}, 'value': 20}});
    });
  });
});