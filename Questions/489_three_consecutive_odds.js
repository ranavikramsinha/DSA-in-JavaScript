//* https://leetcode.com/problems/three-consecutive-odds/

//* tc O(n) | sc O(1)

var threeConsecutiveOdds = function(arr) {

    let n = arr.length;
    let countOddNumbers = 0;

    for(let i = 0; i < n; i++){
        if(arr[i] % 2 !== 0){
            countOddNumbers++;
        }
        else{
            countOddNumbers = 0;
        }

        if(countOddNumbers === 3){
            return true;
        }
    }

    return false;
    
};