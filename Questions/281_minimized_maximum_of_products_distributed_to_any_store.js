//* https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/

//* tc O(nlog(maxQuantiy)) | sc O(1)
var minimizedMaximum = function(n, quantities) {
    let left = 1;
    let right = Math.max(...quantities);
    let ans = 0;

    while(left <= right){
        let middle = left + Math.trunc((right - left) / 2);

        if(solve(middle, quantities, n)){
            ans = middle;
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }

    return ans;

    function solve(x, quantities, stores){
        for(let q of quantities){
            stores -= Math.ceil(q / x);
        }

        if(stores < 0){
            return false;
        }

        return true;
    }
    
};