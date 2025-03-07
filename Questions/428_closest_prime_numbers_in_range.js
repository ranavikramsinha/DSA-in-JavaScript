//* https://leetcode.com/problems/closest-prime-numbers-in-range/

//* tc O(n * log(log(n))) | sc O(n)

var closestPrimes = function(left, right) {

    let prime = [];
    let arr = sieve(right);
    let minimumDifference = Infinity;
    let result = [-1, -1];

    for(let num = left; num <= right; num++){
        if(arr[num] === true){
            prime.push(num);
        }
    }

    for(let i = 1; i <= prime.length; i++){
        let difference = prime[i] - prime[i - 1];

        if(difference < minimumDifference){
            minimumDifference = difference;
            result = [prime[i - 1], prime[i]];
        }
    }

    return result;

    function sieve(right){
        let isPrime = new Array(right + 1).fill(true);

        isPrime[0] = false;
        isPrime[1] = false;

        for(let i = 0; i <= Math.sqrt(right); i++){
            if(isPrime[i] === true){
                for(let j = 2; i * j <= right; j++){
                    isPrime[i * j] = false;
                }
            }
        }

        return isPrime;
    }
    
};