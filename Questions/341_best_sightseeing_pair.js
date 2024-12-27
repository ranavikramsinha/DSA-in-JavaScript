//* https://leetcode.com/problems/best-sightseeing-pair/

//* tc O(n) | sc O(1)

var maxScoreSightseeingPair = function(values) {

    let n = values.length;
    let maximumPair = values[0];
    let ans = 0;

    for(let i = 1; i < n; i++){

        let a = values[i] - i;
        let b = maximumPair;

        ans = Math.max(ans, a + b);

        maximumPair = Math.max(maximumPair, values[i] + i);
    }

    return ans;
    
};