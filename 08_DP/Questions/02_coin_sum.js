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
//* sumAvailable(4, [1, 2, 3])
//* └── Check memo for 4: Not found
//*     ├── amount === 0? No
//*     ├── amount < 0? No
//*     ├── Iterate numbers [1, 2, 3]
//*     │   ├── sumAvailable(3, [1, 2, 3])
//*     │   │   ├── Check memo for 3: Not found
//*     │   │   ├── amount === 0? No
//*     │   │   ├── amount < 0? No
//*     │   │   ├── Iterate numbers [1, 2, 3]
//*     │   │   │   ├── sumAvailable(2, [1, 2, 3])
//*     │   │   │   │   ├── Check memo for 2: Not found
//*     │   │   │   │   ├── amount === 0? No
//*     │   │   │   │   ├── amount < 0? No
//*     │   │   │   │   ├── Iterate numbers [1, 2, 3]
//*     │   │   │   │   │   ├── sumAvailable(1, [1, 2, 3])
//*     │   │   │   │   │   │   ├── Check memo for 1: Not found
//*     │   │   │   │   │   │   ├── amount === 0? No
//*     │   │   │   │   │   │   ├── amount < 0? No
//*     │   │   │   │   │   │   ├── Iterate numbers [1, 2, 3]
//*     │   │   │   │   │   │   │   ├── sumAvailable(0, [1, 2, 3])
//*     │   │   │   │   │   │   │   │   ├── amount === 0? Yes
//*     │   │   │   │   │   │   │   │   └── return true
//*     │   │   │   │   │   │   ├── memo[1] = true
//*     │   │   │   │   │   │   └── return true
//*     │   │   │   │   │   ├── memo[2] = true
//*     │   │   │   │   │   └── return true
//*     │   │   │   │   ├── memo[3] = true
//*     │   │   │   │   └── return true
//*     │   │   ├── memo[4] = true
//*     │   │   └── return true
//* 
//* sumAvailable(15, [4, 6, 10])
//* │
//* ├── Check memo for 15: Not found
//* │
//* ├── amount === 0? No
//* │
//* ├── amount < 0? No
//* │
//* ├── Iterate numbers [4, 6, 10]
//* │   ├── sumAvailable(11, [4, 6, 10])
//* │   │   ├── Check memo for 11: Not found
//* │   │   ├── amount === 0? No
//* │   │   ├── amount < 0? No
//* │   │   ├── Iterate numbers [4, 6, 10]
//* │   │   │   ├── sumAvailable(7, [4, 6, 10])
//* │   │   │   │   ├── Check memo for 7: Not found
//* │   │   │   │   ├── amount === 0? No
//* │   │   │   │   ├── amount < 0? No
//* │   │   │   │   ├── Iterate numbers [4, 6, 10]
//* │   │   │   │   │   ├── sumAvailable(3, [4, 6, 10])
//* │   │   │   │   │   │   ├── Check memo for 3: Not found
//* │   │   │   │   │   │   ├── amount === 0? No
//* │   │   │   │   │   │   ├── amount < 0? No
//* │   │   │   │   │   │   ├── Iterate numbers [4, 6, 10]
//* │   │   │   │   │   │   │   ├── sumAvailable(-1, [4, 6, 10])
//* │   │   │   │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   │   │   │   └── return false
//* │   │   │   │   │   │   │   ├── sumAvailable(-3, [4, 6, 10])
//* │   │   │   │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   │   │   │   └── return false
//* │   │   │   │   │   │   │   ├── sumAvailable(-7, [4, 6, 10])
//* │   │   │   │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   │   │   │   └── return false
//* │   │   │   │   │   │   └── memo[3] = false
//* │   │   │   │   │   │   └── return false
//* │   │   │   │   │   ├── sumAvailable(1, [4, 6, 10])
//* │   │   │   │   │   │   ├── Check memo for 1: Not found
//* │   │   │   │   │   │   ├── amount === 0? No
//* │   │   │   │   │   │   ├── amount < 0? No
//* │   │   │   │   │   │   ├── Iterate numbers [4, 6, 10]
//* │   │   │   │   │   │   │   ├── sumAvailable(-3, [4, 6, 10])
//* │   │   │   │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   │   │   │   └── return false
//* │   │   │   │   │   │   │   ├── sumAvailable(-5, [4, 6, 10])
//* │   │   │   │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   │   │   │   └── return false
//* │   │   │   │   │   │   │   ├── sumAvailable(-9, [4, 6, 10])
//* │   │   │   │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   │   │   │   └── return false
//* │   │   │   │   │   │   └── memo[1] = false
//* │   │   │   │   │   │   └── return false
//* │   │   │   │   │   ├── sumAvailable(-5, [4, 6, 10])
//* │   │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   │   └── return false
//* │   │   │   │   │   ├── sumAvailable(-9, [4, 6, 10])
//* │   │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   │   └── return false
//* │   │   │   │   └── memo[7] = false
//* │   │   │   │   └── return false
//* │   │   │   ├── sumAvailable(5, [4, 6, 10])
//* │   │   │   │   ├── Check memo for 5: Not found
//* │   │   │   │   ├── amount === 0? No
//* │   │   │   │   ├── amount < 0? No
//* │   │   │   │   ├── Iterate numbers [4, 6, 10]
//* │   │   │   │   │   ├── sumAvailable(1, [4, 6, 10])
//* │   │   │   │   │   │   ├── Check memo for 1: false
//* │   │   │   │   │   │   └── return false
//* │   │   │   │   │   ├── sumAvailable(-1, [4, 6, 10])
//* │   │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   │   └── return false
//* │   │   │   │   │   ├── sumAvailable(-5, [4, 6, 10])
//* │   │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   │   └── return false
//* │   │   │   │   │   ├── sumAvailable(-9, [4, 6, 10])
//* │   │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   │   └── return false
//* │   │   │   │   └── memo[5] = false
//* │   │   │   │   └── return false
//* │   │   │   ├── sumAvailable(1, [4, 6, 10])
//* │   │   │   │   ├── Check memo for 1: false
//* │   │   │   │   └── return false
//* │   │   │   ├── sumAvailable(-5, [4, 6, 10])
//* │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   └── return false
//* │   │   │   ├── sumAvailable(-9, [4, 6, 10])
//* │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   └── return false
//* │   │   │   └── memo[11] = false
//* │   │   │   └── return false
//* │   │   ├── sumAvailable(9, [4, 6, 10])
//* │   │   │   ├── Check memo for 9: Not found
//* │   │   │   ├── amount === 0? No
//* │   │   │   ├── amount < 0? No
//* │   │   │   ├── Iterate numbers [4, 6, 10]
//* │   │   │   │   ├── sumAvailable(5, [4, 6, 10])
//* │   │   │   │   │   ├── Check memo for 5: false
//* │   │   │   │   │   └── return false
//* │   │   │   │   ├── sumAvailable(3, [4, 6, 10])
//* │   │   │   │   │   ├── Check memo for 3: false
//* │   │   │   │   │   └── return false
//* │   │   │   │   ├── sumAvailable(-1, [4, 6, 10])
//* │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   └── return false
//* │   │   │   │   ├── sumAvailable(-7, [4, 6, 10])
//* │   │   │   │   │   ├── amount < 0? Yes
//* │   │   │   │   │   └── return false
//* │   │   │   └── memo[9] = false
//* │   │   │   └── return false
//* │   │   ├── sumAvailable(5, [4, 6, 10])
//* │   │   │   ├── Check memo for 5: false
//* │   │   │   └── return false
//* │   │   ├── sumAvailable(-1, [4, 6, 10])
//* │   │   │   ├── amount < 0? Yes
//* │   │   │   └── return false
//* │   │   ├── sumAvailable(-7, [4, 6, 10])
//* │   │   │   ├── amount < 0? Yes
//* │   │   │   └── return false
//* │   └── memo[15] = false
//* └── return false
//* 