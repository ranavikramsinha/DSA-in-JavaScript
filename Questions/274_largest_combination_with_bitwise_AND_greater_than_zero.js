//* https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/

//* tc O(n) | sc O(1)
var largestCombination = function(candidates) {

    let ans = 0;

    for(let i = 0; i < 24; i++){
        let count = 0;

        for(let num of candidates){
            if((num & (1 << i)) !== 0){
                count++
            }
        }

        ans = Math.max(ans, count);
    }

    return ans;
    
};