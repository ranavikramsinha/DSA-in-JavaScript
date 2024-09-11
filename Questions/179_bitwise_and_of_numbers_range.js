//* https://leetcode.com/problems/bitwise-and-of-numbers-range/

var rangeBitwiseAnd = function(left, right) {

    let count = 0;

    while(left !== right){
        left >>= 1;
        right >>= 1;
        count++;
    }

    return left << count;
    
};