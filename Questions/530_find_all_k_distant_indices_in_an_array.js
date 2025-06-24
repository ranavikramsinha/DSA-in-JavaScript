//* https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/

//* tc O(2n) === O(n) | sc O(n) because we visit each element not more than twice only

var findKDistantIndices = function(nums, key, k) {

    let n = nums.length;
    let result = [];

    for(let j = 0; j < n; j++){
        if(nums[j] === key){
            let start = Math.max(j - k, 0);
            let end = Math.min(j + k, n - 1);

            if(result.length > 0 && result[result.length - 1] >= start){
                start = result[result.length - 1] + 1;
            }

            for(let i = start; i <= end; i++){
                result.push(i);
            }
        }
    }

    return result;
    
};