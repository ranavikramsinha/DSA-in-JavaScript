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

    let table = Array(n+1).fill(Infinity)

    table[0] = 0

    for(const coin of coins){
        for(let i = coin; i <= amount; i++){
            table[i] = Math.min(table[i], table[i - coin] + 1)
        }
    }

    return table[amount] === Infinity? -1: table[amount]
    
}

console.log(minCoin(10, [1,2,5], memo = {})) //* 2