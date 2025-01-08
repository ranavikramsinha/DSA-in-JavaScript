//* https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/

//* tc O(n^2) | sc O(1)

var countPrefixSuffixPairs = function(words) {
    
    let n = words.length;
    let count = 0;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let str1 = words[i];
            let str2 = words[j];

            if(solve(str1, str2)){
                count++;
            }
        }
    }

    return count;

    function solve(s1, s2){
        if(s1.length > s2.length){
            return false;
        }

        if(s2.substring(0, s1.length) === s1 && s2.substring(s2.length - s1.length) === s1){
            return true;
        }

        return false;
    }
    
};