//* https://leetcode.com/problems/ransom-note/

var canConstruct = function(ransomNote, magazine) {
    let characters = {};

    for(let char of magazine){
        characters[char] = 1 + characters[char] || 1;
    }

    for(let char of ransomNote){
        if(characters[char] === 0 || !characters[char]){
            return false;
        }

        characters[char]--;
    }

    return true;
};