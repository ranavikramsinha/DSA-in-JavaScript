//* https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    if(nums.length < 3){
        return [];
    }

    let result = [];
    let n = nums.length;
    nums.sort((a, b) => a - b);

    for(let i = 0; i < n; i++){
        if(i > 0 && nums[i] === nums[i - 1]){
            continue;
        }

        let n1 = nums[i];
        let target = -n1;

        solve(nums, target, i + 1, n - 1);
    }

    function solve(nums, target, i, j){
        while(i < j){
            if(nums[i] + nums[j] > target){
                j--;
            }
            else if(nums[i] + nums[j] < target){
                i++;
            }
            else{
                while(i < j && nums[i] === nums[i + 1]){
                    i++;
                }

                while(i < j && nums[j] === nums[j - 1]){
                    j--;
                }

                result.push([-target, nums[i], nums[j]]);

                i++;
                j--;
            }
        }
    }

    return result;
};