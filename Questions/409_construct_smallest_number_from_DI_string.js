//* https://leetcode.com/problems/construct-smallest-number-from-di-string/

//* tc 2 * O(n + 1) | sc O(n)

var smallestNumber = function(pattern) {

    let n = pattern.length;
    let str = '';
    let stack = [];
    let count = 1;

    for(let i = 0; i <= n; i++){
        stack.push(String(count));
        count++;

        if(pattern[i] === 'I' || i === n){
            while(stack.length > 0){
                str += stack.pop();
            }
        }
    }

    return str;
};