class Queue {
    constructor(){
        this.queue = []
    }

    enqueue(data){
        this.queue.push(data)
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.queue.shift()  
    }

    isEmpty(){
        return this.queue.length === 0
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.queue[0]
    }

    size(){
        return this.queue.length
    }

    clear(){
        this.queue = []
    }

    printQueue(){
        let str = ""

        for(let i = 0; i < this.queue.length; i++){
            str += this.queue[i] + "\n"
        }

        return str
    }
}


//* Usage example
let myQueue = new Queue()

myQueue.enqueue(11)
myQueue.enqueue(33)
myQueue.enqueue(55)
myQueue.dequeue()

console.log(myQueue.printQueue())
console.log(myQueue)