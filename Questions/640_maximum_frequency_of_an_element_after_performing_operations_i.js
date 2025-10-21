//* https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/

//* tc : O(n + k) | sc : O(maxNumber) where k = max - min

var maxFrequency = function(nums, k, numOperations) {

    let maxNum = -Infinity;
    let minNum = Infinity;
    
    for (const num of nums) {
        maxNum = Math.max(maxNum, num);
        minNum = Math.min(minNum, num);
    }
    
    let count = new Array(maxNum + 1).fill(0);
    for (let num of nums) {
        count[num]++;
    }
    
    let prefixSum = new Array(maxNum + 1).fill(0);
    prefixSum[0] = count[0];

    for (let i = 1; i <= maxNum; i++) {
        prefixSum[i] = prefixSum[i - 1] + count[i];
    }
    
    let maxFreq = 0;
    
    for (let target = minNum; target <= maxNum; target++) {
        let leftBound = Math.max(target - k, minNum);
        let rightBound = Math.min(target + k, maxNum);
        
        let totalInRange = prefixSum[rightBound] - (prefixSum[leftBound - 1] ?? 0);
        
        let elementsToModify = totalInRange - count[target];
        
        let possibleToModify = Math.min(numOperations, elementsToModify);
        
        let currentFreq = count[target] + possibleToModify;
        
        maxFreq = Math.max(maxFreq, currentFreq);
    }
    
    return maxFreq;
    
};