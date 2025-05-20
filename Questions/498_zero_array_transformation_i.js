//* https://leetcode.com/problems/zero-array-transformation-i/

//* tc O(Q + n) | sc O(n) where Q is the number of queries

var isZeroArray = function(nums, queries) {

    let n = nums.length;
    let arr = new Array(n).fill(0);

    for(let [x, y] of queries){
        let startIndex = x;
        let endIndex = y;

        arr[startIndex] += 1;

        if(endIndex + 1 < n){
            arr[endIndex + 1] -= 1;
        }
    }

    let cumulativeSum = 0;

    for(let i = 0; i < n; i++){
        cumulativeSum += arr[i];

        if(cumulativeSum < nums[i]){
            return false;
        }
    }

    return true;
    
};