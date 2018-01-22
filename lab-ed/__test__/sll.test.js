'use strict'

const SLL = require('../lib/sll')

describe('Sll Module', function() {
  describe('#InsertHead', function() {
    let sll = new SLL()
    it('should return an empty object', function() {
      expect(sll).toBeInstanceOf(SLL)
    })
    sll = new SLL()
    sll.insertHead('n1')
    sll.insertHead('n2')
    it('should return the object at the head, the next object with a value, and the last as null', function() {
      expect(sll.head.value).toEqual('n2'),
      expect(sll.head.next.value).toEqual('n1'),
      expect(sll.head.next.next).toEqual(null)
    })
  })

  describe('#InsertEnd', function() {
    let sll = new SLL()
    sll.insertHead('n1')
    sll.insertHead('n2')
    sll.insertEnd('end')
    it('should return the object at the end, the next object with a value, and the last as null', function() {
      expect(sll.head.value).toEqual('n2'),
      expect(sll.head.next.next.value).toEqual('end'),
      expect(sll.head.next.next.next).toEqual(null)
    })
  })

  describe('#remove', function() {
    let sll = new SLL()
    sll.insertHead('n1')
    sll.insertHead('n2')
    sll.insertHead('n3')
    sll.remove(2)
    it('should remove the n2 object', function() {
      expect(sll.head.next.value).toEqual('n1') 
    })
  })
  describe('#remove', function() {
    let sll = new SLL()
    sll.insertHead('n1')
    sll.insertHead('n2')
    sll.remove(1)
    it('should remove the n2 object at head', function() {
      expect(sll.head.value).toEqual('n1')
    })
  })
  describe('#remove', function() {
    let sll = new SLL()
    it('should return null for no argument passed', function() {
      expect(sll.remove()).toBe(null)  
    })
  })
  describe('#remove', function() {
    let sll = new SLL()
    sll.insertHead('n1')
    sll.insertHead('n2')
    it('should return null because offset starts at 1', function() {
      expect(sll.remove(0)).toEqual(null)
    })
  })
  describe('#reverse', function() {
    let sll = new SLL()
    sll.insertHead('n1')
    sll.insertEnd('n2')
    sll.insertEnd('n3')
    sll.reverse()
    it('should move n3 from end to head', function() {
      expect(sll.head.value).toEqual('n3') 
    })
    it('should move n1 from head to end', function() {
      expect(sll.head.next.next.value).toEqual('n1') 
    })
    describe('#reverse', function() {
      let sll = new SLL()
      sll.insertHead('n1')
      it('should return null if nothing to reverse', function() {
        expect(sll.reverse()).toEqual(null)
      })
    })
  })
})

