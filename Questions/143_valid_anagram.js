//* https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
    let m = s.length;
    let n = t.length;

    if(m !== n){
        return false;
    }

    let letters = new Array(26).fill(0);
    let o = letters.length;

    for(let i = 0; i < m; i++){
        letters[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        letters[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for(let i = 0; i < o; i++){
        if(letters[i] !== 0){
            return false;
        }
    }

    return true;
};