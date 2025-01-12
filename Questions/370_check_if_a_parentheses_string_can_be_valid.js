//* https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/

//* tc O(n) | sc O(n)

var canBeValid = function(s, locked) {
    let n = s.length;
    if(n % 2 !== 0){
        return false;
    }

    let openBracket = [];
    let openCloseBraket = [];

    for(let i = 0; i < n; i++){
        if(locked[i] === '0'){
            openCloseBraket.push(i);
        }
        else if(s[i] === '('){
            openBracket.push(i);
        }
        else if(s[i] === ')'){
            if(openBracket.length !== 0){
                openBracket.pop();
            }
            else if(openCloseBraket.length !== 0){
                openCloseBraket.pop();
            }
            else{
                return false;
            }
        }
    }

    while(openBracket.length !== 0 && openCloseBraket.length !== 0 && openBracket[openBracket.length - 1] < openCloseBraket[openCloseBraket.length - 1]){
        openBracket.pop();
        openCloseBraket.pop();
    }

    return openBracket.length === 0;   
};

//* tc O(n) | sc O(1)

var canBeValid = function(s, locked) {

    let n = s.length;

    if(n % 2 !== 0){
        return false;
    }

    let openBracket = 0;

    for(let i = 0; i < n; i++){
        if(s[i] === '(' || locked[i] === '0'){
            openBracket++;
        }
        else{
            openBracket--;
        }

        if(openBracket < 0){
            return false;
        }
    }

    let closeBracket = 0;

    for(let i = n - 1; i >= 0; i--){
        if(s[i] === ')' || locked[i] === '0'){
            closeBracket++;
        }
        else{
            closeBracket--;
        }

        if(closeBracket < 0){
            return false;
        }
    }

    return true;
    
};