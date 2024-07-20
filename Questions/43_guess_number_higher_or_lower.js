//* https://leetcode.com/problems/guess-number-higher-or-lower/

var guessNumber = function(n) {

    let low = 1
    let high = n

    while(low <= high){
        const mid = Math.ceil(low + (high - low)/2)
        const result = guess(mid)

        if(result === 0){
            return mid
        }
        else if(result === -1){
            high = mid - 1
        }
        else if(result === 1){
            low = mid + 1
        }
    }
    
};