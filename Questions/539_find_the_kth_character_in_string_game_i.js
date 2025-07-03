//* https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/

//* tc O(k) | sc O(k)

var kthCharacter = function(k) {

    let str = "a";

    while(str.length < k){
        n = str.length;

        for(let i = 0; i < n; i++){
            let character = str[i] === 'z' ? 'a' : String.fromCharCode(str.charCodeAt(i) + 1);
            str += character;
        }
    }

    return str[k - 1];
    
};

//* tc O(log(k)) | sc O(1)

var kthCharacter = function(k) {

    let x = BigInt(k) - 1n;
    let shifts = 0n;

    while(x > 0n){
        shifts += x & 1n;
        x >>= 1n;
    }

    let offset = Number(shifts % 26n);

    return String.fromCharCode(97 + offset);
    
};