//* 

var minSwaps = function(nums) {

    let n = nums.length;

    let countOfOnes = nums.reduce((acc, num) => acc + num, 0);

    let i = 0;
    let j = 0;

    let currentOnes = 0;
    let maxCount = 0;

    while(j < 2*n){
        if(Math.floor(nums[j%n]) === 1){
            currentOnes++;
        }

        if(j - i + 1 > countOfOnes){
            currentOnes -= Math.floor(nums[i%n]);
            i++;
        }

        maxCount = Math.max(maxCount, currentOnes);
        j++;
    }

    return countOfOnes - maxCount;
    
};