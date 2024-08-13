//* https://leetcode.com/problems/combination-sum-ii

var combinationSum2 = function(candidates, target) {
    let result = [];
    let current = [];

    candidates.sort((a, b) => a - b);

    function solve(candidates, target, current, idx, result){
        if(target < 0){
            return;
        }

        if(target === 0){
            result.push([...current]);
            return;
        }

        for(let i = idx; i < candidates.length ; i++){
            if(i > idx && candidates[i] === candidates[i - 1]){
                continue;
            }

            current.push(candidates[i]);
            solve(candidates, target - candidates[i], current, i + 1, result);
            current.pop();
        }
    }

    solve(candidates, target, current, 0, result);

    return result;
};
