//* https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

var strStr = function(haystack, needle) {

    let m = haystack.length;
    let n = needle.length;

    for(let i = 0; i <= m - n; i++){
        for(let j = 0; j < n; j++){
            if(haystack[i + j] !== needle[j]){
                break;
            }

            if(j === n - 1){
                return i;
            }
        }
    }

    return -1;
};