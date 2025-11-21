//* https://leetcode.com/problems/unique-length-3-palindromic-subsequences/

//* tc : O(n) | sc : O(1)

var countPalindromicSubsequence = function(s) {

    let first = new Array(26).fill(Infinity);
    let last = new Array(26).fill(-1);
    let character = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - character;

        first[index] = Math.min(first[index], i);
        last[index] = Math.max(last[index], i);
    }

    let result = 0;

    for (let i = 0; i < 26; i++) {
        if (first[i] < last[i]) {
            let seen = new Set();

            for (let j = first[i] + 1; j < last[i]; j++) {
                seen.add(s[j]);
            }

            result += seen.size;
        }
    }

    return result;
    
};