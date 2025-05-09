//* https://leetcode.com/problems/count-number-of-balanced-permutations/

//* tc O(n ^ 3) | sc O(n ^ 2)

var countBalancedPermutations = function(num) {

    let n = num.length;
    let modulo = BigInt(1e9 + 7);
    let totalDigitSum = 0;
    let frequency = Array(10).fill(0);

    for (let char of num) {
        let d = char.charCodeAt(0) - 48;
        totalDigitSum += d;
        frequency[d]++;
    }
    if (totalDigitSum % 2 !== 0) return 0;

    let halfPlus = BigInt(Math.floor((n + 1) / 2));
    let half = BigInt(Math.floor(n / 2));

    let factorial = Array(n + 1).fill(0n);
    factorial[0] = 1n;
    for (let i = 1; i <= n; i++) {
        factorial[i] = (factorial[i - 1] * BigInt(i)) % modulo;
    }

    let inverseFactorial = Array(n + 1).fill(0n);
    for (let i = 0; i <= n; i++) {
        inverseFactorial[i] = power(factorial[i], modulo - 2n);
    }

    let totalPermPossible = (factorial[Number(halfPlus)] * factorial[Number(half)]) % modulo;
    let maxEven = Math.floor((n + 1) / 2);
    let maxSum = totalDigitSum;
    let memo = Array.from({ length: 10 }, () =>
        Array.from({ length: maxEven + 1 }, () =>
        Array(maxSum + 1).fill(null)
        )
    );
    
    function power(a, b){
        let res = 1n;
        let base = a % modulo;

        while (b > 0){
            if (b & 1n){
                res = (res * base) % modulo;
            }

            base = (base * base) % modulo;
            b >>= 1n;
        }

        return res;
    };

    function solve(digit, usedEven, currentSum) {
        if (digit === 10) {
            return (currentSum === totalDigitSum / 2 && usedEven === maxEven) ? totalPermPossible: 0n;
        }
        if (memo[digit][usedEven][currentSum] !== null) {
            return memo[digit][usedEven][currentSum];
        }

        let ways = 0n;
        let maxCount = Math.min(frequency[digit], maxEven - usedEven);

        for (let count = 0; count <= maxCount; count++) {
            let evenCount = count;
            let oddCount = frequency[digit] - count;
            let choose = (inverseFactorial[evenCount] * inverseFactorial[oddCount]) % modulo;

            let numberOfValidWays = solve(digit + 1, usedEven + evenCount, currentSum + digit * evenCount);

            ways = (ways + numberOfValidWays * choose) % modulo;
        }

        memo[digit][usedEven][currentSum] = ways;
        return ways;
    }

    return Number(solve(0, 0, 0));
    
};