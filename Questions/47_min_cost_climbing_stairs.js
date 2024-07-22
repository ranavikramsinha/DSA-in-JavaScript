//* https://leetcode.com/problems/min-cost-climbing-stairs/description/

var minCostClimbingStairs = function(cost) {

    let arr = []

    arr[0] = 0
    arr[1] = 0

    for(let i = 2; i <= cost.length; i++){
        arr[i] = Math.min(arr[i-1] + cost[i-1], arr[i-2] + cost[i-2])
    }

    return arr[arr.length - 1]
    
};