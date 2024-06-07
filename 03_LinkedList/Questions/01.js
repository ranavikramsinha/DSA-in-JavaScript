//* Question => https://leetcode.com/problems/reverse-linked-list/description/

class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    insertAtBeginning(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
    
    insertAtLast(data){
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

    traverse(){
        let current = this.head

        let listValues = []

        while(current){
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
list.insertAtBeginning(50)
list.insertAtLast(60)
list.insertAtLast(70)
list.insertAtLast(80)
list.traverse()
list.reverse()
list.traverse()