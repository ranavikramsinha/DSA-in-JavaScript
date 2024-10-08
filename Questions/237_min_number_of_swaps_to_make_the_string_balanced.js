//* https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/

var minSwaps = function(s) {

    let count = 0;

    for(let char of s){
        if(char === '['){
            count++;
        }
        else if(count !== 0){
            count--;
        }
    }

    return Math.trunc((count + 1) / 2);

};