//* https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/

var minimumPushes = function(word) {

    let n = word.length;
    let arr = new Array(26).fill(0);

    for(let i = 0; i < n; i++){
        let char = word[i];
        arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    arr.sort((a,b) =>  b - a);

    let result = 0;

    for(let i = 0; i < 26; i++){
        let frequency = arr[i];

        let press = Math.floor((i/8) + 1);

        result += press * frequency;
    }

    return result;
    
};