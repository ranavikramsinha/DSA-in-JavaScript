//* https://leetcode.com/problems/maximum-candies-allocated-to-k-children/

//* tc O(n * log(max)) | sc O(1)

var maximumCandies = function(candies, k) {

    if(candies.reduce((a, b) => a + b, 0) < k){
        return 0;
    }

    let n = candies.length;
    let left = 0;
    let right = Math.max(...candies);
    let result = 0;

    while(left <= right){
        let middle = left + Math.trunc((right - left) / 2);

        if(solve(candies, middle, k)){
            result = middle;
            left = middle + 1;
        }
        else{
            right = middle - 1;
        }
    }

    return result;

    function solve(candies, num, k){
        
        for(let i = 0; i < candies.length; i++){
            k -= Math.trunc(candies[i] / num);

            if(k <= 0){
                return true;
            }
        }

        return false;
    }
    
};