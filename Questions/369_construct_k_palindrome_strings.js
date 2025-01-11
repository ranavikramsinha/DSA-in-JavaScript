//* https://leetcode.com/problems/construct-k-palindrome-strings/

//* tc O(n) | sc O(1)

var canConstruct = function(s, k) {

    let n = s.length;
    let oddCount = 0;

    if(n === k){
        return true;
    }

    if(n < k){
        return false;
    }

    let arr = new Array(26).fill(0);

    for(let char of s){
        arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    for(let i = 0; i < 26; i++){
        if(arr[i] % 2 != 0){
            oddCount++;
        }
    }

    return oddCount <= k;
    
};