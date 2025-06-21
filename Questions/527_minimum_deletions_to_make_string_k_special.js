//* https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/

//* tc O(n) | sc O(1)

var minimumDeletions = function(word, k) {

    let frequency = new Array(26).fill(0);

    for(let character of word){
        frequency[character.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let arr = frequency.filter(num => num > 0);
    let minimumDelete = Infinity;

    for(let i = 0; i < arr.length; i++){
        let currentCharacter = arr[i];
        let deletions = 0;

        for(let j = 0; j < arr.length; j++){
            if(arr[j] < currentCharacter){
                deletions += arr[j];
            }
            else if(arr[j] > currentCharacter + k){
                deletions += arr[j] - (currentCharacter + k);
            }
        }

        minimumDelete = Math.min(minimumDelete, deletions);
    }

    return minimumDelete;
    
};