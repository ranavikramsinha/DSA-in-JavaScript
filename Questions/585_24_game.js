//* https://leetcode.com/problems/24-game/

//* tc : O(1) | sc : O(1)

var judgePoint24 = function(cards) {

    let epsilon = 0.001;
    let nums = cards.map(card => card * 1.0);

    return solve(nums);

    function solve(nums){
        if(nums.length === 1){
            return Math.abs(nums[0] - 24) <= epsilon;
        }

        for(let i = 0; i < nums.length; i++){
            for(let j = 0; j < nums.length; j++){
                if(i === j){
                    continue;
                }

                let temp = [];

                for(let k = 0; k < nums.length; k++){
                    if(k !== i && k !== j){
                        temp.push(nums[k]);
                    }
                }

                let a = nums[i];
                let b = nums[j];

                let possibleValue = [a + b, a - b, a * b];

                if(Math.abs(b) > 0){
                    possibleValue.push(a / b);
                }

                for(let value of possibleValue){
                    temp.push(value);

                    if(solve(temp)){
                        return true;
                    }

                    temp.pop();
                }
            }
        }

        return false;

    }

};