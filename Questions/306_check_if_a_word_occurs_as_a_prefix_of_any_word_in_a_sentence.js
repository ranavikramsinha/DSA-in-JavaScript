//* https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

//* tc O(n * k) | sc O(n * k) where k is the average length of a word

var isPrefixOfWord = function(sentence, searchWord) {

    let words = sentence.split(" ");
    let n = words.length;

    for(let i = 0; i < n; i++){

        if(words[i].indexOf(searchWord) === 0){
            return i + 1;
        }
        
    }

    return -1;
    
};