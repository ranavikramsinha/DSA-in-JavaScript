//* https://leetcode.com/problems/sort-colors/

//* tc O(n) | sc O(1)

var sortColors = function(nums) {

    let n = nums.length;
    let i = 0;
    let j = 0;
    let k = n - 1;

    while(j <= k){
        if(nums[j] === 0){
            [nums[j], nums[i]] = [nums[i], nums[j]];
            i++;
            j++;
        }
        else if(nums[j] === 1){
            j++;
        }
        else if(nums[j] === 2){
            [nums[j], nums[k]] = [nums[k], nums[j]];
            k--;
        }
    }
    
};