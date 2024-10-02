//* https://leetcode.com/problems/factorial-trailing-zeroes/

var trailingZeroes = function(n) {

    let count = 0;

    for(let i = 5; i <= n; i *= 5){
        count += Math.trunc(n / i);
    }

    return count;
    
};