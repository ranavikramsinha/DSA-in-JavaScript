//* https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/

//* tc O(n) | sc O(1)

var longestSubsequence = function(s, k) {

    let n = s.length;
    let longestSubsequence = 0;
    let power = 1;

    for(let i = n - 1; i >= 0; i--){
        if(s[i] === "0"){
            longestSubsequence++;
        }
        else if(k >= power){
            k -= power;
            longestSubsequence++;
        }

        if(k >= power){
            power <<= 1;
        }
    }

    return longestSubsequence;
    
};