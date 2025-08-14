//* https://leetcode.com/problems/largest-3-same-digit-number-in-string/

//* tc : O(n) | sc : O(1)

var largestGoodInteger = function(num) {

    let n = num.length;
    let maximumNumber = -1;

    for(let i = 2; i < n; i++){
        if(num[i] === num[i - 1]){
            if(num[i - 1] === num[i - 2]){
                maximumNumber = Math.max(maximumNumber, Number(num[i]));
            }
        }
    }

    return maximumNumber === -1 ? "" : `${maximumNumber}${maximumNumber}${maximumNumber}`;
    
};