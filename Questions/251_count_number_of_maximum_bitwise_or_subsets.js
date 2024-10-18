//* https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/

var countMaxOrSubsets = function(nums) {

    let maximumOr = 0;

    for(let num of nums){
        maximumOr |= num;
    }
    
    let n = nums.length;
    let count = 0;

    countSubsets(0, 0);
    
    return count;
    
    function countSubsets(index, currentOr){
        if(currentOr === maximumOr){
            count += Math.pow(2, n - index);
            return;
        }

        for(let i = index; i < n; i++){
            countSubsets(i + 1, currentOr | nums[i]);
        }
    }
};