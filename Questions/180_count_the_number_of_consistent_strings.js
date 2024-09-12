//* https://leetcode.com/problems/count-the-number-of-consistent-strings/

var countConsistentStrings = function(allowed, words) {

    let bit = 0;

    for(let char of allowed){
        bit |= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));
    }

    let count = 0;

    for(let word of words){
        let isAllCharactesPresent = true;

        for(let i = 0; i < word.length; i++){
            if(((bit >> (word.charCodeAt(i) - 'a'.charCodeAt(0))) & 1) === 0){
                isAllCharactesPresent = false;
                break;
            }
        }

        if(isAllCharactesPresent){
            count++;
        }
    }

    return count;
    
};