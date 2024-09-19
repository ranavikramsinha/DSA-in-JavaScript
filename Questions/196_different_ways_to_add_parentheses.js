//* https://leetcode.com/problems/different-ways-to-add-parentheses/

var diffWaysToCompute = function(expression) {
    return solve(expression);

    function solve(s){
        let result = [];

        for(let i = 0; i < s.length; i++){
            if(s[i] === '+' || s[i] === '-' || s[i] === '*'){
                let leftSideResult = solve(s.slice(0, i));
                let rightSideResult = solve(s.slice(i + 1));

                for(let x of leftSideResult){
                    for(let y of rightSideResult){
                        if(s[i] === '+'){
                            result.push(x + y);
                        }
                        else if(s[i] === '-'){
                            result.push(x - y);
                        }
                        else if(s[i] === '*'){
                            result.push(x * y);
                        }
                    }
                }
            }
        }

        if(result.length === 0){
             result.push(parseInt(s));
        }

        return result;
    }
};