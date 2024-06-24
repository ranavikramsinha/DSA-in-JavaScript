function uniquePaths(m, n, memo = {}) {

    const position = m + "," + n

    if(m < 1  || n < 1){ 
        return 0
    }

    if( m === 1 && n === 1){
        return 1
    }


    if(position in memo){
        return memo[position]
    }

    memo[position] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo)

    return memo[position]
    
}

console.log(uniquePaths(3, 3, memo = {}))
console.log(uniquePaths(3, 7, memo = {}))