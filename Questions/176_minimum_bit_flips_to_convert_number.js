//* https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

var minBitFlips = function(start, goal) {

    let result = start ^ goal;
    let count = 0;
    
    while(result > 0){
        result = result & (result - 1);
        count++;
    }

    return count;
};