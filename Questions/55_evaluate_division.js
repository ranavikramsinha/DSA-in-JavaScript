//* https://leetcode.com/problems/evaluate-division/

var calcEquation = function(equations, values, queries) {

    const n = equations.length
    const adj = new Map()

    for(let i = 0; i < n; i++){
        const[a, b] = equations[i]
        const val = values[i]

        if(!adj.has(a)){
            adj.set(a, [])
        }

        if(!adj.has(b)){
            adj.set(b, [])
        }

        adj.get(a).push([b, val])
        adj.get(b).push([a, 1.0 / val])
    }

    const result = []

    for(let query of queries){
        const [src, dst] = query

        let ans = {val: -1.0}
        let product = 1.0

        if(adj.has(src)){
            const visited = new Set()
            dfs(adj, src, dst, visited, product, ans)
        }

        result.push(ans.val)
    }

    return result

    function dfs(adj, src, dst, visited, product, ans){
        if(visited.has(src)){
            return
        }

        visited.add(src)

        if(src === dst){
            ans.val = product
            return
        }

        for(let [b, val] of adj.get(src) || []){
            dfs(adj, b, dst, visited, product * val, ans)
        }
    }
    
};