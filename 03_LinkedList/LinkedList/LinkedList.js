class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null //* The head of the list initially null
    }
}

LinkedList.prototype.insertAtBeginning = function(data){
    const newNode = newNode(data)
    newNode.next = this.head //* Correctly set the new node next to the current head
    this.head = newNode //* add the newNode to the head
}

LinkedList.prototype.insertAtLast = function(data){
    const newNode = newNode(data)

    if(!this.head){
        this.head = newNode
        return
    }

    let last = this.head

    while(last.next){
        last = last.next
    }

    last.next = newNode
}

LinkedList.prototype.insertAtAfter = function(prevNode, data){
    if(!prevNode){
        console.log("The given prev node cannot be null")
    }

    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
}

LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        console.log(`List is empty (nothing has to delete)`)
        return
    }
    this.head = this.head.next
}

LinkedList.prototype.deleteLastNode = function(){
    if(!this.head){
        console.log(`List is empty (nothing has to delete)`)
        return
    }  
    
    if(!this.head.next){
        this.head = null //* if there is only one node
    }

    let secondLast = this.head

    while(secondLast.next.next){
        secondLast = secondLast.next
    }

    secondLast.next = null

}