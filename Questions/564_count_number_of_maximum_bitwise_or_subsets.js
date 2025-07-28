//* https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/

//* tc : O(n * 2^n) | sc : O(n)

var countMaxOrSubsets = function(nums) {

    let maximumOr = 0;

    for(let num of nums){
        maximumOr |= num;
    }
    
    let n = nums.length;
    let count = 0;

    countSubsets(0, 0);
    
    return count;
    
    function countSubsets(index, currentOr){
        if(currentOr === maximumOr){
            count += Math.pow(2, n - index);
            return;
        }

        for(let i = index; i < n; i++){
            countSubsets(i + 1, currentOr | nums[i]);
        }
    }
    
};

//* tc : O(n * 2^n) | sc : O(n)

var countMaxOrSubsets = function(nums) {
    let maximumOr = 0;

    for(let num of nums){
        maximumOr |= num;
    }

    let n = nums.length;
    let dp = Array.from({length: n + 1}, () => Array(maximumOr + 1).fill(-1));
    let currentOr = 0;

    return countSubsets(0, currentOr, nums, maximumOr, dp);

    function countSubsets(index, currentOr, nums, maximumOr, dp){
        if(index === nums.length){
            if(currentOr === maximumOr){
                return dp[index][currentOr] = 1;
            }

            return dp[index][currentOr] = 0;
        }

        if(dp[index][currentOr] !== -1){
            return dp[index][currentOr];
        }

        let takeCount = countSubsets(index + 1, currentOr | nums[index], nums, maximumOr, dp);
        let notTakeCount = countSubsets(index + 1, currentOr, nums, maximumOr, dp);

        return dp[index][currentOr] = takeCount + notTakeCount;

    }
    
};
