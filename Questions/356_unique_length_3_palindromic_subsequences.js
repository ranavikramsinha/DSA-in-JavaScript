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

//* tc O(n) | sc O(1)

var countPalindromicSubsequence = function(s) {

    let n = s.length;
    let first = new Array(26).fill(-1);
    let last = new Array(26).fill(-1);
    let ans = 0;

    for(let i = 0; i < n; i++){

        let idx = s.charCodeAt(i) - 'a'.charCodeAt(0);

        if(first[idx] === -1){
            first[idx] = i;
        }

        last[idx] = i;
    }

    for(let i = 0; i < 26; i++){

        let left = first[i];
        let right = last[i];
        
        if(left === -1 && right === -1 && left < right){
            continue;
        }

        let arr = new Array(26).fill(0);

        for(let j = left + 1; j < right; j++){
            let idx = s.charCodeAt(j) - 'a'.charCodeAt(0);
            arr[idx] = 1;
        }

        ans += arr.filter(Boolean).length;
    }

    return ans; 
};