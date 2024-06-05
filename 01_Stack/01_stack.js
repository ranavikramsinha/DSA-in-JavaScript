//* Built in methods in JS

class Stack {
    constructor() {
      this.items = []
    }
  
    //* Add an element to the stack
    push(element) {
      this.items.push(element)
    }
  
    //* Remove and return the top element of the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow" //* Return underflow when called on an empty stack
      }
      return this.items.pop()
    }
  
    //* Return the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "No elements in Stack"
      }
      return this.items[this.items.length - 1]
    }
  
    //* Check if the stack is empty
    isEmpty() {
      return this.items.length === 0
    }
  
    //* Return the size of the stack
    size() {
      return this.items.length
    }
  
    //* Print the stack elements
    printStack() {
      let str = ""
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " "
      }
      return str
    }
  }
  
  //* Usage example
  let stack = new Stack()
  stack.push(10)
  stack.push(20)
  stack.push(30)
  console.log(stack.printStack()) //* Output: 10 20 30
  console.log(stack.peek())       //* Output: 30
  console.log(stack.pop())        //* Output: 30
  console.log(stack.printStack()) //* Output: 10 20
  console.log(stack)              //* Stack { items: [ 10, 20 ] }