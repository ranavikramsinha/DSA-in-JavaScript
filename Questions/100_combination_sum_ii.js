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

//*
//* Initial Call:
//* combinationSum2([1, 2, 5, 6, 7, 10], 8)
//* 
//* Tree of Recursive Calls:
//* - [1] 
//*   - [1, 2]
//*     - [1, 2, 5] (target - 1 - 2 - 5 = 0; valid)
//*     - [1, 2, 6] (target - 1 - 2 - 6 = -1; invalid)
//*   - [1, 5]
//*     - [1, 5, 7] (target - 1 - 5 - 7 = -5; invalid)
//*   - [1, 6]
//*     - [1, 6, 7] (target - 1 - 6 - 7 = -6; invalid)
//* - [2]
//*   - [2, 5]
//*     - [2, 5, 6] (target - 2 - 5 - 6 = -3; invalid)
//*   - [2, 6]
//*     - [2, 6] (target - 2 - 6 = 0; valid)
//* - [5]
//*   - [5, 6] (target - 5 - 6 = -3; invalid)
//* 