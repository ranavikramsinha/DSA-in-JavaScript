

class Node {
    constructor(value) {
      this.value = value; //* The data held by the node
      this.next = null; //* Reference to the next node, initially null
    }
  }  

class LinkedList {
    constructor() {
      this.head = null; //* The head of the list, initially null
    }
  
    //* Method to add a new node to the start of the list
    insertAtStart(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    //* Method to add a new node to the end of the list
    insertAtEnd(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    //* Method to add a new node at a given position (0-based index)
    insertAtPosition(value, position) {
      if (position < 0) return;
  
      const newNode = new Node(value);
  
      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      let previous = null;
      let index = 0;
  
      while (current && index < position) {
        previous = current;
        current = current.next;
        index++;
      }
  
      if (previous) {
        previous.next = newNode;
        newNode.next = current;
      }
    }
  
    //* Method to delete the first node of the list
    deleteFirstNode() {
      if (!this.head) return;
  
      this.head = this.head.next;
    }
  
    //* Method to delete the last node of the list
    deleteLastNode() {
      if (!this.head) return;
  
      if (!this.head.next) {
        this.head = null;
        return;
      }
  
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
  
    //* Method to display the list
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  //* Usage example
  
  const list = new LinkedList();
  list.insertAtStart("Clue 3: Dig near the ancient well.");
  list.insertAtStart("Clue 2: Look under the big rock.");
  list.insertAtStart("Clue 1: Go to the old oak tree.");
  list.insertAtEnd("Congratulations! You've found the treasure.");
  list.insertAtPosition("Clue 1.5: Check the old barn.", 1);
  
  console.log("Initial List:");
  list.printList();
  
  list.deleteFirstNode();
  console.log("\nList after deleting the first node:");
  list.printList();
  
  list.deleteLastNode();
  console.log("\nList after deleting the last node:");
  list.printList();
  