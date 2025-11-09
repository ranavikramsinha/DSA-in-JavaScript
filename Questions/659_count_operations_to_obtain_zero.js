//* https://leetcode.com/problems/count-operations-to-obtain-zero/

//* tc : O(log(min(num1, num2))) | sc : O(1)

var countOperations = function(num1, num2) {

    let count = 0;
    
    while (num1 !== 0 && num2 !== 0) {
        if (num1 >= num2) {
            count += Math.trunc(num1 / num2);
            num1 %= num2;
        }
        else {
            count += Math.trunc(num2 / num1);
            num2 %= num1;
        }
    }

    return count;
    
};