//* https://leetcode.com/problems/minimum-time-to-make-rope-colorful/

//* tc : O(n) | sc : O(1)

var minCost = function(colors, neededTime) {

    let totalCost = 0;
    let maximumTime = neededTime[0];

    for (let i = 1; i < colors.length; i++) {
        if (colors[i] === colors[i - 1]) {
            totalCost += Math.min(neededTime[i], maximumTime);
            maximumTime = Math.max(neededTime[i], maximumTime);
        }
        else {

            maximumTime = neededTime[i];
        }
    }

    return totalCost;
    
};