//* https://leetcode.com/problems/unique-length-3-palindromic-subsequences/

//* tc O(n) === O(26 * n) | sc O(1)

var countPalindromicSubsequence = function(s) {

    let n = s.length;
    let ans = 0;
    let set1 = new Set(s);

    for(let char of set1){

        let left = -1;
        let right = -1;

        for(let i = 0; i < n; i++){
            if(s[i] === char){
                if(left === -1){
                    left = i;
                }

                right = i;
            }
        }

        let set2 = new Set();

        for(let i = left + 1; i < right; i++){
            set2.add(s[i])
        }

        ans += set2.size;
    }

    return ans;
    
};