//* https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
    let romanNumbers = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};

    let result = 0;
    
    for(let i = s.length - 1; i >= 0; i--){
        let currentNumber = romanNumbers[s[i]];

        if(i < s.length - 1 && currentNumber < romanNumbers[s[i + 1]]){
            result -= currentNumber;
        }
        else{
            result += currentNumber;
        }
    }

    return result;
};