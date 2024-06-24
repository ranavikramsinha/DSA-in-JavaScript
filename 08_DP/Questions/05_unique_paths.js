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

console.log(uniquePaths(3, 3, {}))
console.log(uniquePaths(3, 7, {}))

//* Start (3,3)
//* |
//* +-- (2,3)    +-- (3,2)
//* |            |
//* |            |
//* +-- (1,3)    +-- (2,2)    +-- (3,1)
//* |            |            |
//* |            |            |
//* +-- (0,3)    +-- (1,2)    +-- (2,1)    +-- (3,0)
//*              |            |            |
//*              +-- (0,2)    +-- (1,1)    +-- (2,0)
//*                           |            |
//*                           +-- (0,1)    +-- (1,0)
//*                                        |
//*                                        +-- (0,0)
//* 