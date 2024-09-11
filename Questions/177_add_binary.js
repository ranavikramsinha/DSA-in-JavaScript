//* https://leetcode.com/problems/add-binary/

var addBinary = function(a, b) {

    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    let result = sum.toString(2);

    return result;
    
};