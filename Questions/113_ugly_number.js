//* https://leetcode.com/problems/ugly-number/

var isUgly = function(n) {

    if(n <= 0){
        return false;
    }

    if(n === 1){
        return true;
    }

    while(n > 1){
        if(n % 2 === 0){
            n = Math.floor(n/2);
        }
        else if(n % 3 === 0){
            n = Math.floor(n/3);
        }
        else if(n % 5 === 0){
            n = Math.floor(n/5);
        }
        else{
            return false;
        }
    }

    return true;
    
};