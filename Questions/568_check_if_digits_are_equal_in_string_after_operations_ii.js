//* https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-ii/

//* tc : O(n) | sc : O(n)

var hasSameDigits = function(s) {

    let n = s.length;
    let mod5CombTable = [
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 2, 1, 0, 0],
        [1, 3, 3, 1, 0],
        [1, 4, 1, 4, 1],
    ];

    let weights = [];

    for (let i = 0; i < n - 1; i++){
        weights.push(combMod10(n - 2, i));
    }

    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < n - 1; i++){
        let digit1 = parseInt(s[i], 10);
        let digit2 = parseInt(s[i + 1], 10);

        sum1 = (sum1 + weights[i] * digit1) % 10;
        sum2 = (sum2 + weights[i] * digit2) % 10;
    }

    return sum1 === sum2;

    function combMod2(n, k){
        return ((k & ~n) === 0) ? 1 : 0;
    }

    function combMod5(n, k){
        let result = 1;

        while (n > 0 || k > 0){
            let ni = n % 5;
            let ki = k % 5;

            if (ki > ni){
                return 0;
            }

            result = (result * mod5CombTable[ni][ki]) % 5;
            n = Math.floor(n / 5);
            k = Math.floor(k / 5);

        }

        return result;
    }

    function combMod10(n, k) {
        let mod2 = combMod2(n, k);
        let mod5 = combMod5(n, k);
        let lookup = [
            [0, 6, 2, 8, 4],
            [5, 1, 7, 3, 9],
        ];

        return lookup[mod2][mod5];
    }
    
};