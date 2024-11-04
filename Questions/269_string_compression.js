//* https://leetcode.com/problems/string-compression/

//* tc O(n) | sc O(1)
var compress = function(chars) {
    let n = chars.length;
    let position = 0;
    let index = 0;

    while(position < n){
        let currentChar = chars[position];
        let count = 0;

        while(position < n && chars[position] === currentChar){
            position++;
            count++;
        }

        chars[index] = currentChar;
        index++;

        if(count > 1){
            let str = count.toString();

            for(let num of str){
                chars[index] = num;
                index++;
            }
        }
    }

    return index;
    
};