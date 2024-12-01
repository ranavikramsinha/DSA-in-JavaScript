//* https://leetcode.com/problems/keep-multiplying-found-values-by-two/

//* tc O(n + log(max)) | sc O(n)

var findFinalValue = function(nums, original) {

    let set = new Set();

    for(let num of nums){
        set.add(num);
    }

    let flag = true;

    while(flag){
        if(set.has(original)){
            original *= 2;
        }
        else{
            flag = false;
        }
    }

    return original;
    
};