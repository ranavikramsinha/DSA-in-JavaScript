//* https://leetcode.com/problems/plus-one/

var plusOne = function(digits) {

    let add = BigInt(digits.join('')) + 1n;

    let result = Array.from(String(add), Number);

    return result;

};