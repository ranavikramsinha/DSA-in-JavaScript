//* https://leetcode.com/problems/find-k-th-smallest-pair-distance

var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let a = 0;
    let b = nums[n - 1] - nums[0];
    let result = 0;

    function slidingWindow(nums, middle){
        let count = 0;
        let n = nums.length;
        let i = 0;
        let j = 1;

        while(j < n){
            while(nums[j] - nums[i] > middle){
                i++;
            }

            count += j - i;
            j++;
        }

        return count;
    }

    while(a <= b){
        let middle = Math.floor((a + b)/2);
        let count = slidingWindow(nums, middle);

        if(count < k){
            a = middle + 1;
        }
        else{
            result = middle;
            b = middle - 1;
        }
    }

    return result;
};