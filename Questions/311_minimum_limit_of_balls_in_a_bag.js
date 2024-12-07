//* https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/

//* tc O(nlog(max(nums))) | sc O(1)

var minimumSize = function(nums, maxOperations) {
    let left = 1;
    let right = Math.max(...nums);
    let result = 0;

    while(left <= right){
        let middle = left + Math.trunc((right - left) / 2);

        if(isValid(nums, maxOperations, middle) === true){
            result = middle;
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }
    return result;

    function isValid(nums, maxOperations, middle){
        let numberOfOperations = 0;

        for(let num of nums){
            let operation = Math.trunc(num / middle);
            
            if(num % middle === 0){
                operation -= 1;
                numberOfOperations += operation;
            }
            else if(num % middle !== 0){
                numberOfOperations += operation;
            }
        }
        return numberOfOperations <= maxOperations;
    }  
};