//* https://leetcode.com/problems/find-eventual-safe-states/

//* tc O(V + E) | sc O(V)

var eventualSafeNodes = function(graph) {

    let n = graph.length;
    let tracking = new Array(n).fill(false);
    let visited = new Array(n).fill(false);
    let arr = [];

    for(let i = 0; i < n; i++){
        if(!visited[i]){
            isLoop(graph, i);
        }
    }

    for(let i = 0; i < n; i++){
        if(!tracking[i]){
            arr.push(i);
        }
    }

    return arr;

    function isLoop(graph, idx){
        visited[idx] = true;
        tracking[idx] = true;

        for(let i of graph[idx]){
            if(!visited[i] && isLoop(graph, i)){
                return true;
            }
            else if(tracking[i]){
                return true;
            }
        }

        tracking[idx] = false;
        return false;
    }
    
};