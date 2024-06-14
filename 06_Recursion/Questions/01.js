//* fibonacci

function fib(value){
    
    let n0 = 0
    let n1 = 1

    for(let i = 0; i < value; i++){

        temp = n0 + n1
        n0 = n1
        n1 = temp
    }

    return n0
}

function recursiveFib(value){

    if(value <= 1){
        return value
    }

    return (recursiveFib(value-1) + recursiveFib(value-2))
}

console.log(fib(6))
console.log(recursiveFib(8))