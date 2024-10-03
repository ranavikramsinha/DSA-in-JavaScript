//* https://leetcode.com/problems/sqrtx/

var mySqrt = function(x) {
    if(x === 1){
        return x;
    }
    
    let left = 0;
    let right = x;

    while(left <= right){
        let middle = left + Math.trunc((right - left) / 2);

        if(middle * middle === x){
            return middle;
        }
        else if(middle * middle < x){
            left = middle + 1;
        }
        else{
            right = middle - 1;
        }
    }

    return right;
};