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
    const newNode = new Node(data)
    newNode.next = this.head //* Correctly set the new node next to the current head
    this.head = newNode //* add the newNode to the head
}

LinkedList.prototype.insertAtLast = function(data){
    const newNode = new Node(data)

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
        return
    }

    let secondLast = this.head

    while(secondLast.next.next){
        secondLast = secondLast.next
    }

    secondLast.next = null

}

LinkedList.prototype.deleteByKey = function(key){
    if(!this.head){
        console.log("List is empty")
        return
    }

    if(this.head.data === key){
        this.head = this.head.next
        return
    }

    let current = this.head

    while(current.next !== null){
        if(current.next.data === key){
            current.next = current.next.next
            return
        }

        current = current.next //* move to next node
    }

    console.log(`No node found with key: ${key}`)
}

LinkedList.prototype.search = function(key){
    let current = this.head

    while(current){
        if(current.data === key){
            return true
        }

        current = current.next
    }

    return false
}


LinkedList.prototype.traverse = function(){
    let current = this.head

    let listValues = []

    while(current){
        listValues.push(current.data) //* add data to node
        current = current.next
    }

    console.log(listValues.join(" --> "))
}

let list = new LinkedList()
list.insertAtBeginning(10)
list.insertAtLast(20)
list.insertAtAfter(list.head, 15)
list.traverse()
console.log(list.search(15)) //* true
list.deleteByKey(15)
list.traverse()
list.deleteFirstNode()
list.traverse()
list.deleteLastNode()
list.traverse()