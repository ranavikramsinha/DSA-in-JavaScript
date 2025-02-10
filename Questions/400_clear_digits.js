//* https://leetcode.com/problems/clear-digits/

//* tc O(n) | sc O(n)

var clearDigits = function(s) {

    let n = s.length;
    let arr = [];

    for(let char of s){
        if(char >= '0' && char <= '9'){
            arr.pop();
        }
        else{
            arr.push(char);
        }
    }

    return arr.join('');
    
};