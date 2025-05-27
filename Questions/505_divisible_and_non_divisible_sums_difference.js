//* https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/

//* tc O(1) | sc O(1)

var differenceOfSums = function(n, m) {

    let k = Math.trunc(n / m);

    let result = Math.trunc((n * (n + 1)) / 2) - (m * k * (k + 1));

    return result;
    
};