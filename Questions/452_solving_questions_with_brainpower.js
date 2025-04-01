//* https://leetcode.com/problems/solving-questions-with-brainpower/

//* tc O(n) | sc O(n)

var mostPoints = function(questions) {

    if(questions.length === 1){
        return questions[0][0];
    }

    let n = questions.length;
    let memo = new Array(n + 1).fill(-1);

    return solve(0, questions);

    function solve(num, questions){
        if(num >= n){
            return 0;
        }

        if(memo[num] !== -1){
            return memo[num];
        }

        let taken = questions[num][0] + solve(num + questions[num][1] + 1, questions);
        let notTaken = solve(num + 1, questions);

        memo[num] = Math.max(taken, notTaken);

        return memo[num];
    }
    
};