//* https://leetcode.com/problems/largest-divisible-subset/

//* tc O(n^2) | sc O(n)

var largestDivisibleSubset = function(nums) {

    let n = nums.length;
    nums.sort((a, b) => a - b);

    let bottomUp = new Array(n).fill(1);
    let previousIndex = new Array(n).fill(-1);
    let lastIndex = 0;
    let maximumLength = 1;
    let result = [];

    for(let i = 1; i < n; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] % nums[j] === 0){
                if(bottomUp[i] < bottomUp[j] + 1){
                    bottomUp[i] = bottomUp[j] + 1;
                    previousIndex[i] = j;
                }

                if(bottomUp[i] > maximumLength){
                    maximumLength = bottomUp[i];
                    lastIndex = i;
                }
            }
        }
    }

    while(lastIndex >= 0){
        result.push(nums[lastIndex]);
        lastIndex = previousIndex[lastIndex];
    }

    return result;
    
};