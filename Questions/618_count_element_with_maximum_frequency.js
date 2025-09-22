//* https://leetcode.com/problems/count-elements-with-maximum-frequency/

//* tc : O(n) | sc : O(n)

var maxFrequencyElements = function(nums) {

    let frequency = {};
    let maxFrequency = 0;

    for (let num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, frequency[num]);
    }

    let maxCount = Object.values(frequency).filter(f => f === maxFrequency).length;

    return maxCount * maxFrequency;
    
};