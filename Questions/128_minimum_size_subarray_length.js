//* https://leetcode.com/problems/minimum-size-subarray-sum/

var minSubArrayLen = function(target, nums) {
    let n = nums.length;
    let i = 0;
    let j = 0;
    let minimumLength = Infinity;
    let sum = 0;

    while(j < n){
        sum += nums[j];

        while(sum >= target){
            minimumLength = Math.min(minimumLength, j - i + 1);
            sum -= nums[i];
            i++;
        }
        j++;
    }

    return minimumLength === Infinity ? 0 : minimumLength;;
};