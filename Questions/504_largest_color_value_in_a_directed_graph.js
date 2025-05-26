//* https://leetcode.com/problems/largest-color-value-in-a-directed-graph/

//* tc O(v + e) | sc O(v + e)

var largestPathValue = function(colors, edges) {

    let n = colors.length;
    let adj = Array.from({ length: n}, () => []);
    let indegree = Array(n).fill(0);

    for (let [u, v] of edges){
        adj[u].push(v);
        indegree[v]++;
    }

    let dp = Array.from({ length: n}, () => Array(26).fill(0));
    let queue = [];

    for (let i = 0; i < n; i++){
        let c = colors.charCodeAt(i) - 97;
        dp[i][c] = 1;

        if (indegree[i] === 0){
            queue.push(i);
        }
    }

    let processed = 0;
    let answer = 0;

    while (queue.length){
        let u = queue.shift();
        processed++;

        let uColorIdx = colors.charCodeAt(u) - 97;
        answer = Math.max(answer, dp[u][uColorIdx]);

        for (let v of adj[u]){
            for (let c = 0; c < 26; c++){
                let add = (colors.charCodeAt(v) - 97 === c) ? 1 : 0;
                dp[v][c] = Math.max(dp[v][c], dp[u][c] + add);
            }
            
            if (--indegree[v] === 0){
                queue.push(v);
            }
        }
    }

    if (processed < n){
        return -1;
    }

    return answer;
    
};