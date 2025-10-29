//* https://leetcode.com/problems/smallest-number-with-all-set-bits/

//* tc : O(log(n)) | sc : O(1)

var smallestNumber = function(n) {

    let count = 1;

    while(count < n){
        count = (count * 2) + 1;
    }

    return count;
    
};