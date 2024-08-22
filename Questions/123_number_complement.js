//* https://leetcode.com/problems/number-complement/

//* Approach - 1
var findComplement = function(num) {

    let bits = Math.floor(Math.log2(num)) + 1;

    for(let i = 0; i < bits; i++){
        num = num ^ (1 << i);
    }

    return num; 
};

//* Approach - 2
var findComplement = function(num) {

    let bits = Math.floor(Math.log2(num)) + 1;
    
    return num ^ (1 << bits) - 1;
    
};

// var findComplement = function(num) {
    
//     return num ^ (1 << Math.floor(Math.log2(num)) + 1) - 1;
    
// };

//* Approach - 3
var findComplement = function(num) {

    let i = 0;
    let complement = 0;

    while(num !== 0){
        if((num&1) === 0){
            complement |= (1 << i);
        }

        num >>= 1;
        i++;
    }

    return complement;
    
};