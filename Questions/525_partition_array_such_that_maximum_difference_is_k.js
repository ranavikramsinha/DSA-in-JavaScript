//* https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/

//* tc O(nlogn + n) | sc O(1)

var partitionArray = function(nums, k) {

    let n = nums.length;

    nums.sort((a, b) => a - b);

    let count = 1;
    let minimumNumber = nums[0];

    for(let i = 0; i < n; i++){
        if(nums[i] - minimumNumber > k){
            count++;
            minimumNumber = nums[i];
        }
    }

    return count;

};