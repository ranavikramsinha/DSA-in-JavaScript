//* https://leetcode.com/problems/vowels-game-in-a-string/

//* tc : O(n) | sc : O(1)

var doesAliceWin = function(s) {

    let vowels = "aeiou";

    for (let char of s){
        if(vowels.includes(char)){
            return true;
        }
    }

    return false;
    
};