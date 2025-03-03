//* https://leetcode.com/problems/partition-array-according-to-given-pivot/

//* tc O(n) | sc O(n) 

var pivotArray = function(nums, pivot) {

    let n = nums.length;
    let lessThanPivot = 0;
    let equalToPivot = 0;
    
    let arr = new Array(n);

    for(let i = 0; i < n; i++){
        if(nums[i] < pivot){
            lessThanPivot++;
        }
        else if(nums[i] === pivot){
            equalToPivot++;
        }
    }

    let less = 0;
    let equal = lessThanPivot;
    let greater = lessThanPivot + equalToPivot;

    for(let i = 0; i < n; i++){
        if(nums[i] < pivot){
            arr[less] = nums[i];
            less++;
        }
        else if(nums[i] === pivot){
            arr[equal] = nums[i];
            equal++;
        }
        else{
            arr[greater] = nums[i];
            greater++;
        }
    }

    return arr;
    
};