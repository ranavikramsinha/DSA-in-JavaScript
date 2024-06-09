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