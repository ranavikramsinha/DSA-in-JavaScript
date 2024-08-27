//* https://leetcode.com/problems/path-with-maximum-probability/

var maxProbability = function(n, edges, succProb, start_node, end_node) {
    let undirectedGraph = new Map();
    let result = new Array(n).fill(0);

    for(let i = 0; i < edges.length; i++){
        let a = edges[i][0];
        let b = edges[i][1];
        let probabiltiy = succProb[i];

        if(!undirectedGraph.has(a)){
            undirectedGraph.set(a, []);
        }

        if(!undirectedGraph.has(b)){
            undirectedGraph.set(b, []);
        }

        undirectedGraph.get(a).push([b, probabiltiy]);
        undirectedGraph.get(b).push([a, probabiltiy]);
    }

    let pq = new MaxPriorityQueue({priority: (x) => x[0]});

    result[start_node] = 1;

    pq.enqueue([1.0, start_node]);

    while(!pq.isEmpty()){
        let dequeuedElement = pq.dequeue().element;
        let currentProbability = dequeuedElement[0];
        let currentNode = dequeuedElement[1];

        if(currentNode === end_node){
            return currentProbability;
        }

        for(let child of undirectedGraph.get(currentNode) || []){
            if(result[child[0]] < currentProbability * child[1]){
                result[child[0]] = currentProbability * child[1];
                pq.enqueue([result[child[0]], child[0]])
            }
        }
    }

    return result[end_node];
};