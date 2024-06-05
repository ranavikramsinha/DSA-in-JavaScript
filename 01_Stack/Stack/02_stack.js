class Stack {
    constructor() {
        this.stack = []
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            console.log("Empty stack")
        }
        return this.stack.pop()
    }

    peek(){
        if(this.isEmpty()){
            console.log("Empty stack")
        }
        return this.stack[this.size() - 1] //* another method => return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        return this.size() === 0 //* another method => return this.stack.length === 0
    }

    size(){
        return this.stack.length
    }

    clear(){
        return this.stack = []
    }

    contains(element){
        return this.stack.includes(element)
    }

    reverse(){
        return this.stack.reverse()
    }

    printStack(){
        let str = ""

        for(let i = 0; i < this.stack.length; i++){
            str += this.stack[i] + " "
        }

        return str
    }

}

let myStack = new Stack()

myStack.push(55)
myStack.push(66)
myStack.push(77)
myStack.push(88)
myStack.push(99)
myStack.push(100)

myStack.pop()

console.log(myStack.peek())
console.log(myStack.isEmpty())
console.log(myStack.size())
console.log(myStack.contains(77))
console.log(myStack.contains(33))
console.log(myStack.printStack())
console.log(myStack)
console.log(myStack.reverse())
console.log(myStack)
console.log(myStack.clear())