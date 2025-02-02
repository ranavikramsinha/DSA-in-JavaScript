//* 

//* 

var check = function(nums) {

    let n = nums.length;
    let count = 0;

    for(let i = 0; i < n - 1; i++){
        if(nums[i] > nums[i + 1]){
            count++;
        }
    }

    if(nums[0] < nums[n - 1]){
        count++;
    }

    return count > 1 ? false : true;

};