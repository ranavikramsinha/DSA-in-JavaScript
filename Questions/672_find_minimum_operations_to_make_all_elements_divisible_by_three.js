//* https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/

//* tc : O(n) | sc : O(1)

var minimumOperations = function(nums) {

    let n = nums.length;
    let count = 0;

    for(let i = 0; i < n; i++){
        if(nums[i] % 3 !== 0){
            count++;
        }
    }

    return count;
    
};