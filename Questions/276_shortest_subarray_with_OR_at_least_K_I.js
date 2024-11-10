//* https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/

//* tc O(n ^ 2) | sc O(1)
var minimumSubarrayLength = function(nums, k) {

    if(nums.length === 0){
        return -1;
    }

    if(k === 0){
        return 1;
    }

    let n = nums.length;
    let result = Infinity;

    for(let i = 0; i < n; i++){
        let valueOfOr = 0;

        for(let j = i; j < n; j++){
            valueOfOr |= nums[j];

            if(valueOfOr >= k){
                result = Math.min(result, j - i + 1);
            }
        }
    }

    return result === Infinity ? -1 : result;
    
};