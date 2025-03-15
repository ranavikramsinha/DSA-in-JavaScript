//* https://leetcode.com/problems/house-robber-iv/

//* tc O(n * log(max(nums))) | sc O(1)

var minCapability = function(nums, k) {

    let n = nums.length;
    let left = Math.min(...nums);
    let right = Math.max(...nums);
    let result = Math.max(...nums);

    while(left <= right){
        let middle = left + Math.trunc((right - left) / 2);

        if(solve(nums, middle, k) === true){
            result = middle;
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }

    return result;

    function solve(nums, number, k){
        for(let i = 0; i < nums.length; i++){
            if(nums[i] <= number){
                k--;
                i++;
            }

            if(k === 0){
                return true;
            }
        }

        return false;
    }
    
};