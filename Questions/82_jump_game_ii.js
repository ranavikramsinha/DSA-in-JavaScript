//* https://leetcode.com/problems/jump-game-ii/

// var jump = function(nums) {

//     let n = nums.length;
//     let jumps = 0;
//     let current = 0;
//     let farthest = 0;

//     for(let i = 0; i < n - 1; i++){

//         farthest = Math.max(farthest, i + nums[i]);

//         if(i === current){
//             current = farthest;
//             jumps++;
//         }
//     }

//     return jumps;
    
// };

var jump = function(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(Infinity);

    dp[0] = 0

    if(n === 1){
        return 0;
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n && j <= i + nums[i]; j++) {
            dp[j] = Math.min(dp[j], dp[i] + 1);
        }
    }

    return dp[n - 1];
};