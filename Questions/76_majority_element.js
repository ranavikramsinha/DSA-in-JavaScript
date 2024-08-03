//* https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {

    let n = nums.length;
    let count1 = 0;
    let element;

    for(let i = 0; i < n; i++){
        if(count1 == 0){
            count1 = 1;
            element = nums[i];
        }
        else if(nums[i] === element){
            count1++;
        }
        else{
            count1--;
        }
    }

    let count2 = 0;
    for(let i = 0; i < n; i++){
        if(nums[i] === element){
            count2++;
        }

        if(count2 > n/2){
            return element;
        }
    }

    return -1;
};