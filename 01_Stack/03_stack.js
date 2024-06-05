//* linked list-based stack

class Node {
    constructor(value) {
      this.value = value; //* The value stored in the node
      this.next = null;   //* A pointer to the next node in the stack
    }
  }
  
  
  class Stack {
    constructor() {
      this.top = null;    //* Points to the top node of the stack
      this.count = 0;     //* Keeps track of the number of elements in the stack
    }
   
    //** Add an element to the stack
    push(element) {
        let newNode = new Node(element); //* Create a new node with the given element
        newNode.next = this.top;         //* Link the new node to the current top node
        this.top = newNode;              //* Update the top to the new node
        this.count++;                    //* Increment the count of elements
      }    
  
    //** Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
          return "Underflow";            //* If the stack is empty, return an underflow message
        }
        let poppedNode = this.top;       //* Store the current top node
        this.top = this.top.next;        //* Update the top to the next node
        this.count--;                    //* Decrement the count of elements
        return poppedNode.value;         //* Return the value of the popped node
      }    
  
    //** Return the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
          return "No elements in Stack"; //* If the stack is empty, return a message
        }
        return this.top.value;           //* Return the value of the top node
      }    
  
    //** Check if the stack is empty
    isEmpty() {
        return this.top === null;        //* If the top is null, the stack is empty
      }    
  
    //** Return the size of the stack
    size() {
        return this.count;               //* Return the count of elements
      }    
  
    //** Print the stack elements
    printStack() {
        let current = this.top;          //* Start from the top node
        let str = "";                    //* Initialize an empty string
        while (current) {                //* Traverse the stack
          str += current.value + " ";    //* Append the value of each node to the string
          current = current.next;        //* Move to the next node
        }
        return str.trim();               //* Return the string of stack elements
      }
    }
    
  
  //** Usage example
  let stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.printStack()); //** Output: 30 20 10
  console.log(stack.peek());       //** Output: 30
  console.log(stack.pop());        //** Output: 30
  console.log(stack.printStack()); //** Output: 20 10
  console.log(stack)              //** Stack {
                                  //**     top: Node { value: 20, next: Node { value: 10, next: null } },
                                  //**     count: 2
                                  //**    }