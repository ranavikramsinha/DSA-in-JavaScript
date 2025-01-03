//* https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/

//* tc O(n) | sc O(1)

var waysToSplit = function(nums) {
    
    let modulee = 10 ** 9 + 7;
    let n = nums.length;
    let maxMiddleIndex = n -2;
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;
    let middleStartSum = 0;
    let middleEndSum = 0;
    let count = 0;
    let middleStartIndex = -1;
    let middleEndIndex = -1;

    for(let i = 0; i < n; i++){
        leftSum += nums[i];
        middleStartSum -= nums[i];
        middleEndSum -= nums[i];

        while(middleStartIndex <= maxMiddleIndex && (middleStartIndex <= i || middleStartSum < leftSum)){
            middleStartIndex++;
            middleStartSum += nums[middleStartIndex];
        }

        while(middleEndIndex <= maxMiddleIndex && (middleStartIndex > middleEndIndex || middleEndSum <= totalSum - middleEndSum - leftSum)){
            middleEndIndex++;
            middleEndSum += nums[middleEndIndex];
        }

        count = (count + middleEndIndex - middleStartIndex) % modulee;
    }

    return count;

};