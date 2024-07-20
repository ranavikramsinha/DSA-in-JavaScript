//* https://leetcode.com/problems/successful-pairs-of-spells-and-potions/

var successfulPairs = function(spells, potions, success) {

    let arr = []

    for(let potion of potions){
        arr.push(Math.ceil(success / potion))
    }

    arr.sort((a, b) => a - b)
    const n = arr.length
    const result = []

    for(let spell of spells){
        let left = 0
        let right = n - 1
        let successfulCount = 0

        while(left <= right){
            let mid = Math.floor((left+right)/2)

            if(arr[mid] <= spell){
                left = mid + 1
                successfulCount = left
            }
            else{
                right = mid - 1
            }
        }

        result.push(successfulCount)
    }

    return result
    
};