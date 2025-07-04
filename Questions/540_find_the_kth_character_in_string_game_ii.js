//* https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/

//* tc O(log(k) ^ 2) | sc O(log(k))

var kthCharacter = function(k, operations) {

    if(k === 1){
        return 'a';
    }

    let n = operations.length;
    let len = 1;
    let newK = -1;
    let operationType = -1;

    for(let i = 0; i < n; i++){
        len *= 2;

        if(len >= k){
            operationType = operations[i];
            newK = k - Math.trunc(len / 2);
            break;
        }
    }

    let character = kthCharacter(newK, operations);

    if(operationType === 0){
        return character;
    }

    return character === 'z' ? 'a' : String.fromCharCode(character.charCodeAt(0) + 1);
    
};