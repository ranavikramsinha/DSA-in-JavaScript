//* https://leetcode.com/problems/fraction-to-recurring-decimal/

//* tc : O(n) | sc : O(n)

var fractionToDecimal = function(numerator, denominator) {

    if (numerator === 0) {
        return "0";
    }

    let result = [];
    let seen = new Map();

    if ((numerator < 0) !== (denominator < 0)) {
        result.push("-");
    }
    
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    
    result.push(Math.floor(numerator / denominator));
    numerator = numerator % denominator;
    
    if (numerator === 0) {
        return result.join("");
    }
    
    result.push(".");
    
    while (numerator !== 0) {
        if (seen.has(numerator)) {
            result.splice(seen.get(numerator), 0, "(");
            result.push(")");
            break;
        }
        
        seen.set(numerator, result.length);
        
        numerator *= 10;
        result.push(Math.floor(numerator / denominator));
        numerator = numerator % denominator;
    }
    
    return result.join("");
    
};