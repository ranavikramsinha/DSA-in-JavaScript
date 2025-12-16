//* https://leetcode.com/problems/maximum-profit-from-trading-stocks-with-discounts/

//* tc : O(n * (Budget)^2) | sc : O(Budget)

    function dfs(u) {
        let child0 = Array(budget + 1).fill(-Infinity);
        let child1 = Array(budget + 1).fill(-Infinity);

        child0[0] = 0;
        child1[0] = 0;

        for (let v of children[u]) {
            let [v0, v1] = dfs(v);

            let m0 = Array(budget + 1).fill(-Infinity);
            for (let c = 0; c <= budget; c++) if (child0[c] >= 0) {
                for (let cc = 0; cc + c <= budget; cc++) if (v0[cc] >= 0) {
                    m0[c + cc] = Math.max(m0[c + cc], child0[c] + v0[cc]);
                }
            }

            child0 = m0;

            let m1 = Array(budget + 1).fill(-Infinity);

            for (let c = 0; c <= budget; c++) if (child1[c] >= 0) {
                for (let cc = 0; cc + c <= budget; cc++) if (v1[cc] >= 0) {
                    m1[c + cc] = Math.max(m1[c + cc], child1[c] + v1[cc]);
                }
            }

            child1 = m1;
        }

        let dp0 = Array(budget + 1).fill(-Infinity);
        let dp1 = Array(budget + 1).fill(-Infinity);

        for (let c = 0; c <= budget; c++) if (child0[c] >= 0) {
            dp0[c] = Math.max(dp0[c], child0[c]);
            dp1[c] = Math.max(dp1[c], child0[c]);
        }

        let costFull = present[u - 1];
        let profitFull = future[u - 1] - costFull;

        for (let c = 0; c + costFull <= budget; c++) if (child1[c] >= 0) {
            dp0[c + costFull] = Math.max(dp0[c + costFull], profitFull + child1[c]);
        }

        let costHalf = Math.floor(present[u - 1] / 2);
        let profitHalf = future[u - 1] - costHalf;
        
        for (let c = 0; c + costHalf <= budget; c++) if (child1[c] >= 0) {
            dp1[c + costHalf] = Math.max(dp1[c + costHalf], profitHalf + child1[c]);
        }

        return [dp0, dp1];
    }