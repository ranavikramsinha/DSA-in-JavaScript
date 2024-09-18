//* https://leetcode.com/problems/largest-number/

var largestNumber = function(nums) {

    nums.sort(solve);

    if(nums[0] === 0){
        return "0";
    }

    let result = "";

    for(let num of nums){
        result += num.toString();
    }

    return result;

    function solve(a, b){
        let s1 = a.toString();
        let s2 = b.toString();

        if((s1 + s2) > (s2 + s1)){
            return -1;
        }
        
        return 1;
    }
    
};