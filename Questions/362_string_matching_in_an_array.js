//* https://leetcode.com/problems/string-matching-in-an-array/

//* tc O(n^2) | sc O(n)

var stringMatching = function(words) {

    let n = words.length;
    let arr = new Set();

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i == j){
                continue;
            }

            if(words[i].includes(words[j])){
                arr.add(words[j]);
            }
        }
    }

    let result = Array.from(arr);

    return result;
    
};