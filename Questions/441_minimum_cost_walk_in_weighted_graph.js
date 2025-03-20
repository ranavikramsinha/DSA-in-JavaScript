//* https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/

//* tc O(n + e + q) | sc O(n)

var minimumCost = function(n, edges, query) {

    let roots = new Array(n);
    let componentCosts = new Array(n).fill(-1);

    for(let i = 0; i < n; i++){
        roots[i] = i;
        componentCosts[i] = -1;
    }

    for(let [u, v, w] of edges){
        let rootSource = findingRoot(u);
        let rootDestination = findingRoot(v);

        if(rootSource !== rootDestination){
            componentCosts[rootSource] = componentCosts[rootSource] & componentCosts[rootDestination];
            roots[rootDestination] = rootSource;
        }

        componentCosts[rootSource] = componentCosts[rootSource] & w;
    }

    let result = [];

    for(let [startNode, endNode] of query){
        if(startNode === endNode){
            result.push(0);
            continue;
        }

        let rootStart = findingRoot(startNode);
        let rootEnd = findingRoot(endNode);

        if(rootStart !== rootEnd){
            result.push(-1);
        }
        else{
            result.push(componentCosts[rootStart]);
        }
    }

    return result;

    function findingRoot(node){
        if(roots[node] !== node){
            roots[node] = findingRoot(roots[node]);
        }

        return roots[node];
    }
    
};