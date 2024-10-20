//* https://leetcode.com/problems/parsing-a-boolean-expression/

var parseBoolExpr = function(expression) {

    let n = expression.length;
    let stack = [];

    for(let i = 0; i < n; i++){
        if(expression[i] === ","){
            continue;
        }

        if(expression[i] === ")"){
            let values = [];

            while(stack[stack.length - 1] !== "("){
                let booleanExpression = stack.pop();
                values.push(booleanExpression);

            }

            stack.pop();

            let logicalOperator = stack.pop();
            stack.push(solve(logicalOperator, values));
        }
        else{
            stack.push(expression[i]);
        }
    }

    return stack[stack.length - 1] === "t";

    function solve(logicalOperator, values){
        if(logicalOperator === "!"){
            return values[0] === "t" ? "f" : "t";
        }

        if(logicalOperator === "&"){
            for(let value of values){
                if(value === "f"){
                    return "f";
                }
            }

            return "t";
        }

        if(logicalOperator === "|"){
            for(let value of values){
                if(value === "t"){
                    return "t";
                }
            }

            return "f";
        }
    }
};