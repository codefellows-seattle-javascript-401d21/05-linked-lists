'use strict'

const SLL = require('../lib/sll')

describe('Sll Module', function() {
  describe('#InsertHead', function() {
    let sll = new SLL()
    console.log(sll)
    it('should return an empty object', function() {
      expect(sll).toBeInstanceOf(SLL)
    })
    sll = new SLL()
    sll.insertHead('n1')
    sll.insertHead('n2')
    console.log(sll)
    it('should return the object at the head, the next object with a value, and the last as null', function() {
      expect(sll.head.value).toEqual('n2'),
      expect(sll.head.next.value).toEqual('n1'),
      expect(sll.head.next.next).toEqual(null)
    })
  })
})
