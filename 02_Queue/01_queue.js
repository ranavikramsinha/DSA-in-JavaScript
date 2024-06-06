class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(element){
        this.queue.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return "Underflow"
        }

        return this.queue.shift()
    }

    isEmpty(){
        return this.size() === 0
    }

    size(){
        return this.queue.length
    }

    front(){
        if(this.isEmpty()){
            return "No Elements in Queue"
        }

        return this.queue[0]
    }

    printQueue(){
        let queueString = ""

        for(let i = 0; i < this.size(); i++){
            queueString += this.queue[i] + " "
        }

        return queueString
    }
}

const myQueue = new Queue()

myQueue.enqueue(11)
myQueue.enqueue(22)
myQueue.enqueue(33)
myQueue.enqueue(44)
myQueue.enqueue(55)
myQueue.enqueue(66)

console.log(myQueue.front())
console.log(myQueue)
console.log(myQueue.printQueue())

myQueue.dequeue()

console.log(myQueue)
console.log(myQueue.printQueue())

console.log(myQueue.front())

myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
// myQueue.dequeue()

console.log(myQueue.dequeue()) //* 66 is dequeue
console.log(myQueue.front())

console.log(myQueue.dequeue())
console.log(myQueue.front())