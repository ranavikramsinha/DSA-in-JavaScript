//* https://leetcode.com/problems/find-sum-of-array-product-of-magical-sequences/

//* tc : O(n * m ^ 3 * k) | sc : O(m ^ 2 * k)

var magicalSum = function(m, k, nums) {

    let MOD = 1000000007n;
    let n = nums.length;
    let fact = Array(m + 1).fill(0n);
    fact[0] = 1n;

    for (let i = 1; i <= m; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
    }

    function modPow(base, exp) {
        let b = base % MOD, e = BigInt(exp), r = 1n;
        while (e > 0n) {
            if (e & 1n) r = (r * b) % MOD;
            b = (b * b) % MOD;
            e >>= 1n;
        }
        return r;
    }

    let invFact = Array(m + 1).fill(0n);
    invFact[m] = modPow(fact[m], Number(MOD - 2n));

    for (let i = m; i > 0; i--) {
        invFact[i - 1] = (invFact[i] * BigInt(i)) % MOD;
    }

    let powNum = nums.map(v => {
        let b = BigInt(v);
        let row = Array(m + 1).fill(0n);
        row[0] = 1n;
        for (let c = 1; c <= m; c++) row[c] = (row[c - 1] * b) % MOD;
        return row;
    });

    let dp = Array.from({ length: m + 1 }, () =>
        Array.from({ length: k + 1 }, () =>
            Array(m + 1).fill(0n)
        )
    );

    dp[0][0][0] = 1n;

    for (let idx = 0; idx < n; idx++) {
        let ndp = Array.from({ length: m + 1 }, () =>
            Array.from({ length: k + 1 }, () =>
                Array(m + 1).fill(0n)
            )
        );

        for (let used = 0; used <= m; used++) {
            for (let j = 0; j <= k; j++) {
                for (let carry = 0; carry <= m; carry++) {
                    let base = dp[used][j][carry];
                    if (base === 0n) continue;

                    let maxPick = m - used;
                    for (let c = 0; c <= maxPick; c++) {
                        let s = carry + c;
                        let bit = s & 1;
                        let nj = j + bit;
                        if (nj > k) continue;
                        let ncarry = s >>> 1;

                        let contrib = base;
                        contrib = (contrib * powNum[idx][c]) % MOD;
                        contrib = (contrib * invFact[c]) % MOD;

                        ndp[used + c][nj][ncarry] =
                            (ndp[used + c][nj][ncarry] + contrib) % MOD;
                    }
                }
            }
        }

        dp = ndp;
    }

    function popcountInt32(x) {
        let count = 0;
        let v = x;
        while (v) { count += (v & 1); v >>>= 1; }
        return count;
    }

    let ans = 0n;
    for (let j = 0; j <= k; j++) {
        let rowUsedM = dp[m][j];
        for (let carry = 0; carry <= m; carry++) {
            let v = rowUsedM[carry];
            if (v === 0n) continue;
            if (j + popcountInt32(carry) === k) {
                ans = (ans + v) % MOD;
            }
        }
    }

    ans = (ans * fact[m]) % MOD;
    return Number(ans);

};