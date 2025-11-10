//* https://leetcode.com/problems/minimum-operations-to-convert-all-elements-to-zero/

//* tc : O(n) | sc : O(n)

var minOperations = function(nums) {
    
    let stack = [];
    let operations = 0;
    
    for (let num of nums) {
        while (stack.length > 0 && stack[stack.length - 1] > num) {
            stack.pop();
            operations++;
        }
        
        if (stack.length === 0 || num > stack[stack.length - 1]) {
            if (num > 0) {
                stack.push(num);
            }
        }
    }
    
    operations += stack.length;
    
    return operations;

};