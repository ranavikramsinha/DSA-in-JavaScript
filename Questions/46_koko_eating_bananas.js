//* https://leetcode.com/problems/koko-eating-bananas/

var minEatingSpeed = function(piles, h) {

    let min = 1
    let max = Math.max(...piles)

    while(min <= max){
        let mid = Math.floor(min + (max - min)/2)

        let hours = 0

        for(let p of piles){
            hours += Math.ceil(p/mid)
        }

        if(hours > h){
            min = mid + 1
        }
        else{
            max = mid - 1
        }
    }
    
    return min
    
};