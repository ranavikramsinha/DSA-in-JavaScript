function fibTabulation(n){

    if(n <= 1){
        return n
    }

    const table = Array(n+1).fill(0)

    table[1] = 1

    for(let i = 2; i <= n; i++){
        table[i] = table[i-1] + table[i-2]
    }

    return table[n]
}

console.log(fibTabulation(6))


function tribTabulation(n){

    if(n === 0){
        return 0
    }

    if(n === 1 || n === 2){
        return 1
    }

    const table = Array(n+1).fill(0)

    table[1] = 1
    table[2] = 1

    for(let i = 3; i <= n; i++){
        table[i] = table[i-1] + table[i-2] + table[i-3]
    }

    return table[n]
}

console.log(tribTabulation(25))