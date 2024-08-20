# Linked List Project

This project implements a singly linked list in JavaScript.

## Methods

- `prepend(value)`: Adds a node with the given value at the start of the list.
- `pop()`: Removes the last node from the list and returns its value.
- `removeAt(position)`: Removes a node at the specified position.
- `insertAt(position, value)`: Inserts a node with the given value at the specified position.

## Usage

```js
const LinkedList = require('./LinkedList')

const list = new LinkedList()
list.prepend(10)
list.insertAt(1, 20)
console.log(list.pop()) // Outputs: 20
