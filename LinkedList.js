class Node {
    constructor(value, next = null) {
      this.value = value
      this.next = next
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null
    }
  
    prepend(value) {
      const newNode = new Node(value, this.head)
      this.head = newNode
    }
  
    pop() {
      if (!this.head) return null
  
      if (!this.head.next) {
        const value = this.head.value
        this.head = null
        return value
      }
  
      let current = this.head
      while (current.next.next) {
        current = current.next
      }
  
      const value = current.next.value
      current.next = null
      return value
    }
  
    removeAt(position) {
      if (position === 0) {
        if (this.head) {
          this.head = this.head.next
        }
        return
      }
  
      let current = this.head
      let prev = null
      let index = 0
  
      while (current && index < position) {
        prev = current
        current = current.next
        index++
      }
  
      if (current) {
        prev.next = current.next
      }
    }
  
    insertAt(position, value) {
      if (position === 0) {
        this.prepend(value)
        return
      }
  
      let current = this.head
      let prev = null
      let index = 0
  
      while (current && index < position) {
        prev = current
        current = current.next
        index++
      }
  
      if (prev) {
        const newNode = new Node(value, current)
        prev.next = newNode
      }
    }
  }
  
  module.exports = LinkedList
  