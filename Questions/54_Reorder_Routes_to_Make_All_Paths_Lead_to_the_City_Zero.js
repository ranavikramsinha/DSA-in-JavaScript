//* https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/

var minReorder = function(n, connections) {

    const adj = Array.from({length: n}, () => [])
    let count = 0

    for(const connection of connections){
        adj[connection[0]].push([connection[1], 1])
        adj[connection[1]].push([connection[0], 0])
    }

    const visited = new Array(n).fill(false)
    dfs(0, -1, adj, visited)

    return count

    function dfs(node, parent, adj, visited){
        visited[node] = true

        for(const [child, sign] of adj[node]){
            if(!visited[child]){
                count += sign
                dfs(child, node, adj, visited)
            }
        }
    }
    
};