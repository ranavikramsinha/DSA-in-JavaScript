//* https://leetcode.com/problems/evaluate-reverse-polish-notation/

var evalRPN = function(tokens) {
    let stack = [];

    function solve(num1, num2, token){
        if(token === '+'){
            return num1 + num2;
        }
        if(token === '-'){
            return num1 - num2;
        }
        if(token === '*'){
            return num1 * num2;
        }
        if(token === '/'){
            return Math.trunc(num1 / num2);
        }

        return -1;
    }

    for(let token of tokens){
        if(token === '+' || token === '-' || token === '*' || token === '/'){
            let secondNum = stack.pop();
            let firstNum = stack.pop();

            let result = solve(firstNum, secondNum, token);
            stack.push(result);
        }
        else{
            stack.push(parseInt(token, 10));
        }
    }

    return stack.pop();
};