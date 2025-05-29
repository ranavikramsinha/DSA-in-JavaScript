//* https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii

//* tc O(n + m) | sc O(n + m) where n is the edges1 length + 1 and m is the edges2 length + 1

var maxTargetNodes = function(edges1, edges2) {

    let n = edges1.length + 1;
    let m = edges2.length + 1;
    let color1 = new Array(n).fill(0);
    let color2 = new Array(m).fill(0);
    let count1 = solve(edges1, color1);
    let count2 = solve(edges2, color2);
    let result = new Array(n).fill(0);

    for(let i = 0; i < n; i++){
        result[i] = count1[color1[i]] + Math.max(count2[0], count2[1]);
    }

    return result;

    function solve(edges, color){
        let n = edges.length + 1;
        let children = Array.from({ length: n}, () => []);

        for(let [u, v] of edges){
            children[u].push(v);
            children[v].push(u);
        }

        let result = dfs(0, -1, 0, children, color);
        
        return [result, n - result];
    }

    function dfs(node, parent, depth, children, color){
        let result = 1 -(depth % 2);
        color[node] = depth % 2;

        for(let child of children[node]){
            if(child === parent){
                continue;
            }

            result += dfs(child, node, depth + 1, children, color);
        }

        return result;
    }
    
};