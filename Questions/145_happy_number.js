//* https://leetcode.com/problems/happy-number/

var isHappy = function(n) {

    if(n < 10){
        if(n === 1 || n === 7){
            return true;
        }

        return false;
    }

    let total = 0;

    while(n > 0){
        let square = n % 10;
        total += Math.pow(square, 2);
        n -= square;
        n /= 10;
    }

    if(total === 1){
        return true;
    }

    return isHappy(total);
};