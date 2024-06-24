//* Memoization
function minCoin(amount, coins, memo = {}){
    if(amount in memo) {
        return memo[amount]
    }

    if(amount === 0){
        return 0
    }

    if(amount < 0){
        return -1
    }

    let min = Infinity

    for(const coin of coins){
        const result = minCoin(amount-coin, coins, memo)

        if(result !== -1){
            min = Math.min(min, result + 1)
        }
    }

    memo[amount] = min === Infinity? -1 : min

    return memo[amount]
}

console.log(minCoin(11, [1,2,5], memo = {})) //* 3


//* Tabulation
function minCoinTab(amount, coins){

    if(amount === 0) return 0

    if(amount < 0) return -1

    let table = Array(amount + 1).fill(Infinity)

    table[0] = 0

    for(const coin of coins){
        for(let i = coin; i <= amount; i++){
            table[i] = Math.min(table[i], table[i - coin] + 1)
        }
    }

    return table[amount] === Infinity? -1: table[amount]
    
}

console.log(minCoinTab(10, [1,2,5], memo = {})) //* 2

//* Memoization
function maxCoin(amount, coins, memo = {}){
    if(amount in memo) {
        return memo[amount]
    }

    if(amount === 0){
        return 0
    }

    if(amount < 0){
        return -1
    }

    let max = 0

    for(const coin of coins){
        const result = maxCoin(amount-coin, coins, memo)

        if(result !== -1){
            max = Math.max(max, result + 1)
        }
    }

    memo[amount] = max

    return memo[amount]
}

console.log(maxCoin(11, [1,2,5], {})) //* 11


//* Tabulation
function maxCoinTab(amount, coins){

    if(amount === 0) return 0

    if(amount < 0) return -1

    let table = Array(amount + 1).fill(0)

    table[0] = 0

    for(const coin of coins){
        for(let i = coin; i <= amount; i++){
            table[i] = Math.max(table[i], table[i - coin] + 1)
        }
    }

    return table[amount]
    
}

console.log(maxCoinTab(10, [1,2,5], {})) //* 10