//* https://leetcode.com/problems/basic-calculator

var calculate = function(s) {
    let n = s.length;
    let stack = [];
    let num = 0;
    let result = 0;
    let addOrSubtract = 1;

    for(let i = 0; i < n; i++){
        let char = s[i];

        if(char >= '0' && char <= '9'){
            num = (num * 10) + (char - '0');
        }
        else if(s[i] === '+'){
            result += (num * addOrSubtract);
            num = 0;
            addOrSubtract = 1;
        }
        else if(s[i] === '-'){
            result += (num * addOrSubtract);
            num = 0;
            addOrSubtract = -1;
        }
        else if(s[i] === '('){
            stack.push(result);
            stack.push(addOrSubtract);
            result = 0;
            num = 0;
            addOrSubtract = 1;
        }
        else if(s[i] === ')'){
            result += (num * addOrSubtract);
            num = 0;
            let prevAddOrSubtract = stack.pop();
            result *= prevAddOrSubtract;
            let prevResult = stack.pop();
            result += prevResult;
        }
    }

    result += addOrSubtract * num;
    return result;
};
