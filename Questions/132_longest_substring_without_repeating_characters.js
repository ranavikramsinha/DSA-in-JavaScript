//* https://leetcode.com/problems/longest-substring-without-repeating-characters

var lengthOfLongestSubstring = function(s) {

    let n = s.length;
    let positionI = 0;
    let set = new Set();
    let result = 0;

    for(let positionJ = 0; positionJ < n; positionJ++){

        while(set.has(s[positionJ])){
            set.delete(s[positionI]);
            positionI++;
        }

        set.add(s[positionJ]);
        result = Math.max(result, positionJ - positionI + 1);
    }

    return result;
};