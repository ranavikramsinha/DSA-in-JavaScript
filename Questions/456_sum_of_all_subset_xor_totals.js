//* https://leetcode.com/problems/sum-of-all-subset-xor-totals/

//* tc O(2^n) | sc O(2^n)

var subsetXORSum = function(nums) {

    let n = nums.length;
    let subsetsArr = [];
    let currentSubsetArr = [];
    let result = 0;

    solve(0, currentSubsetArr);

    for(let subsetArr of subsetsArr){
        let xor = 0;

        for(let num of subsetArr){
            xor ^= num;
        }

        result += xor;
    }

    return result;

    function solve(i, currentSubsetArr){
        if(i === n){
            return subsetsArr.push([...currentSubsetArr]);
        }

        currentSubsetArr.push(nums[i]);
        solve(i + 1, currentSubsetArr);

        currentSubsetArr.pop();
        solve(i + 1, currentSubsetArr);
    }
    
};