//* https://leetcode.com/problems/maximum-difference-between-increasing-elements/

//* tc O(n) | sc O(1)

var maximumDifference = function(nums) {

    let n = nums.length;
    let minimumNumber = nums[0];
    let result = -1;

    for(let j = 1; j < n; j++){
        if(nums[j] > minimumNumber){
            result = Math.max(result, nums[j] - minimumNumber);
        }
        else{
            minimumNumber = nums[j];
        }
    }

    return result;
    
};