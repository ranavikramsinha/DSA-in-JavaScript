//* https://leetcode.com/problems/maximum-number-of-words-you-can-type/

//* tc : O(n * m) | sc : O(1)

var canBeTypedWords = function(text, brokenLetters) {
    
    let arr = text.split(" ");
    let brokenLettersSet = new Set(brokenLetters);
    let count = 0;

    for(let word of arr){
        if(![...word].some(character => brokenLettersSet.has(character))){
            count++;
        }
    }

    return count;
    
};