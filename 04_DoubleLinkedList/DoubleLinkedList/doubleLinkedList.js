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

doublyLinkedList. prototype.insertAtBeginning = function(data){
    const newNode = new Node (data, this.head, null)

    if(this.head !== null){
        this.head.prev = newNode
    }

    this.head = newNode
    
    if(this.tail === null){
        this.tail = newNode
    }
}

doublyLinkedList.prototype.insertAtLast = function(data){
    const newNode = new Node(data, null, this.tail)

    if(this.tail !== null){
        this.tail.next = newNode
    }

    this.tail = newNode

    if(this.head === null){
        this.head = newNode
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

list.insertAtLast(40)
list.insertAtLast(50)
list.insertAtLast(60)

// console.log(list.head.data) // 30
// console.log(list.tail.data) // 60
// console.log(list.head.next.data) // 20
// console.log(list.tail.prev.data) // 50