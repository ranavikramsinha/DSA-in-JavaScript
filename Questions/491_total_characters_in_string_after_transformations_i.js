//* https://leetcode.com/problems/total-characters-in-string-after-transformations-i/

//* tc O(n + t) | sc O(1) where n is length of s and t is the number of transformations

var lengthAfterTransformations = function(s, t) {

    let arr = new Array(26).fill(0);
    let modulo = 10 ** 9 + 7;
    let result = 0;

    for(let character of s){
        arr[character.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let i = 1; i <= t; i++){
        let newArr = new Array(26).fill(0);

        for(let j = 0; j < 26; j++){
            if(j !== 25){
                newArr[j + 1] = (newArr[j + 1] + arr[j]) % modulo;
            }
            else{
                newArr[0] = (newArr[0] + arr[j]) % modulo;
                newArr[1] = (newArr[1] + arr[j]) % modulo;
            }
        }

        arr = newArr;
    }

    for(let i = 0; i < 26; i++){
        result = (result + arr[i]) % modulo;
    }

    return result;
    
};