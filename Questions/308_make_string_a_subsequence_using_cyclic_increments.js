//* https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/

//* tc O(m + n) | sc O(1)

var canMakeSubsequence = function(str1, str2) {

    let m = str1.length;
    let n = str2.length;

    if(n > m){
        return false;
    }

    let str1Index = 0;
    let str2Index = 0;

    while(str1Index < m && str2Index < n){

        if(str1[str1Index] === str2[str2Index] || 
           str1.charCodeAt(str1Index) + 1 === str2.charCodeAt(str2Index) || 
           str1.charCodeAt(str1Index) - 25 === str2.charCodeAt(str2Index)){
            str2Index++;
        }

        str1Index++
    }

    return str2Index === n;
    
};