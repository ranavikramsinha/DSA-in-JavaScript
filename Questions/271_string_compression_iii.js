//* https://leetcode.com/problems/string-compression-iii/

//* tc O(n) | sc O(1)
var compressedString = function(word) {

    let n = word.length;
    let position = 0;
    let result = '';

    while(position < n){
        let currentChar = word[position];
        let count = 0;

        while(position < n && count < 9 && word[position] === currentChar){
            position++;
            count++;
        }

        result += (count.toString() + currentChar);
    }

    return result;
    
};