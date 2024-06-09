class Node{
    constructor(data, next = null, prev = null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
}

doublyLinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node (data, this.head, null)

    if(this.head){
        this.head.prev = newNode
    }

    this.head = newNode

    if(!this.tail){
        this.tail = newNode
    }
}

doublyLinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node (data, null, this.tail)

    if(this.tail){
        this.tail.next = newNode
    }

    this.tail = newNode

    if(!this.head){
        this.head = newNode
    }
}

doublyLinkedList.prototype.insertAfter = function(prevNode, data){
    if(prevNode === null){
        console.log("Invalid prev node")
    }

    const newNode = new Node (data, prevNode.next, prevNode)

    if(prevNode.next !== null){
        prevNode.next.prev = newNode
    }

    prevNode.next = newNode

    if(newNode.next === null){
        this.tail = newNode
    }
}

doublyLinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        console.log("DLL is empty")
        return
    }

    if(this.head === this.tail){
        this.head = null
        this.tail = null
    }

    else{
        this.head = this.head.next
        this.head.prev = null
    }
}

doublyLinkedList.prototype.deleteLastNode = function(){
    if(!this.tail){
        console.log("DLL is empty")
        return
    }

    if(this.tail === this.head){
        this.tail = null
        this.head = null
    }

    else{
        this.tail = this.tail.prev
        this.tail.next = null
    }
}

doublyLinkedList.prototype.reverse = function(){
    let current = this.head
    let temp = null

    while(current !== null){
        temp = current.prev
        current.prev = current.next
        current.next = temp

        current = current.prev
    }

    temp = this.head
    this.head = this.tail
    this.tail = temp
}

doublyLinkedList.prototype.traverse = function(){
    let current = this.head

    let listValues = []

    while(current){
        listValues.push(current.data) //* add data to node
        current = current.next
    }

    console.log(listValues.join(" --> "))
}

const list = new doublyLinkedList()
list.insertAtBeginning(10)
list.insertAtBeginning(20)
list.insertAtBeginning(30)

// console.log(list.head.data) // 30
// console.log(list.tail.data) // 10
// console.log(list.head.next.data) // 20
// console.log(list.tail.prev.data) // 20

list.insertAtEnd(40)
list.insertAtEnd(50)
list.insertAtEnd(60)
list.insertAfter(list.head, 35)

console.log(list.head.data) // 30
console.log(list.tail.data) // 60
console.log(list.head.next.data) // 35
console.log(list.tail.prev.data) // 50

list.deleteFirstNode()
console.log(list.head.data) // 35

list.deleteLastNode()
console.log(list.tail.data) // 50

list.reverse()

list.traverse()