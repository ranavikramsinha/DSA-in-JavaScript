//* https://leetcode.com/problems/number-of-zero-filled-subarrays/

//* tc : O(n) | sc : O(1)

var zeroFilledSubarray = function(nums) {

    let n = nums.length;
    let result = 0;
    let count = 0;

    for(let i = 0; i < n; i++){
        if(nums[i] === 0){
            count++;
        }
        else{
            count = 0;
        }

        result += count;
    }

    return result;
    
};


//* tc : O(n) | sc : O(1)

var zeroFilledSubarray = function(nums) {

    let n = nums.length;
    let result = 0;
    let i = 0;

    while(i < n){
        let count = 0;

        if(nums[i] === 0){
            while(i < n && nums[i] === 0){
                i++;
                count++;
            }
        }
        else{
            i++;
        }

        result += Math.trunc((count) * (count + 1) / 2);
    }

    return result;
    
};