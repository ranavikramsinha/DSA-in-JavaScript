//* https://leetcode.com/problems/minimum-cost-for-tickets/

//* DFS :- tc O(n) | sc O(1) === O(366)

var mincostTickets = function(days, costs) {

    let n = days.length;
    let memo = new Array(366).fill(-1);
    return solve(0);

    function solve(idx){
        if(idx >= n){
            return 0;
        }

        if(memo[idx] !== -1){
            return memo[idx];
        }

        let oneDayPassCost = costs[0] + solve(idx + 1);

        let i = idx;
        while(i < n && days[i] < days[idx] + 7){
            i++;
        }

        let sevenDayPassCost = costs[1] + solve(i);

        let j = idx;
        while(j < n && days[j] < days[idx] + 30){
            j++;
        }

        let thirtyDayPassCost = costs[2] + solve(j);

        return memo[idx] = Math.min(oneDayPassCost, sevenDayPassCost, thirtyDayPassCost);
    }
    
};