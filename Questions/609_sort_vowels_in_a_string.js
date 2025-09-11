//* https://leetcode.com/problems/sort-vowels-in-a-string/

//* tc : O(n) | sc : O(n)

var sortVowels = function(s) {
    
    let mp = {};

    for (let ch of s) {
        if (isVowel(ch)) {
            mp[ch] = (mp[ch] || 0) + 1;
        }
    }

    function isVowel(ch) {
        ch = ch.toLowerCase();
        return ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u';
    }
    
    let temp = "AEIOUaeiou";
    
    let j = 0;
    let result = s.split("");
    
    for (let i = 0; i < result.length; i++) {
        if (isVowel(result[i])) {
            while (j < temp.length && (!mp[temp[j]] || mp[temp[j]] === 0)) {
                j++;
            }

            result[i] = temp[j];
            mp[temp[j]]--;
        }
    }
    
    return result.join("");
    
};