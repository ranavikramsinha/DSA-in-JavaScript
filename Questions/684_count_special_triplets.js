//* https://leetcode.com/problems/count-special-triplets/

//* tc : O(n) | sc : O(n)

let specialTriplets = function (nums) {
    
    let modulo = 1e9 + 7;
    let n = nums.length;

    let rightCount = new Map();

    for (let i = 0; i < n; i++) {
        rightCount.set(nums[i], (rightCount.get(nums[i]) || 0) + 1);
    }

    let leftCount = new Map();
    let result = 0;

    for (let j = 0; j < n; j++) {
        rightCount.set(nums[j], rightCount.get(nums[j]) - 1);

        let target = nums[j] * 2;

        let left = leftCount.get(target) || 0;
        let right = rightCount.get(target) || 0;

        result = (result + left * right) % modulo;

        leftCount.set(nums[j], (leftCount.get(nums[j]) || 0) + 1);
    }

    return result;

};