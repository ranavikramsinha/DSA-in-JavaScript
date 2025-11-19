//* https://leetcode.com/problems/keep-multiplying-found-values-by-two/

//* tc : O(n) | sc : O(n)

var findFinalValue = function(nums, original) {

    let set = new Set(nums);

    while(set.has(original)){
        original *= 2;
    }

    return original;
    
};