//* https://leetcode.com/problems/find-the-maximum-sum-of-node-values/

//* tc O(n) | sc O(1)

var maximumValueSum = function(nums, k, edges) {

    let n = nums.length;
    let sum = 0;
    let minimumLoss = Infinity;
    let count = 0;

    for(let i = 0; i < n; i++){
        if((nums[i] ^ k) > nums[i]){
            sum += nums[i] ^ k;
            count++;
        }
        else{
            sum += nums[i];
        }

        minimumLoss = Math.min(minimumLoss, Math.abs(nums[i] - (nums[i] ^ k)));
    }

    if(count % 2 === 0){
        return sum;
    }

    return sum - minimumLoss;
    
};