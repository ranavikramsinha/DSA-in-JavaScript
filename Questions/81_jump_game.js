//* https://leetcode.com/problems/jump-game/

// var canJump = function(nums) {

//     let n = nums.length;
//     let maxReachable = 0;
    
//     for(let i = 0; i < n; i++){
//         if(i > maxReachable){
//             return false;
//         }

//         maxReachable = Math.max(maxReachable, i + nums[i]);
//     }

//     return true;
// };

var canJump = function(nums) {

    let n = nums.length;
    let dp = new Array(n).fill(-1);

    return solve(nums, n, 0);

    function solve(nums, n, idx){
        if(idx >= n -1){
            return true;
        }

        if(dp[idx] !== -1){
            return dp[idx] === 1;
        }

        for(let i = 1; i <= nums[idx]; i++){
            if(solve(nums, n, idx + i) === true){
                return true;
            }
        }

        dp[idx] = 0;
        return false;
    }

};