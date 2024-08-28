//* https://leetcode.com/problems/contains-duplicate-ii/

var containsNearbyDuplicate = function(nums, k) {
    let n = nums.length;
    let set = new Set();

    for(let i = 0; i < n; i++){
        if(i > k){
            set.delete(nums[i - k - 1]);
        }

        if(set.has(nums[i])){
            return true;
        }

        set.add(nums[i]);
    }

    return false;
};