//* https://leetcode.com/problems/target-sum/

//* tc O(n * S) | sc O(n * S) where S is sum(nums)

var findTargetSumWays = function(nums, target) {

    let totalSum = nums.reduce((a, b) => a + b, 0);
    let avoidNegativeIndex = totalSum;

    let dp = Array.from({ length: nums.length}, () => new Array(2 * totalSum + 1).fill(undefined));

    return solve(nums, target, 0, 0, dp, avoidNegativeIndex);

    function solve(nums, target, i, sum, dp, avoidNegativeIndex){

        if(i === nums.length){
            return sum === target ? 1 : 0;
        }

        if(dp[i][sum + avoidNegativeIndex] !== undefined){
            return dp[i][sum + avoidNegativeIndex];
        }

        let add = solve(nums, target, i + 1, sum + nums[i], dp, avoidNegativeIndex);
        let subtract = solve(nums, target, i + 1, sum - nums[i], dp, avoidNegativeIndex);

        dp[i][sum + avoidNegativeIndex] = add + subtract;

        return dp[i][sum + avoidNegativeIndex];
    }
    
};