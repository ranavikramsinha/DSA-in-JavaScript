//* https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/

//* tc : O(n ^ 2) | sc : O(n)

var minimumScore = function(nums, edges) {

    let n = nums.length;
    let adj = Array.from({ length: n}, () => []);

    for(let [u, v] of edges){
        adj[u].push(v);
        adj[v].push(u);
    }

    let subtreeXor = new Array(n).fill(0);
    let inTime   = new Array(n).fill(0);
    let outTime  = new Array(n).fill(0);
    let timer = 0;

    function dfs(node, parent){
        subtreeXor[node] = nums[node];
        inTime[node] = timer++;

        for(let neighbor of adj[node]){
            if(neighbor !== parent){
                dfs(neighbor, node);
                subtreeXor[node] ^= subtreeXor[neighbor];
            }
        }

        outTime[node] = timer++;
    }

    dfs(0, -1);

    function isAncestor(u, v){
        return inTime[v] >= inTime[u] && outTime[v] <= outTime[u];
    }

    function getScore(a, b, c){
        return Math.max(a, b, c) - Math.min(a, b, c);
    }

    let result = Infinity;

    for(let u = 1; u < n; ++u){
        for(let v = u + 1; v < n; ++v){
            let xor1, xor2, xor3;

            if(isAncestor(u, v)){
                xor1 = subtreeXor[v];
                xor2 = subtreeXor[u] ^ xor1;
                xor3 = subtreeXor[0] ^ xor1 ^ xor2;
            }
            else if(isAncestor(v, u)){
                xor1 = subtreeXor[u];
                xor2 = subtreeXor[v] ^ xor1;
                xor3 = subtreeXor[0] ^ xor1 ^ xor2;
            }
            else{
                xor1 = subtreeXor[u];
                xor2 = subtreeXor[v];
                xor3 = subtreeXor[0] ^ xor1 ^ xor2;
            }

            result = Math.min(result, getScore(xor1, xor2, xor3));
        }
    }

    return result;
    
};