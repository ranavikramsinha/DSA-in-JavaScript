//* https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/

//* tc O(n) | sc O(n)
var resultsArray = function(nums, k) {
    let n = nums.length;
    let increasingOrderSubarraySize = 1;
    let result = [];

    for(let i = 0; i < n; i++){

        if(i > 0 && nums[i] === nums[i - 1] + 1){
            increasingOrderSubarraySize += 1;
        }
        else{
            increasingOrderSubarraySize = 1;
        }

        if(i >= k - 1){ //* k - 1 because of 0(zero) based indexing
            if(increasingOrderSubarraySize >= k){
                result.push(nums[i]);
            }
            else{
                result.push(-1);
            }
        }
    }

    return result;
};