//* https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/

//* tc O(m + n) | sc O(1) where m is the length of nums1 and n is the length of nums2

var minSum = function(nums1, nums2) {

    let sum1 = nums1.reduce((a, b) => a + b, 0);
    let sum2 = nums2.reduce((a, b) => a + b, 0);
    let countZeroInNums1 = 0;
    let countZeroInNums2 = 0;

    for(let num of nums1){
        if(num === 0){
            countZeroInNums1++;
            sum1++;
        }
    }

    for(let num of nums2){
        if(num === 0){
            countZeroInNums2++;
            sum2++;
        }
    }

    if((sum1 < sum2 && countZeroInNums1 === 0) || (sum1 > sum2 && countZeroInNums2 === 0)){
        return -1;
    }

    return Math.max(sum1, sum2);
    
};