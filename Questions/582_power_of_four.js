//* https://leetcode.com/problems/power-of-four/

//* tc : O(1) | sc : O(1)

var isPowerOfFour = function(n) {

    if(n <= 0){
        return false;
    }

    if((n & (n - 1)) === 0 && (n - 1) % 3 === 0){
        return true;
    }

    return false;
    
};