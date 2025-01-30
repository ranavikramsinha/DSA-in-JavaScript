//* https://leetcode.com/problems/is-graph-bipartite/

//* tc O(V + E) | sc O(V)

var isBipartite = function(graph) {

    let n = graph.length;
    let colour = new Array(n).fill(-1);

    for(let i = 0; i < n; i++){
        if(colour[i] === -1){
            if(!dfs(graph, i, colour, 1)){
                return false;
            }
        }
    }

    return true;

    function dfs(graph, current, colour, currentcolour){
        colour[current] = currentcolour;

        for(let i of graph[current]){
            if(colour[i] == colour[current]){
                return false;
            }

            if(colour[i] === -1){
                let colouring = 1 - currentcolour;

                if(!dfs(graph, i, colour, colouring)){
                    return false;
                }
            }
        }

        return true;
    }   
};