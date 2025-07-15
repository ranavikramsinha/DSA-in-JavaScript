//* https://leetcode.com/problems/valid-word/

//* tc : O(n) | sc : O(1)

var isValid = function(word) {

    if(word.length < 3){
        return false;
    }

    let vowel = 0;
    let consonant = 0;

    for(let char of word){
        if(/\d/.test(char)){
            continue;
        }
        else if(/[a-zA-Z]/.test(char)){
            let c = char.toLowerCase()
            
            if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == "u"){
                vowel++;
            }
            else{
                consonant++;
            }
        }
        else{
            return false;
        }
    }

    return vowel > 0 && consonant > 0;
    
};