'use strict'

const SLL = require('../lib/sll')

describe('Sll Module', function() {
  describe('#InsertHead', function() {
    let sll = new SLL()
    sll.insertHead('n1')
    console.log(sll)
    it('should return the object at the head and next as null', function() {
      expect(sll.head.value).toEqual('n1'),
      expect(sll.head.next).toEqual(null)
    })
  })
})
