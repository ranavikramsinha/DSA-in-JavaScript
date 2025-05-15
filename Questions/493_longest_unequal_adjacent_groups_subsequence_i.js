//* https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/

//* tc O(n) | sc O(n)

var getLongestSubsequence = function(words, groups) {

    let n = words.length;
    let result = [words[0]];

    for(let i = 1; i < n; i++){
        if(groups[i - 1] !== groups[i]){
            result.push(words[i]);
        }
    }

    return result;
    
};

//* tc O(n) | sc O(n)
var getLongestSubsequence = function(words, groups) {

    let n = words.length;
    let result = [];

    for(let i = 0; i < n; i++){
        if(i === 0){
            result.push(words[i]);
        }
        
        if(i !== 0 && groups[i - 1] !== groups[i]){
            result.push(words[i]);

            if(i === n - 1){
                break;
            }
        }

        if(i === n - 1 && n !== 1 && groups[i - 1] !== groups[i]){
            result.push(words[i]);
        }
    }

    return result;
    
};