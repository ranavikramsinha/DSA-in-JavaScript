//* https://leetcode.com/problems/replace-non-coprime-numbers-in-array/

//* tc : O(n * log(maxValue)) | sc : O(n)

var replaceNonCoprimes = function(nums) {

    let n = nums.length;
    let GCD = (a, b) => a % b === 0 ? b : GCD(b, a % b);
    let LCM = (a, b) => a * b / GCD(a, b);
    let stack = [];

    for(let num of nums){
        stack.push(num);

        while( stack.length > 1 && GCD(stack.at(-2), stack.at(-1)) > 1 ){
            let lcm = LCM(stack.at(-2), stack.at(-1));
            
            stack.pop();
            stack.pop();
            stack.push(lcm);
        }
    }
    
    return stack;
};