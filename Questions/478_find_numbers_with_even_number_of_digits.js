//* https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

//* tc O(n) | sc O(1)

var findNumbers = function(nums) {

    let n = nums.length;
    let count = 0;

    for(let i = 0; i < n; i++){
        if(nums[i] >= 10 && nums[i] <= 99){
            count++;
        }
        else if(nums[i] >= 1000 && nums[i] <= 9999){
            count++;
        }
        else if(nums[i] === 100000){
            count++;
        }
    }

    return count;
    
};