//* https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/

var canBeEqual = function(target, arr) {

    let x = target.sort((a, b) => a - b);
    let y = arr.sort((a, b) => a - b);
    let n = x.length;

    for(let i = 0; i < n; i++){
        if(x[i] !== y[i]){
            return false;
        }
    }

    return true;
    
};