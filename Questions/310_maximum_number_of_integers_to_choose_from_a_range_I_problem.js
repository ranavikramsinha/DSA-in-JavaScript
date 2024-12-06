//* https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/

//* tc O(n + b) | sc O(b) where n is the number of integers and b is the number of banned integers

var maxCount = function(banned, n, maxSum) {

    let set = new Set();
    let count = 0;
    let sum = 0;

    for(let i = 0; i < banned.length; i++){
        set.add(banned[i]);
    }

    for(let i = 1; i <= n; i++){
        if(!set.has(i) && sum + i <= maxSum){
            count++;
            sum += i;
        }
    }

    return count;
    
};