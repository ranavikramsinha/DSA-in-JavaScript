//* https://leetcode.com/problems/minimum-penalty-for-a-shop/

//* tc : O(n) | sc : O(1)

var bestClosingTime = function(customers) {

    let n = customers.length;
    let maxScore = 0;
    let score = 0;
    let bestHour = -1;

    for (let i = 0; i < n; i++) {
        score += (customers[i] === "Y") ? 1 : -1;

        if (score > maxScore) {
            maxScore = score;
            bestHour = i;
        }
    }

    return bestHour + 1;
    
};