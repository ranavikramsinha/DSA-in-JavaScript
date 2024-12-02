//* https://leetcode.com/problems/count-prefixes-of-a-given-string/

//* tc O(n * k) | sc O(1) where k is the average length of the words

var countPrefixes = function(words, s) {

    let n = words.length;
    let count = 0;

    for(let i = 0; i < n; i++){

        if(s.startsWith(words[i]) === true){
            count++;
        }

    }

    return count;
    
};