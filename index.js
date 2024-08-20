const LinkedList = require('./LinkedList')

// Crear una nueva lista enlazada
const list = new LinkedList()

// Probar el método prepend
list.prepend(10)
list.prepend(20)
list.prepend(30)

// Probar el método insertAt
list.insertAt(1, 25)

// Probar el método removeAt
list.removeAt(2)

// Probar el método pop
const poppedValue = list.pop()

console.log(`Valor eliminado: ${poppedValue}`)

// Mostrar el estado actual de la lista
let current = list.head
while (current) {
  console.log(current.value)
  current = current.next
}
