//* https://leetcode.com/problems/increasing-triplet-subsequence/

var increasingTriplet = function(nums) {

    let small = Infinity
    let smallest = Infinity

    for (const num of nums){
        if(num <= small){
            small = num
        }
        else if(num <= smallest){
            smallest = num
        }
        else{
            return true
        }
    }

    return false
    
};

console.log(increasingTriplet([2, 1, 5, 0, 4, 4]))