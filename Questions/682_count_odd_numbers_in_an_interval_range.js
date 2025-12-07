//* https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

//* tc : O(n) | sc : O(1)

var countOdds = function(low, high) {

    let count = 0;

    for(let i = low ; i <= high; i++) {
        if(i % 2 !== 0) {
            count += 1;
        }
    }

    return count;
    
};