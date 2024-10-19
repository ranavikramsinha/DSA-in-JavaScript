//* https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/

var findKthBit = function(n, k) {

    if(n === 1){
        return "0";
    }

    let length = Math.pow(2, n) - 1;

    let middle = Math.ceil(length / 2);

    if(k < middle){
        return findKthBit(n - 1, k);
    }
    else if(k === middle){
        return '1';
    }
    else{
        let char = findKthBit(n - 1, length - (k - 1));

        return char === "0" ? "1" : "0";
    }
    
};