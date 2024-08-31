//* https://leetcode.com/problems/longest-consecutive-sequence/

var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0;
    }

    let setOfNumbers = new Set(nums);
    let result = 1;

    for(let num of nums){
        if(!setOfNumbers.has(num - 1)){
            let count = 1;
            let number = num;

            while(setOfNumbers.has(number + 1)){
                count++;
                number++;
            }

            result = Math.max(result, count);
        }
    }

    return result;
    
};