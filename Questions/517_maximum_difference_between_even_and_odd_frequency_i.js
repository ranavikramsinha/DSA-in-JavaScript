//* https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/

//* tc O(n) | sc O(1)

var maxDifference = function(s) {

    let n = s.length;
    let maximumOdd = 0;
    let minimumEven = n + 1;
    let arr = new Array(26).fill(0);

    for(let character of s){
        arr[character.charCodeAt(0) - 97]++;
    }

    for(let i = 0; i < 26; i++){
        if(arr[i] === 0){
            continue;
        }
        else if(arr[i] % 2 === 0){
            minimumEven = Math.min(minimumEven, arr[i]);
        }
        else{
            maximumOdd = Math.max(maximumOdd, arr[i]);
        }
    }

    return (maximumOdd - minimumEven);
    
};