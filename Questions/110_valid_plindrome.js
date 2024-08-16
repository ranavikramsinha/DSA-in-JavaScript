//* https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {
    let str1 = s.replace(/[^a-zA-Z0-9]/g, '', "").toLowerCase();
    let str2 = str1.split('').reverse().join('');

    if(str1 === str2){
        return true;
    }
    else{
        return false;
    }
};