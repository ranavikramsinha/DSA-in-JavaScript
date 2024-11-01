//* https://leetcode.com/problems/delete-characters-to-make-fancy-string/

//* tc O(n) | sc O(1)
var makeFancyString = function(s) {

    let result = "";
    let previous = "";
    let count = 0;

    for(let currentChar of s){
        if(previous === currentChar){
            count++;
        }
        else{
            count = 0;
        }

        if(count < 2){
            result += currentChar;
        }

        previous = currentChar;
    }
    
    return result;
    
};