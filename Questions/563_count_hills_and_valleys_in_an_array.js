//* https://leetcode.com/problems/count-hills-and-valleys-in-an-array/

//* tc O(n) | sc O(1)

var countHillValley = function(nums) {

    let n = nums.length;
    let count = 0;
    let i = 0;
    let j = 1;

    while(j + 1 < n){
        if((nums[i] < nums[j] && nums[j] > nums[j + 1]) || (nums[i] > nums[j] && nums[j] < nums[j + 1])){
            count++;
            i = j;
        }

        j++;
    }

    return count;
    
};