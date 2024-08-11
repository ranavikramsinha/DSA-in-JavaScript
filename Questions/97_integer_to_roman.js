//* https://leetcode.com/problems/integer-to-roman/

var intToRoman = function(num) {
    let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let symbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let n = val.length;
    let result = '';

    for(let i = 0; i < n; i++){
        while(num >= val[i]){
            result += symbol[i];
            num -= val[i];
        }
    }

    return result;
};