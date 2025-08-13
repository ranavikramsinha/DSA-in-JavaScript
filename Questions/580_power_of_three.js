//* https://leetcode.com/problems/power-of-three/

//* tc : O(1) | sc : O(1)

var isPowerOfThree = function(n) {

    if(n <= 0){
        return false;
    }

    let value = 3 ** 19;

    if(value % n === 0){
        return true;
    }

    return false;
    
};