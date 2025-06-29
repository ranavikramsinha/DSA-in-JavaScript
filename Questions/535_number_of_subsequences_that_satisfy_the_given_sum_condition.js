//* https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/

//* tc O(nlog(n)) | sc O(1)

var numSubseq = function(nums, target) {

    let n = nums.length;
    let powerUpToN = new Array(n);
    powerUpToN[0] = 1;

    let modulo = 10 ** 9 + 7;

    nums.sort((a, b) => (a - b));

    for(let i = 1; i < n; i++){
        powerUpToN[i] = (powerUpToN[i - 1] * 2) % modulo;
    }

    let left  = 0;
    let right = n - 1;
    let result = 0;

    while(left <= right){
        if(nums[left] + nums[right] <= target){
            let difference = right - left;

            result = (result + powerUpToN[difference]) % modulo;
            left++;
        }
        else{
            right--;
        }
    }

    return result;
    
};