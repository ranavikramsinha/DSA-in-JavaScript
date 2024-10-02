//* https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {

    if(x < 0){
        return false;
    }

    let num1 = 0;
    let num2 = x;

    while(x > 0){
        num1 = (num1 * 10) + (x % 10);
        x = Math.trunc(x / 10);
    }

    return num1 === num2;
    
};