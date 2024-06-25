function houseRobber(numbers, i = 0, memo = {}){
    
    if(i in memo){
        return memo[i]
    }

    if(i >= numbers.length){
        return 0
    }

    // memo[i] = Math.max(houseRobber(numbers, i+1, memo), numbers[i] + houseRobber(numbers, i+2, memo))

    const skip = houseRobber(numbers, i+1, memo)
    const rob = numbers[i] + houseRobber(numbers, i+2, memo)

    memo[i] = Math.max(skip, rob)

    return memo[i]
}

const house = [1,2,3,1]
console.log(houseRobber(house))