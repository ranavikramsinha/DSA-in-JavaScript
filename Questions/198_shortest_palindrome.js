//* https://leetcode.com/problems/shortest-palindrome/

var shortestPalindrome = function(s) {

    let reverse = s.split('').reverse().join('');

    for(let i = 0; i < s.length; i++){
        if(s.substring(0, s.length - i) === reverse.substring(i)){
            return reverse.substring(0, i) + s;
        }
    }

    return reverse + s;
    
};