//* https://leetcode.com/problems/partition-equal-subset-sum/

//* tc O(n * sum) | sc O(n * sum) where sum is half of total sum

var canPartition = function(nums) {

    let n = nums.length;
    let totalSum = nums.reduce((a, b) => a + b, 0);

    if(totalSum % 2 == 1){
        return false;
    }

    let totalSumHalf = totalSum / 2;
    let memo = Array.from({length: n + 1}, () => new Array(totalSumHalf + 1).fill(-1));

    return solve(0, nums, totalSumHalf);

    function solve(index, nums, half){
        if(half === 0){
            return true;
        }

        if(index >= n){
            return false;
        }

        if(memo[index][half] !== -1){
            return memo[index][half];
        }

        let take = false;

        if(nums[index] <= half){
            take = solve(index + 1, nums, half - nums[index]);
        }

        let notTake = solve(index + 1, nums, half);

        memo[index][half] = take || notTake;

        return memo[index][half];
    }
    
};