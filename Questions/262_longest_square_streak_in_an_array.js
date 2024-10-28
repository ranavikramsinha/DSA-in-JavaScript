//* https://leetcode.com/problems/longest-square-streak-in-an-array/

var longestSquareStreak = function(nums) {

    let set = new Set(nums);

    let longestStreakLength = 0;

    for(let num of set){
        let streakLength = 0;

        let currentNum = num;

        while(set.has(currentNum)){
            streakLength++;

            currentNum = currentNum * currentNum;
        }

        if(streakLength > 1){
            longestStreakLength = Math.max(longestStreakLength, streakLength);
        }
    }

    return longestStreakLength > 1 ? longestStreakLength : -1;
    
};