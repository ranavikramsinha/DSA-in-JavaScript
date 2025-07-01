//* https://leetcode.com/problems/find-the-original-typed-string-i/

//* tc O(n) | sc O(1)

var possibleStringCount = function(word) {

    let n = word.length;
    let count = 1;

    for(let i = 1; i < n; i++){
        if(word[i] === word[i - 1]){
            count++;
        }
    }

    return count;
    
};