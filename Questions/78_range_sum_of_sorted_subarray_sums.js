//* https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/

var rangeSum = function(nums, n, left, right) {

    let mod = 1000000007;
    let temp = [];

    for(let i = 0; i < n; i++){
        let sum = 0;
        for(let j = i; j < n; j++){
            sum += nums[j];
            temp.push(sum);
        }
    }

    temp.sort((a, b) => a - b);

    let result = 0;
    
    for(let i = left - 1; i <= right - 1; i++){
        result = (result + temp[i]) % mod;
    }

    return result;
    
};