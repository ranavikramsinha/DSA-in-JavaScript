//* https://leetcode.com/problems/count-the-number-of-arrays-with-k-matching-adjacent-elements/

//* tc O(n * log(n) * log(MOD)) | sc O(n)

var countGoodArrays = function(n, m, k) {

    let MOD = 1000000007n;
    let N = BigInt(n), M = BigInt(m), K = BigInt(k);
    let factorial = Array(n + 1).fill(1n);

    for (let i = 1; i <= n; i++){
        factorial[i] = factorial[i - 1] * BigInt(i) % MOD;
    }

    let inverseFactorial = Array(n + 1).fill(1n);

    inverseFactorial[n] = modPow(factorial[n], MOD - 2n);

    for (let i = n; i > 0; i--){
        inverseFactorial[i - 1] = inverseFactorial[i] * BigInt(i) % MOD;
    }

    let comb = factorial[n - 1] * inverseFactorial[k] % MOD * inverseFactorial[n - 1 - k] % MOD;

    let result = comb * M % MOD;
    result = result * modPow(M - 1n, N - K - 1n) % MOD;

    return Number(result);

    function modPow(a, b){
        let result = 1n;
        let base = a % MOD;
        let exponent = BigInt(b);

        while (exponent > 0n) {
            if (exponent & 1n) result = (result * base) % MOD;

            base = (base * base) % MOD;
            exponent >>= 1n;
        }

        return result;
    };
};