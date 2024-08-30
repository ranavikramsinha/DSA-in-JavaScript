//* https://leetcode.com/problems/word-pattern/

var wordPattern = function(pattern, s) {
    let map = new Map();
    let words = s.split(" ");

    if(pattern.length !== words.length){
        return false;
    }

    let s1 = new Set(words).size;
    let s2 = new Set(pattern).size;

    if(s1 !== s2){
        return false;
    }

    for(let i = 0; i < pattern.length; i++){
        if(map.has(pattern[i]) && map.get(pattern[i]) !== words[i]){
            return false;
        }

        map.set(pattern[i], words[i]);
    }

    return true;
};