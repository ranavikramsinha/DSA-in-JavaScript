function fibMemo(n, memo = {}){
    
    if(n in memo){
        return memo[n]
    }
    
    if(n <= 1){
        return n
    }

    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo)

    return memo[n]
}

console.log(fibMemo(6))

function tribMemo(n, memo={}){

    if(n in memo){
        return memo[n]
    }

    if(n === 0){
        return 0
    }

    if(n === 1 || n === 2){
        return 1
    }

    memo[n] = tribMemo(n-1, memo) + tribMemo(n-2, memo) + tribMemo(n-3, memo)

    return memo[n]
}

console.log(tribMemo(25))