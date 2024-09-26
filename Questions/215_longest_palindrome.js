//* https://leetcode.com/problems/longest-palindrome/

var longestPalindrome = function(s) {

    let n = s.length;
    let set = new Set();
    let result = 0;

    for(let char of s){
        if(set.has(char)){
            result += 2;
            set.delete(char);
        }
        else{
            set.add(char, 1);
        }
    }

    return n > result ? result + 1 : result;

};