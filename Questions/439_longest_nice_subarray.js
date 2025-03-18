//* https://leetcode.com/problems/longest-nice-subarray/

//* tc O(n) | sc O(1)

var longestNiceSubarray = function(nums) {

    let n = nums.length;
    let result = 1;
    let i = 0;
    let j = 0;
    let mask = 0;

    while(j < n){
        while((mask & nums[j]) !== 0){
            mask ^= nums[i];
            i++;
        }

        result = Math.max(result, j - i + 1);
        mask |= nums[j];
        j++;
    }

    return result;
    
};

//* tc O(n * n) | sc O(1)

var longestNiceSubarray = function(nums) {

    let n = nums.length;
    let result = 0;

    for(let i = 0; i < n; i++){
        let mask = 0;
        for(let j = i; j < n; j++){
            if((mask & nums[j])!== 0){
                break;
            }

            result = Math.max(result, j - i + 1);
            mask |= nums[j];
        }
    }

    return result;
    
};