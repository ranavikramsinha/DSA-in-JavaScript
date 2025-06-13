//* https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/

//* tc O(n * log(m)) | sc O(1) where n is the number of elements in nums and m is the number of pairs (binary search)

var minimizeMax = function(nums, p) {

    let n = nums.length;

    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums[n - 1] - nums[0];
    let result = Infinity;


    while(left <= right){
        let middle = left + Math.trunc((right - left) / 2);

        if(isValid(nums, middle, p, n)){
            result = middle;
            right = middle - 1
        }
        else{
            left = middle + 1;
        }
    }

    return result;

    function isValid(nums, middle, p, n){
        let i = 0;
        let countPairs = 0;

        while(i < n - 1){
            if(nums[i + 1] - nums[i] <= middle){
                countPairs++;
                i += 2;
            }
            else{
                i++;
            }
        }

        return countPairs >= p;
    }
    
}