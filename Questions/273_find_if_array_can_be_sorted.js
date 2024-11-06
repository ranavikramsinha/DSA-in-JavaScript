//* https://leetcode.com/problems/find-if-array-can-be-sorted/

//* tc O(n^2) | sc O(1)
var canSortArray = function(nums) {
    let n = nums.length;
    let swap = true;

    for(let i = 0; i < n; i++){
        swap = false;

        for(let j = 0; j < n - i - 1; j++){
            if(nums[j] <= nums[j + 1]){
                continue;
            }
            else if(bitsCount(nums[j]) === bitsCount(nums[j + 1])){
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                swap = true;
            }
            else{
                return false;
            }
        }
        if(swap === false){
            break;
        }
    }

    return true;

    function bitsCount(num){
        let count = 0;
        while(num !== 0){
            count += num & 1;
            num >>= 1;
        }
        return count;
    }
};

//* tc O(n) | sc O(1)
var canSortArray = function(nums) {
    let numOfSetBits = nums[0].toString(2).split('1').length - 1;
    let maxOfSegment = nums[0];
    let minOfSegment = nums[0];   
    let maxOfPrevSegment = -Infinity;
        
    for (let i = 1; i < nums.length; i++) {
        const currentSetBits = nums[i].toString(2).split('1').length - 1;
            
        if(currentSetBits === numOfSetBits){
            maxOfSegment = Math.max(maxOfSegment, nums[i]);
            minOfSegment = Math.min(minOfSegment, nums[i]);
        }
        else{
            if (minOfSegment < maxOfPrevSegment){
                return false;
            }
                
            maxOfPrevSegment = maxOfSegment;
            maxOfSegment = nums[i];
            minOfSegment = nums[i];
            numOfSetBits = currentSetBits;
        }
    }
        
    if (minOfSegment < maxOfPrevSegment) {
        return false;
    }
        
    return true;  
};