//* All methods directly within the class definition using the ES6 class syntax

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertAtBeginning(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    insertAtLast(data) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            return
        }

        let last = this.head

        while (last.next) {
            last = last.next
        }

        last.next = newNode
    }

    insertAfter(prevNode, data) {
        if (!prevNode) {
            console.log("The given prev node cannot be null")
            return
        }

        const newNode = new Node(data, prevNode.next)
        prevNode.next = newNode
    }

    deleteFirstNode() {
        if (!this.head) {
            console.log("List is empty (nothing to delete)")
            return
        }
        this.head = this.head.next
    }

    deleteLastNode() {
        if (!this.head) {
            console.log("List is empty (nothing to delete)")
            return
        }

        if (!this.head.next) {
            this.head = null // if there is only one node
            return
        }

        let secondLast = this.head

        while (secondLast.next.next) {
            secondLast = secondLast.next
        }

        secondLast.next = null
    }

    deleteByKey(key) {
        if (!this.head) {
            console.log("List is empty")
            return
        }

        if (this.head.data === key) {
            this.head = this.head.next
            return
        }

        let current = this.head

        while (current.next !== null) {
            if (current.next.data === key) {
                current.next = current.next.next
                return
            }

            current = current.next // move to next node
        }

        console.log(`No node found with key: ${key}`)
    }

    search(key) {
        let current = this.head

        while (current) {
            if (current.data === key) {
                return true
            }

            current = current.next
        }

        return false
    }

    traverse() {
        let current = this.head

        let listValues = []

        while (current) {
            listValues.push(current.data)
            current = current.next
        }

        console.log(listValues.join(" --> "))
    }

    reverse(){
        if(!this.head){
            console.log("List is empty")
            return
        }
    
        let current = this.head
        let prev = null
        let next = null
    
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
    
        this.head = prev
    }
}


let list = new LinkedList()
list.insertAtBeginning(10)
list.insertAtLast(20)
list.insertAfter(list.head, 15)
list.traverse()
list.reverse()
list.traverse()
list.reverse()
list.traverse()
console.log(list.search(15))
list.deleteByKey(15)
list.traverse()
list.deleteFirstNode()
list.traverse()
list.deleteLastNode()
list.traverse()
