//* https://leetcode.com/problems/word-subsets/

//* tc O(n + m + l) | sc O(1)

var wordSubsets = function(words1, words2) {

    let arr = new Array(26).fill(0);
    let result = [];

    for(let character of words2){
        let temporaryArr = new Array(26).fill(0);

        for(let c of character){
            temporaryArr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for(let i = 0; i < 26; i++){
            arr[i] = Math.max(arr[i], temporaryArr[i]);
        }
    }

    for(let word of words1){
        let temporaryArr = new Array(26).fill(0);

        for(let c of word){
            temporaryArr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        if(solve(temporaryArr, arr)){
            result.push(word);
        }
    }

    return result;

    function solve(arr1, arr2){
        for(let i = 0; i < 26; i++){
            if(arr1[i] < arr2[i]){
                return false;
            }
        }

        return true;
    }
    
};