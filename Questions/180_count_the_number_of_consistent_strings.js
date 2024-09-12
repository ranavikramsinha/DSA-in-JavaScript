//* https://leetcode.com/problems/count-the-number-of-consistent-strings/

var countConsistentStrings = function(allowed, words) {

    let bitMask = 0;

    for(let char of allowed){
        bitMask |= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));
    }

    let count = 0;

    for(let word of words){
        let isAllCharactesPresent = true;

        for(let i = 0; i < word.length; i++){
            if(((bitMask >> (word.charCodeAt(i) - 'a'.charCodeAt(0))) & 1) === 0){
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