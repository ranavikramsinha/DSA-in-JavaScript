//* https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

//* tc : O(n) | sc : O(n)

var sumZero = function(n) {

    let result = new Array(n).fill(0);

    let start = 1;
    let i = 0;

    while(i + 1 < n){
        result[i] = start;
        result[i + 1] = -start;

        i += 2;
        start++;
    }

    return result;
    
};