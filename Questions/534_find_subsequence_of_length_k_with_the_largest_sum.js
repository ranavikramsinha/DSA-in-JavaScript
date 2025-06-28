//* https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/

//* tc O(nlog(n)) | sc O(n)

var maxSubsequence = function(nums, k) {

    let n = nums.length;

    if(n === k){
        return nums;
    }

    let numberWithIndex = [];

    for(let i = 0; i < n; i++){
        numberWithIndex.push([nums[i], i]);
    }

    numberWithIndex.sort((a, b) => b[0] - a[0]);

    let topElementsOfK = numberWithIndex.slice(0, k);

    topElementsOfK.sort((a, b) => a[1] - b[1]);

    return topElementsOfK.map((numberWithIndex) => numberWithIndex[0]);
    
};