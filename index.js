const LinkedList = require('./LinkedList')

const list = new LinkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)

list.insertAt(1, 25)

list.removeAt(2)

const poppedValue = list.pop()
console.log(`Eliminated value: ${poppedValue}`)

function printList(head) {
  if (!head) {
    console.log('List is empty')
    return
  }
  let current = head;
  console.log('List:');
  while (current) {
    console.log(current.value)
    current = current.next
  }
}

printList(list.head)