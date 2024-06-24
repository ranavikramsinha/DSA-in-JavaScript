function sumAvailable(amount, numbers, memo = {}){
    if(amount in memo){
        return memo[amount]
    }

    if(amount === 0){
        return true
    }

    if(amount < 0){
        return false
    }

    for(const number of numbers){
        if(sumAvailable(amount - number, numbers, memo)){
            memo[amount] = true
            return true
        }
    }

    memo[amount] = false
    return false

}

console.log(sumAvailable(4, [1,2,3], memo1 = {})) //* true
console.log(sumAvailable(15, [4,6,10], memo2 = {})) //* false

//*
//* sumAvailable(4, [1, 2, 3], memo1 = {}) 
//* -> sumAvailable(3, [1, 2, 3], memo1 = {}) 
//*    -> sumAvailable(2, [1, 2, 3], memo1 = {}) 
//*       -> sumAvailable(1, [1, 2, 3], memo1 = {}) 
//*          -> sumAvailable(0, [1, 2, 3], memo1 = {}) returns true
//*       returns true
//*    returns true
//* returns true
//*
//* 
//* sumAvailable(15, [4, 6, 10], memo2 = {}) 
//* -> sumAvailable(11, [4, 6, 10], memo2 = {}) 
//*    -> sumAvailable(7, [4, 6, 10], memo2 = {}) 
//*       -> sumAvailable(3, [4, 6, 10], memo2 = {}) 
//*          -> sumAvailable(-1, [4, 6, 10], memo2 = {}) returns false
//*       -> sumAvailable(1, [4, 6, 10], memo2 = {}) 
//*          -> sumAvailable(-5, [4, 6, 10], memo2 = {}) returns false
//*       -> sumAvailable(-3, [4, 6, 10], memo2 = {}) returns false
//*    -> sumAvailable(5, [4, 6, 10], memo2 = {}) 
//*       -> sumAvailable(1, [4, 6, 10], memo2 = {}) 
//*          -> sumAvailable(-5, [4, 6, 10], memo2 = {}) returns false
//*       -> sumAvailable(-1, [4, 6, 10], memo2 = {}) returns false
//*       -> sumAvailable(-5, [4, 6, 10], memo2 = {}) returns false
//*    -> sumAvailable(9, [4, 6, 10], memo2 = {}) 
//*       -> sumAvailable(5, [4, 6, 10], memo2 = {}) returns false (memoized)
//*       -> sumAvailable(3, [4, 6, 10], memo2 = {}) returns false (memoized)
//*       -> sumAvailable(-1, [4, 6, 10], memo2 = {}) returns false
//* returns false
//* 