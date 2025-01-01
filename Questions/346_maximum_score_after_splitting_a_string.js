//* https://leetcode.com/problems/maximum-score-after-splitting-a-string/

//* 2 pass solution :- tc O(n) | sc O(1)

var maxScore = function(s) {

    let n = s.length;
    let result = -Infinity;
    let allOnes = s.split('').filter(char => char === '1').length;
    let zeroCount = 0;

    for(let i = 0; i < n - 1; i++){
        if(s[i] === '1'){
            allOnes--;
        }
        else if(s[i] === '0'){
            zeroCount++;
        }

        result = Math.max(result, allOnes + zeroCount);
    }

    return result;
    
};