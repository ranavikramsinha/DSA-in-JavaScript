//* https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/

//* tc : O(n) | sc : O(1)

var kLengthApart = function(nums, k) {

    let current = k;

    for(let num of nums){
        if(num === 0){
            current++;
            continue;
        }

        if(current < k){
            return false;
        }

        current = 0;
    }

    return true;
    
};