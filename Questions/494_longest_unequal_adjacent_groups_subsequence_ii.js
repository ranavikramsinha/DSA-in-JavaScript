//* https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/

//* tc O(n^2 * l) | sc O(n) where l is the length of the word

var getWordsInLongestSubsequence = function(words, groups) {

    let n = words.length;
    let arr = new Array(n).fill(1);
    let previousIndex = new Array(n).fill(-1);
    let longestSubsequence = 1;
    let longestSubsequenceIndex = 0;
    let result = [];

    for(let i = 0; i < n; i++){
        for(let j = 0; j <= i - 1; j++){
            if(groups[j] !== groups[i] && words[j].length === words[i].length && solve(words[i], words[j])){
                if(arr[j] + 1 > arr[i]){
                    arr[i] = arr[j] + 1;
                    previousIndex[i] = j;
                }

                if(longestSubsequence < arr[i]){
                    longestSubsequence = arr[i];
                    longestSubsequenceIndex = i;
                }
            }
        }
    }

    while(longestSubsequenceIndex !== -1){
        result.push(words[longestSubsequenceIndex]);
        longestSubsequenceIndex = previousIndex[longestSubsequenceIndex];
    }

    result = result.reverse();
    return result;

    function solve(str1, str2){
        let count = 0;

        for(let i = 0; i < str1.length; i++){
            if(str1[i] !== str2[i]){
                count++;
            }

            if(count > 1){
                return false;
            }
        }

        return count === 1;
    }
    
};