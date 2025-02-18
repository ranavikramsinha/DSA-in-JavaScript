//* https://leetcode.com/problems/next-permutation/

//* tc O(n) | sc O(1)

var nextPermutation = function(nums) {

    let n = nums.length;

    let index = -1;

    for(let i = n - 1; i > 0; i--){
        if(nums[i] > nums[i - 1]){
            index = i - 1;
            break;
        }
    }

    let swappingIndex = index;

    for(let j = n - 1; j >= index + 1; j--){
        if(nums[j] > nums[index]){
            swappingIndex = j;
            break;
        }
    }

    [nums[index], nums[swappingIndex]] = [nums[swappingIndex], nums[index]];

    reverse(nums, index + 1, n - 1);

    function reverse(nums, start, end){
        while(start < end){
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

};