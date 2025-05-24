//* https://leetcode.com/problems/find-words-containing-character/

//* tc O(n * m) | sc O(n) where n is the number of words and m is the length of a word

var findWordsContaining = function(words, x) {

    let n = words.length;
    let result = [];

    for(let i = 0; i < n; i++){
        if(words[i].indexOf(x) !== -1){
            result.push(i);
        }
    }

    return result;
    
};