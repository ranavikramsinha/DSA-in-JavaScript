//* https://leetcode.com/problems/daily-temperatures/

var dailyTemperatures = function(temperatures) {

    let stack = [];
    const n = temperatures.length;
    let result = new Array(n);

    for(let i = n - 1; i >= 0; i--){
        while(stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]){
            stack.pop();
        }

        if(stack.length === 0){
            result[i] = 0;
        }
        else{
            result[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return result;
    
};