//* https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function(s) {
    s = s.trim();
    let n = s.length;
    let count = 0;

    for(let i = n - 1; i >= 0; i--){
        if(s[i] !== ' '){
            count++;
        }
        else if(count > 0){
            break;
        }
    }

    return count;
};