//* https://leetcode.com/problems/number-of-people-aware-of-a-secret/

//* tc : O(n) | sc : O(n)

var peopleAwareOfSecret = function(n, delay, forget) {

    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    
    let modulo = 1e9 + 7;
    let secretShared = 0;
    let numberOfPeopleKnowsTheSecret = 0;

    for (let day = 2; day <= n; day++){

        if (day - delay >= 1) {
            secretShared = (secretShared + dp[day - delay]) % modulo;
        }

        if (day - forget >= 1) {
            secretShared = (secretShared - dp[day - forget] + modulo) % modulo;
        }

        dp[day] = secretShared;
    }

    for (let day = n - forget + 1; day <= n; day++) {
        numberOfPeopleKnowsTheSecret = (numberOfPeopleKnowsTheSecret + dp[day]) % modulo;
    }

    return numberOfPeopleKnowsTheSecret;
};