//* https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/

//* tc O(n) | sc O(1)

var numOfSubarrays = function(arr) {

    let n = arr.length;
    let count = 0;
    let odd = 0;
    let even = 1;
    let sum = 0;
    let modulo = 10 ** 9 + 7;

    for(let i = 0; i < n; i++){

        sum += arr[i];

        if(sum % 2 === 0){
            count = (count + odd) % modulo;
            even++;
        }
        else{
            count = (count + even) % modulo;
            odd++
        }
    }

    return count;
    
};