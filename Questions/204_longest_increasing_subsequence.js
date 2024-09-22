//* https://leetcode.com/problems/longest-increasing-subsequence/

//* tc O(nlogn) | sc O(n)
var lengthOfLIS = function(nums) {
    let dp = [];

    for(let num of nums){
        let left = 0;
        let right = dp.length;

        while(left < right){
            let middle = left + Math.trunc((right - left) / 2);

            if(dp[middle] < num){
                left = middle + 1;
            }
            else{
                right = middle;
            }
        }

        if(left === dp.length){
            dp.push(num);
        }
        else{
            dp[left] = num;
        }
    }

    return dp.length;
};

//* time O(n^2) | space O(n^2)
var lengthOfLIS = function(nums) {
    let n = nums.length;
    let dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(-1));

    return solve(nums, 0, -1);

    function solve(nums, i, prev){
        if(i >= n){
            return 0;
        }

        if(prev !== -1 && dp[i][prev] !== -1){
            return dp[i][prev];
        }

        let take = 0;

        if(prev === -1 || nums[prev] < nums[i]){
            take = 1 + solve(nums, i + 1, i);
        }

        let notTake = solve(nums, i + 1, prev)

        if(prev !== -1){
            dp[i][prev] = Math.max(take, notTake);
        }

        return Math.max(take, notTake);
    }
};