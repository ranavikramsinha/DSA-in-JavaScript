//* https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/

//* tc 0(nlogn) | sc 0(n)
var minimumMountainRemovals = function(nums) {

    let n = nums.length;
    let increasingSequenceLength = longestIncreasingSubsequence(nums);
    nums.reverse();

    let decreasingSequenceLength = longestIncreasingSubsequence(nums);
    decreasingSequenceLength.reverse();
    nums.reverse();

    let ans = n;

    for(let i = 0; i < n; i++){
        if(increasingSequenceLength[i] > 1 && decreasingSequenceLength[i] > 1){
            ans = Math.min(ans, n - (increasingSequenceLength[i] + decreasingSequenceLength[i] - 1));
        }
    }

    return ans;

    function longestIncreasingSubsequence(nums){
        let n = nums.length;
        let dp = new Array(n).fill(1);
        let arr = [nums[0]];
        let index = 0;

        for(let i = 1; i < n; i++){
            if(nums[i] > arr[index]){
                index++;
                arr.push(nums[i]);
            }
            else{
                putInPositionUsingBinarySearch(nums[i], arr, index);
            }

            dp[i] = index + 1;
        }

        return dp;
    }

    function putInPositionUsingBinarySearch(val, array, lastIndex){
        let left = 0;
        let right = lastIndex;

        while(left < right){
            let middle = left + Math.floor((right - left) / 2);

            if(array[middle] === val){
                return;
            }
            else if(array[middle] > val){
                right = middle;
            }
            else{
                left = middle + 1;
            }
        }
        array[left] = val;
    } 
};