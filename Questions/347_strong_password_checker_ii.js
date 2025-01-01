//* https://leetcode.com/problems/strong-password-checker-ii/

//* tc O(n) | sc O(1)

var strongPasswordCheckerII = function(password) {

    let n = password.length;

    if(n < 8){
        return false;
    }
    
    let lowerCase = false;
    let upperCase = false;
    let oneDigit = false;
    let oneSpecialCharacter = false;
    let specialCharacters = '!@#$%^&*()-+';

    for(let i = 0; i < n; i++){

        character = password[i];

        if(i > 0 && character === password[i - 1]){
            return false;
        }

        if(character >= 'a' && character <= 'z'){
            lowerCase = true;
        }
        else if(character >= 'A' && character <= 'Z'){
            upperCase = true;
        }
        else if(character >= '0' && character <= '9'){
            oneDigit = true;
        }
        else if(specialCharacters.includes(character)){
            oneSpecialCharacter = true;
        }
    }

    let trueOrFalse = lowerCase && upperCase && oneDigit && oneSpecialCharacter;
    return trueOrFalse;

};